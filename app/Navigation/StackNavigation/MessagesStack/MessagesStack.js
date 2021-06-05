import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesView from "../../../View/MessagesView";

export default function MessagesStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessagesView"
        component={MessagesView}
        options={{ title: "Messages" }}
      />
    </Stack.Navigator>
  );
}
