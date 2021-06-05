import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../../../View/HomeView";

export default function HomeStack() {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="HomeView"
        component={HomeView}
        options={{ title: "Home" }}
      />
    </StackHome.Navigator>
  );
}
