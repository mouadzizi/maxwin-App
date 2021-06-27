import React from "react";
import {View, Image, TouchableWithoutFeedback} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "../../BottomNavigation/MainBottomNavigation";
import InformationStep from "../../../View/AddProductView/InformationStep";
import ImageBrowser from "../../../View/ImageBrowser/ImageBrowserScreen";

import HomeSectionProductView from "../../../View/HomeSectionProductView";


import { COLORS } from "../../../GlobalStyle";
import { Ionicons } from "react-native-vector-icons";

export default function MainStack() {
  const Stack = createStackNavigator();

  const HeaderTitle = () => {
    return <></>;
  };

  const HeaderLeft = () => {
    return (
      <Image
        style={{ alignSelf: "center", height: 40, width: 120, marginLeft: 20 }}
        source={require("../../../../assets/headerIcon.png")}
        resizeMode="contain"
      />
    );
  };

  const HeaderRight = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback onPress={() => alert("Search")}>
          <Ionicons
            name="search"
            size={36}
            color="#fff"
            style={{ marginRight: 20 }}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert("Filter")}>
          <Ionicons
            name="options"
            size={36}
            color="#fff"
            style={{ marginRight: 20 }}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="InformationStep"
          component={InformationStep}
          options={{
            title: "Information",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="ImageBrowser"
          component={ImageBrowser}
          options={{
            title: "Ajouter des Images",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="HomeSectionProductView"
          component={HomeSectionProductView}
          options={{
            headerTitle: (props) => <HeaderTitle {...props} />,
            headerLeft: () => <HeaderLeft />,
            headerRight: () => <HeaderRight />,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
