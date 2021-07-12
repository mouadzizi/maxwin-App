import React from "react";
import { View, Image, TouchableWithoutFeedback, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "../../BottomNavigation/MainBottomNavigation";
import InformationStep from "../../../View/AddProductView/InformationStep";
import ImageBrowser from "../../../View/ImageBrowser/ImageBrowserScreen";
import ProductDetails from "../../../View/ProductDetails";
import ResultView from "../../../View/ResultView";
import ImagePreview from "../../../View/ImagePreview";
import FilterView from "../../../View/FilterView";

import HomeSectionProductView from "../../../View/HomeSectionProductView";

import { COLORS } from "../../../GlobalStyle";
import { Ionicons } from "react-native-vector-icons";

export default function MainStack({ navigation }) {
  const Stack = createStackNavigator();

  const HeaderTitle = () => {
    return <></>;
  };

  const HeaderLeft = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image
          style={{
            alignSelf: "center",
            height: 40,
            width: 120,
            marginLeft: 20,
          }}
          source={require("../../../../assets/headerIcon.png")}
          resizeMode="contain"
        />
      </TouchableWithoutFeedback>
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

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ResultView")}
        >
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

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ImagePreview"
          component={ImagePreview}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ResultView"
          component={ResultView}
          options={{
            headerRight: () => <HeaderRight />,
            title: "Resultat",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="FilterView"
          component={FilterView}
          options={{
            headerRight: () => <HeaderRight />,
            title: "Filter",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
