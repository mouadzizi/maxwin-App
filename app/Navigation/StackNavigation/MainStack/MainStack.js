import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "../../BottomNavigation/MainBottomNavigation";
import InformationStep from "../../../View/AddProductView/InformationStep";
import ImageBrowser from "../../../View/ImageBrowser/ImageBrowserScreen";
import { COLORS } from "../../../GlobalStyle";
export default function MainStack() {
  const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
