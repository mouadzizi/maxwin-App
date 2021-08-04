import React, { useState } from "react";
import { View } from "react-native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { auth } from "../../API/Firebase";

export default function ChatView({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const user = auth.currentUser;
  const { seller, postTitle, postId, pic } = route.params;

  return (
    <View style={{ flex: 1 }}>
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
        onSend={(messages) => sendMessage(messages)}
        user={{
          _id: user.uid,
          name: user.displayName,
          avatar: user.photoURL,
        }}
      />
    </View>
  );
}
