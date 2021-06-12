import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {COLORS} from '../../../GlobalStyle'
import ProfileView from "../../../View/ProfileView";

export default function ProfileStack() {
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator
    screenOptions={{
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 55,
      },
      headerTitleAlign: "center",
      headerTitle: 'Mon Profile',
      headerTitleStyle:{
        fontSize: 20,
      }
    }}>
      <StackHome.Screen
        name="ProfileView"
        component={ProfileView}
        options={{ title: "Profile" }}
      />
    </StackHome.Navigator>
  );
}
