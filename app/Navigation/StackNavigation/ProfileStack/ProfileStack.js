import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileView from "../../../View/ProfileView";

export default function ProfileStack() {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name="ProfileView"
        component={ProfileView}
        options={{ title: "Profile" }}
      />
    </StackHome.Navigator>
  );
}
