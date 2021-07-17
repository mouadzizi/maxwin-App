import { StyleSheet, Dimensions, Text } from "react-native";

const GlobalStyle = StyleSheet.create({
  H1: {
    fontSize: 25,
    color: "black",
  },
  H2: {
    fontSize: 22,
    color: "black",
  },
  H3: {
    fontSize: 19,
    color: "black",
  },
  H4: {
    fontSize: 16,
    color: "black",
  },
});

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const COLORS = {
  red: {
    100: "#FFD1C7",
    200: "#FF987F",
    500: "#FC5B67",
    700: "#CB2700",
  },
  teal: {
    100: "#C9FBF6",
    200: "#A3EDE6",
    500: "#57CFC3",
    700: "#3CA79C",
  },
  blue: {
    100: "#CCD6FC",
    200: "#91A7FF",
    500: "#597AFF",
    700: "#284BD9",
  },
  yellow: {
    100: "#FFE8B5",
    200: "#FFD36F",
    500: "#FFC33C",
    700: "#ECA70C",
  },
  dark: {
    100: "#D7D8E9",
    200: "#9FA0C0",
    300: "#67699B",
    400: "#373976",
    500: "#232553",
  },
  Grey: {
    100: "#ddd",
    200: "#ccc",
    300: "#bbb",
    400: "#aaa",
    500: "#444",
  },
  light: {
    100: "#FFFFFF",
  },
  primary: "#232553",
  secondary: "#43A147",
  third: '#F16E44',
  text: "#000",
};



export { GlobalStyle, COLORS, windowWidth, windowHeight };
