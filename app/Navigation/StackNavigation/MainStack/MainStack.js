import React from "react";
import { View, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomNavigation from "../../BottomNavigation/MainBottomNavigation";
import InformationStep from "../../../View/AddProductView/InformationStep";
import ImageBrowser from "../../../View/ImageBrowser/ImageBrowserScreen";
import ProductDetails from "../../../View/ProductDetails";
import ResultView from "../../../View/ResultView";
import ImagePreview from "../../../View/ImagePreview";
import FilterView from "../../../View/FilterView";
import SignIn from "../../../OnBording/SignIn";
import SignUp from "../../../OnBording/SignUp";
import CompleteProfile from "../../../OnBording/CompleteProfile";
import MyProductsView from "../../../View/MyProductsView";
import ChatView from "../../../View/ChatView";
import ProfileInformationView from "../../../View/ProfileInformationView";
import ContactView from "../../../View/ContactView";
import NotificationView from "../../../View/NotificationView";
import FAQView from "../../../View/FAQView";
import EditProduct from "../../../View/EditProduct";

import HomeSectionProductView from "../../../View/HomeSectionProductView";

import { COLORS } from "../../../GlobalStyle";
import { Ionicons } from "react-native-vector-icons";
import SearchView from "../../../View/SearchView/SearchView";

const {screenWidth} = Dimensions.get('window')
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

  const HeaderRight = ({navigation}) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchView")} >
          <Ionicons
            name="search"
            size={36}
            color="#fff"
            style={{ marginRight: 20 }}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("FilterView")}
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
            title: "Informations",
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
            headerLeft: () => <HeaderLeft  />,
            headerStyle: {
              backgroundColor: COLORS.primary,
            }
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
            title: "Filter",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="CompleteProfile"
          component={CompleteProfile}
          options={{
            title: "Information complementaires",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="ProfileInformationView"
          component={ProfileInformationView}
          options={{
            title: "Mon Profil",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="ContactView"
          component={ContactView}
          options={{
            title: "Contacter Nous",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="NotificationView"
          component={NotificationView}
          options={{
            title: "Notifications",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="FAQView"
          component={FAQView}
          options={{
            title: "FAQ",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="MyProductsView"
          component={MyProductsView}
          options={{
            title: "Ma boutique",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="ChatView"
          component={ChatView}
          options={{
            title: "Discussion",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="EditProduct"
          component={EditProduct}
          options={{
            title: "Modifier produit",
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="SearchView"
          component={SearchView}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
