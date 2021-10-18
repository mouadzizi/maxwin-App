import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import EmptyChats from "../../SVG/EmptyChats";
import styles from "./MessagesView.style";
import Conversation from "../../Components/Conversation/Conversation";
import { db, auth } from "../../API/Firebase";
import { useFocusEffect } from "@react-navigation/native";

export default function MessagesView({ navigation,onFocus,removeBadge }) {
  const [conversation, setConversation] = useState([]);
  const [user, setUser] = useState({});
  const [ready, setReady] = useState(false)
  const chatRef = db.collection("chats");

  const fetchConversations = useCallback((snapShot) => {
    const conversations = snapShot.docs
      .filter(
        (doc) =>
          doc.data().contact1._id.search(user.uid) >= 0 ||
          doc.data().contact2._id.search(user.uid) >= 0
      )
      .map((d) => {
        return {
          key: d.id,
          ...d.data(),
        };
      });
    Promise.all(conversations).then((res) => setConversation(res));
  }, []);

  useEffect(() => {
    if (user) {
      var cleanup = chatRef
        .orderBy("createdAt", "desc")
        .onSnapshot((snapShot) => {
          const conversations = snapShot.docs
            .map((d) => {
              return {
                key: d.id,
                ...d.data(),
              };
            });
          setConversation(conversations.filter(obj=>obj.key.search(user.uid) >= 0));
        });
    }
    return () => {
      cleanup;
      setConversation([]);
    };
  }, [user]);

  useEffect(() => {
    setReady(true)
    if(!navigation.isFocused()){
      const badge = conversation.filter(({seen})=> seen===false).length
      onFocus(badge)
    }
    return () => {
    }
  }, [conversation]);
  
  useFocusEffect(
    useCallback(() => {
      removeBadge()
      let cleanUp = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          showAlert();
          setConversation([]);
        }
      });
      return () => {
        cleanUp();
      };
    }, [])
  );

  const goToChat = (item) => {
    db.collection("chats")
      .doc(item.key)
      .update({ seen: true })
      .then(() => {
        navigation.navigate("ChatView", {
          seller: user.uid == item.contact1._id ? item.contact2 : item.contact1,
          chatId: item.key,
          pic: item.chatPic,
          postTitle: item.title,
          postId: item.postId,
        });
      });
  };

  const showAlert = () => {
    Alert.alert("Avez-vous un compte ?", "Veuillez vous connecter", [
      {
        text: "S'identifier",
        style: "default",
        onPress: () => navigation.navigate("SignIn"),
      },
      {
        text: "Annuler",
        onPress: () => navigation.goBack(),
      },
    ]);
  };
  const renderItem = ({ item }) => (
    <Conversation
      seen={user.uid === item.contact1._id ? false : !item.seen}
      picture={item.chatPic}
      lastMessage={item.lastMessage.substring(0, 18)}
      title={item.title}
      onClick={() => goToChat(item)}
      // time={item.createdAt.toDate().toLocaleTimeString()}
      contact={user.uid == item.contact1._id ? "Vous" : item.contact1.username}
    />
  );

  return (
    <View
      style={conversation.length < 1 ? styles.containerImage : styles.container}
    >
      {conversation.length < 1 && <EmptyChats />}
      <FlatList
        data={conversation}
        renderItem={renderItem}
      />
    </View>
  );
}
