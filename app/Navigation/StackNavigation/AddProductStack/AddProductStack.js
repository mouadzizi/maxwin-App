import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from '../../../GlobalStyle'
import AddProduct from "../../../View/AddProductView";
import InformationStep from "../../../View/AddProductView/InformationStep";

import ImageBrowser from '../../../View/ImageBrowser/ImageBrowserScreen'

export default function AddProductStack() {
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
        headerTitleStyle: {
          fontSize: 20,
        }
      }}>
      <StackHome.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ title: "Ajouter Produit" }}
      />
      <StackHome.Screen
        name="ImageBrowser"
        component={ImageBrowser}
        options={{ title: "Ajouter Produit" }}
      />
      <StackHome.Screen
        name="InformationStep"
        component={InformationStep}
        options={{ title: "Ajouter Details" }}
      />
    </StackHome.Navigator>
  );
}
