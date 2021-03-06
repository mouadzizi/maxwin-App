import React, {useEffect,useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
} from "react-native-vector-icons";

import HomeStack from "../../StackNavigation/HomeStack";
import FavoriteStack from "../../StackNavigation/FavoriteStack";
import MessagesStack from "../../StackNavigation/MessagesStack";
import ProfileStack from "../../StackNavigation/ProfileStack";
import AddProductStack from "../../StackNavigation/AddProductStack";

import { COLORS } from "../../../GlobalStyle";
import { auth, db } from "../../../API/Firebase";

import * as Notifications from "expo-notifications";
import { useFocusEffect } from "@react-navigation/native";

export default function MainBottomNavigation() {
  const Tab = createBottomTabNavigator();
  const [favBadge, setFavBadge] = useState();
  const [msgBadge, setmsgBadge] = useState(null);
  var _unsub;
  useEffect(() => {
    var unsub = auth.onAuthStateChanged((user) => {
      unsub();
      if (user) {
        _unsub = db
          .collection("users")
          .doc(user.uid)
          .collection("favorite")
          .onSnapshot((snapShot) => {
            setFavBadge(snapShot.docs.length);
          });
      } else setFavBadge(0);
    });

    return () => {
      _unsub();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute" //back button will back to initial route
      lazy={false} // this will load all the stacks from the first render
      tabBarOptions={{
        showLabel: false, //hide the text
        activeTintColor: COLORS.primary,
        style: {
          position: "absolute",
          bottom: 5,
          left: 5,
          right: 5,
          borderRadius: 10,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="home"
                color={COLORS.primary}
                size={50}
              />
            ) : (
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
          title: "Mes favoris",
          tabBarBadge: favBadge === 0 ? null : favBadge,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="heart" color={COLORS.primary} size={50} />
            ) : (
              <Ionicons name="heart" color={COLORS.primary} size={30} />
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
              color={COLORS.secondary}
              size={80}
              style={{ top: -15 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        options={{
          tabBarBadge: msgBadge == 0 ? null : msgBadge,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="chatbubbles" color={COLORS.primary} size={50} />
            ) : (
              <Ionicons name="chatbubbles" color={COLORS.primary} size={30} />
            ),
        }}
      >
        {(props) => (
          <MessagesStack
            {...props}
            remove_Badge={() => {
              setmsgBadge(null);
            }}
            onFocus2={(badge) => setmsgBadge(badge)}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: "Profil",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" color={COLORS.primary} size={50} />
            ) : (
              <Ionicons name="person" color={COLORS.primary} size={30} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
