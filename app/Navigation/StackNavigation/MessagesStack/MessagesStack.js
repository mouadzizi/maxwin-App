import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesView from "../../../View/MessagesView";
import ChatView from '../../../View/ChatView/ChatView'
import { COLORS } from '../../../GlobalStyle'

export default function MessagesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 55,
        },
        headerTitleAlign: "center",
        headerTitle: 'Messagerie',
        headerTitleStyle: {
          fontSize: 20,
        }
      }}>
      <Stack.Screen
        name="MessagesView"
        component={MessagesView}
        options={{ title: "Messages" }}
      />
      <Stack.Screen
        name="ChatView"
        component={ChatView}
        options={{ title: "Chat" }}
      />
    </Stack.Navigator>
  );
}
