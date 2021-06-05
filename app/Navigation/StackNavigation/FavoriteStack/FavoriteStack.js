import React from "react";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import FavoriteView from "../../../View/FavoriteView";

export default function FavoriteStack() {
  const StackFavorite = createStackNavigator();
  return (
    <StackFavorite.Navigator>
      <StackFavorite.Screen
        name="FavoriteView"
        component={FavoriteView}
        options={{ title: "Favorite" }}
      />
    </StackFavorite.Navigator>
  );
}
