import React, { useCallback, useEffect } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import { COLORS } from "../../GlobalStyle";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";

export default function SearchBox({ data, onClick, onTyping, nav, loading }) {
  useEffect(() => {
    return () => {};
  }, []);
  const searchBoxItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => onClick(item)}
        style={{
          borderBottomWidth: 0.5,
          height: 40,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, marginLeft: 5 }}>{item.title}</Text>
      </TouchableOpacity>
    );
  }, []);
  return (
    <View>
  
      <TouchableOpacity style={styles.leftArrow} onPress={nav.goBack}>
        <AntDesign name="arrowleft" size={32} color="black" />
      </TouchableOpacity>
      <View style={styles.autocompleteContainer}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color="black"
          style={styles.indicator}
        />
        <AutocompleteInput
          selectTextOnFocus
          style={styles.Autocomplet}
          onChangeText={onTyping}
          data={data}
          inputContainerStyle={{ borderWidth: 0 }}
          placeholder="Search here"
          flatListProps={{
            keyExtractor: (_, idx) => idx.toString(),
            renderItem: searchBoxItem,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    position: "absolute",
    flex: 1,
    top: 5,
    right: 0,
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 3,
    width: "90%",
  },
  leftArrow: {
    marginHorizontal: 8,
    marginTop: 12,
  },
  Autocomplet: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    borderColor: COLORS.third,
  },
  indicator: {
    position: "absolute",
    right: 5,
    top: 5,
  },
});
