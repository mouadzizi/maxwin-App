import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeStack from "../../StackNavigation/HomeStack";
import FavoriteStack from "../../StackNavigation/FavoriteStack";
import MessagesStack from "../../StackNavigation/MessagesStack";
import ProfileStack from "../../StackNavigation/ProfileStack";
import {COLORS} from '../../../GlobalStyle'

export default function MainBottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.primary,
      }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Favorite" component={FavoriteStack} />
        <Tab.Screen name="Messages" component={MessagesStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
