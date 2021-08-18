import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  chatBox: {
    backgroundColor: "white",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  infoBox: {
    flexDirection: "row",
    flex: 1
  },
  badge: {
    position: "absolute",
    right: 5,
    top: "70%",
    backgroundColor: "#54BB4E",
    width: 18,
    height: 18,
    borderRadius: 15,
  },
  timeBox: {
    position: "absolute",
    right: 0,
    top:6,
    justifyContent: "space-between",
  },
  avatar: { width: 70, height: 70, borderRadius: 100 },
  title: {
    paddingHorizontal: 3,
    justifyContent: "space-around",
    flex: 1,
  },
});
