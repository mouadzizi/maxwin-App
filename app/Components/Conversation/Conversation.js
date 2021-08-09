import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Divider from "../Divider";
import { styles } from "./Conversation.style";


const { width } = Dimensions.get("window");
export default function Conversation({ onClick,picture,title,lastMessage,time,seen,contact }) {
  return (
    <TouchableOpacity onPress={onClick} activeOpacity={0.5} style={styles.chatBox}>
      <View style={styles.infoBox}>
        <Image
          style={styles.avatar}
          source={{ uri: picture }}
          resizeMode="cover"
        />

        <View style={styles.title}>
          <Text> {title} </Text>
          <Text style={{fontWeight: seen? 'bold' : '100' }}> {contact} : {lastMessage} </Text>
        </View>
        <View style={[styles.timeBox]}>
          <Text>{time}</Text>
        </View>
        {seen && <Text style={styles.badge}></Text>}
      </View>
      <Divider style={{ position: "absolute" }} width={width} />
    </TouchableOpacity>
  );
}


