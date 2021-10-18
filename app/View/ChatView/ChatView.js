import React, { useEffect, useState, useCallback } from "react";
import { View, Dimensions } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { db } from "../../API/Firebase";
import { getUser, timestamp,sendNotification, getProductById } from "../../API/APIFunctions";
import * as Progress from "react-native-progress";
import { COLORS } from "../../GlobalStyle";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
const { width } = Dimensions.get("screen");

export default function ChatView({ route, navigation }) {


  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { seller, postTitle, postId, pic } = route.params;
  const chatRef = db.collection("chats");

  useEffect(() => {
    getUser().then((fb_user) => setUser(fb_user));
    navigation.setOptions({
      title:postTitle,
      headerRight:()=><Avatar size='small' containerStyle={{marginRight:10}} rounded source={{uri:pic}} onPress={goToProduct} />
    })
  }, []);

  const fetchMessages = useCallback((snapShot) => {
    setMessages([]);
    const promises = snapShot.docs.map((doc) => {
      const dbMessages = doc.data();
      return {
        ...dbMessages,
        createdAt: dbMessages.createdAt.toDate(),
      };
    });
    Promise.all(promises)
      .then((res) => appendMessages(res))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    const cleanup = chatRef
      .doc(chatId())
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot(fetchMessages);
    return () => {
      cleanup();
    };
  }, [user]);

  async function sendMessage(messages) {
    db.collection("chats")
      .doc(chatId())
      .set({
        contact1: {
          _id: user.uid,
          username: user.username,
          expoPushNotif:user.expoPushNotif,
          avatar:user.picUrl
        },
        contact2: {
          _id: seller._id || seller.uid ,
          username: seller.username,
          expoPushNotif:seller.expoPushNotif,
          avatar:user.picUrl
        },
        chatPic: pic,
        seen: false,
        lastMessage: messages[0].text,
        createdAt: timestamp,
        title: postTitle,
        postId,
      });
    const writes = messages.map((m) => {
      db.collection("chats")
        .doc(chatId())
        .collection("messages")
        .add({
          ...m,
          serverTime: timestamp,
        })
    });
    await sendNotification(seller.expoPushNotif,messages[0].text)
    await Promise.all(writes);
  }

  const appendMessages = useCallback((messages) => {
    setMessages((prevMsg) => GiftedChat.append(prevMsg, messages));
  });
  const chatId = () => {
    if ((seller._id || seller.uid) > user.uid)
      return (seller._id || seller.uid) + "-" + user.uid + "-" + postId;
    else return user.uid + "-" + (seller._id || seller.uid) + "-" + postId;
  };
 const goToProduct= ()=>{
   setLoading(true)
  getProductById(postId).then(res=>{
    setLoading(false)
    navigation.navigate("ProductDetails", { product: res })
    
  })
 }
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <Progress.Bar
          indeterminate
          color={COLORS.primary}
          width={width}
          height={8}
        />
      ) : null}
      <GiftedChat
        placeholder="Tappez votre message"
        renderBubble={(props) => (
          <Bubble
            {...props}
            timeTextStyle={{
              left: {
                color: "white",
              },
            }}
            textStyle={{
              left: {
                color: "white",
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: COLORS.Grey[300],
              },
              right: {
                backgroundColor: COLORS.primary,
              },
            }}
          />
        )}
        renderSend={(props) => (
          <Send
            {...props}
            alwaysShowSend={true}
            label="Envoyer"
            textStyle={{ color: COLORS.primary }}
          />
        )}
        messages={messages}
        onSend={sendMessage}
        user={{
          _id: user.uid,
          name: user.username,
          avatar:user.picUrl
        }}
      />
    </View>
  );
}
