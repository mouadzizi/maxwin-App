import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons, SimpleLineIcons } from "react-native-vector-icons";

import HomeStack from "../../StackNavigation/HomeStack";
import FavoriteStack from "../../StackNavigation/FavoriteStack";
import MessagesStack from "../../StackNavigation/MessagesStack";
import ProfileStack from "../../StackNavigation/ProfileStack";
import AddProductStack from "../../StackNavigation/AddProductStack";

import { COLORS } from "../../../GlobalStyle";

export default function MainBottomNavigation() {
  const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute" //back button will back to initial route
        lazy={false} // this will load all the stacks from the first render
        tabBarOptions={{
          showLabel: false, //hide the text
          activeTintColor: COLORS.primary,
          style:{
            position: 'absolute',
            bottom: 5,
            left: 5,
            right: 5,
            borderRadius: 10,
            height: 60
          }
        }}
        
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
              focused ? 
              <MaterialCommunityIcons
                name="home"
                color={COLORS.primary}
                size={50}
              />
              :
              <MaterialCommunityIcons
                name="home"
                color={COLORS.primary}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteStack}
          options={{
            tabBarIcon: ({focused}) => (
              focused ? 
              <Ionicons
                name="heart"
                color={COLORS.primary}
                size={50}
              />
              :
              <Ionicons
                name="heart"
                color={COLORS.primary}
                size={30}
              />
              
            ),
          }}
        />
        <Tab.Screen
          name="Add Product"
          component={AddProductStack}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="add-circle"
                color={COLORS.third}
                size={80}
                style={{top: -15}}
              />
            ),
            
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStack}
          options={{
            tabBarIcon: ({focused}) => (
              focused ? 
              <Ionicons
                name="chatbubbles"
                color={COLORS.primary}
                size={50}
              />
              :
              <Ionicons
                name="chatbubbles"
                color={COLORS.primary}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({focused}) => (
              focused?
              <Ionicons
                name="person"
                color={COLORS.primary}
                size={50}
              />
              :
              <Ionicons
                name="person"
                color={COLORS.primary}
                size={30}
              />
            ),
          }}
        />
      </Tab.Navigator>
  );
}
