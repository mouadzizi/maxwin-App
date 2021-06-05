import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import sytles from './MainBottomNavigation.style' 
import HomeView from "../../../View/HomeView";
import ProfileView from "../../../View/ProfileView";
import FavoriteView from "../../../View/FavoriteView";
import MessagesView from "../../../View/MessagesView";

export default function MainBottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Favorite" component={FavoriteView} />
        <Tab.Screen name="Messages" component={MessagesView} />
        <Tab.Screen name="Profile" component={ProfileView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
