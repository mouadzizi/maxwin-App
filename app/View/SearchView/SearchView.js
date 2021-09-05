import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import AutocompleteInput from "react-native-autocomplete-input";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { Ionicons } from "react-native-vector-icons";
import { searchByTitle } from "../../API/APIFunctions";
export default function SearchView({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
  useEffect(() => {
    return () => {};
  }, []);

  const search = (input)=>{
      setLoading(true)
    searchByTitle(input).then(res=>{
        setData(res)
        setLoading(false)
    })
  }
  return (
    <View style={styles.container}>
      <View>
          <SearchBox loading={loading} nav={navigation} onClick={(item)=>navigation.navigate('ProductDetails',{product:item})} onTyping={search} data={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
