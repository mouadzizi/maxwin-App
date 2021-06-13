import React from "react";
import { Image, TouchableWithoutFeedback, View } from "react-native";
import { COLORS } from "../../../GlobalStyle";
import { Ionicons } from "react-native-vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import HomeView from "../../../View/HomeView";

export default function HomeStack() {
  const HeaderTitle = () => {
    return (
      <>
      </>
    );
  };

  const HeaderLeft = () => {
    return (
      <Image
        style={{ alignSelf: "center", height: 40, width: 120, marginLeft: 20}}
        source={require("../../../../assets/headerIcon.png")}
        resizeMode="contain"
      />
    );
  };

  const HeaderRight = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback
        onPress={()=> alert('Search')}>
        <Ionicons
          name="search"
          size={36}
          color="#fff"
          style={{ marginRight: 20 }}
        />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
        onPress={()=> alert('Filter')}>
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
  const StackHome = createStackNavigator();
  return (
    <StackHome.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerTitle: (props) => <HeaderTitle {...props} />,
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
        headerStyle: {
          backgroundColor: COLORS.primary,
          height: 55,
        },
        headerTitleAlign: "center",
      }}
    >
      <StackHome.Screen
        name="HomeView"
        component={HomeView}
        options={{ title: "Maxwin" }}
      />
    </StackHome.Navigator>
  );
}
