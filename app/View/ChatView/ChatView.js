import React, { useEffect, useState, useCallback } from "react";
import { View, Dimensions } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { auth, db } from "../../API/Firebase";
import { getUser, timestamp } from "../../API/APIFunctions";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("screen");
export default function ChatView({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { seller, postTitle, postId, pic } = route.params;
  const chatRef = db.collection("chats");

  useEffect(() => {
    getUser().then((fb_user) => setUser(fb_user));
  }, []);

  const fetchMessages = useCallback((snapShot) => {
    setMessages([]);
    setLoading(true);
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
          name: user.firstName,
        },
        contact2: {
          _id: seller.uid,
          name: seller.firstName,
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
        });
    });
    await Promise.all(writes);
  }

  const appendMessages = useCallback((messages) => {
    setMessages((prevMsg) => GiftedChat.append(prevMsg, messages));
  });
  const chatId = () => {
    if (seller.uid > user.uid)
      return seller.uid + "-" + user.uid + "-" + postId;
    else return user.uid + "-" + seller.uid + "-" + postId;
  };

  return (
    <View style={{ flex: 1 }}>
        <Progress.Bar  animated={false} color="blue" width={width} height={8} />
        <GiftedChat
          placeholder="Tapper un message"
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
                  backgroundColor: "#F16E44",
                },
                right: {
                  backgroundColor: "#4898D3",
                },
              }}
            />
          )}
          renderSend={(props) => (
            <Send
              {...props}
              alwaysShowSend={true}
              label="Envoyer"
              textStyle={{ color: "#4898D3" }}
            />
          )}
          messages={messages}
          onSend={sendMessage}
          user={{
            _id: user.uid,
            name: user.firstName,
          }}
        />
    
    </View>
  );
}
