import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import EmptyChats from "../../SVG/EmptyChats";
import styles from "./MessagesView.style";
import Conversation from "../../Components/Conversation/Conversation";
import { db, auth } from "../../API/Firebase";

export default function MessagesView({ navigation }) {
  const [conversation, setConversation] = useState([]);
  const uid = auth.currentUser?.uid;
  const chatRef = db.collection("chats");

  // const fetchConversations = useCallback((snapShot) => {
  //   const conversations = snapShot.docs
  //     .filter(
  //       (doc) =>
  //         doc.data().contact1._id.search(user.uid) >= 0 ||
  //         doc.data().contact2._id.search(user.uid) >= 0
  //     )
  //     .map((d) => {
  //       return {
  //         key: d.id,
  //         ...d.data(),
  //       };
  //     });
  //   Promise.all(conversations).then((res) => setConversation(res));
  // }, []);

  useEffect(() => {
    var cleanup = chatRef
      .orderBy("createdAt", "desc")
      .onSnapshot(fetchConversations);

    return () => {
      cleanup;
      setConversation([]);
    };
  }, [user]);

  const goToChat = (item) => {
    db.collection("chats")
      .doc(item.key)
      .update({ seen: true })
      .then(() => {
        navigation.navigate("ChatView", {
          seller: uid === item.contact1._id ? item.contact2 : item.contact1,
          chatId: item.key,
          pic: item.chatPic,
          postTitle: item.title,
          postId: item.postId,
        });
      });
  };

  const renderItem = useCallback(
    ({ item }) => (
      <Conversation
        seen={uid === item.contact1._id ? false : !item.seen}
        picture={item.chatPic}
        lastMessage={item.lastMessage}
        title={item.title}
        onClick={() => goToChat(item)}
        // time={item.createdAt.toDate().toLocaleTimeString()}
        contact={user.uid == item.contact1._id ? "Vous" : item.contact1.name}
      />
    ),
    []
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={conversation}
        renderItem={renderItem}
        ListHeaderComponent={() => <Text> Messages </Text>}
      />
    </View>
  );
}
