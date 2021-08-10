import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EmptyChats from "../../SVG/EmptyChats";
import Conversation from '../../Components/Conversation'
import styles from "./MessagesView.style";

export default function MessagesView({ navigation }) {
  return (
    <View style={styles.container}>
      <Conversation />

    </View>
  );
}
