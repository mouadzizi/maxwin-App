import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesView from "../../../View/MessagesView";
import { COLORS } from "../../../GlobalStyle";

export default function MessagesStack({onFocus2,remove_Badge}) {
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
        headerTitle: "Messagerie",
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="MessagesView"
        options={{ title: "Messages" }}
      >
        {(props)=> <MessagesView {...props} removeBadge={remove_Badge} onFocus={(badge)=>onFocus2(badge)} /> }

      </Stack.Screen>
    </Stack.Navigator>
  );
}
