import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from '../../../GlobalStyle'
import AddProduct from "../../../View/AddProductView";

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
    </StackHome.Navigator>
  );
}
