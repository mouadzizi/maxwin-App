import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import FavoriteView from "../../../View/FavoriteView";
import {COLORS} from '../../../GlobalStyle'

export default function FavoriteStack() {
  const StackFavorite = createStackNavigator();
  return (
    <StackFavorite.Navigator
    screenOptions={{
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 55,
      },
      headerTitleAlign: "center",
      headerTitle: 'Favoris',
      headerTitleStyle:{
        fontSize: 20,
      }
    }}>

      <StackFavorite.Screen
        name="FavoriteView"
        component={FavoriteView}
        options={{ title: "Favorite" }}
      />
    </StackFavorite.Navigator>
  );
}
