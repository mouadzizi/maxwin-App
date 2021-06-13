import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import * as Font from 'expo-font';


export default function TextView(props) {

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    loadFonts().then(() => setLoaded(true)).catch(() => console.warn('font loaded '))

  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Gilroy-Bold': {
        uri: require('../../../assets/Fonts/Gilroy-ExtraBold.otf'),
        display: Font.FontDisplay.FALLBACK,
      },
      'Gilroy': {
        uri: require('../../../assets/Fonts/Gilroy-Light.otf'),
        display: Font.FontDisplay.FALLBACK,
      }
    });
  }

  return (
    <View>
      {
        loaded ? <Text style={[
          {fontFamily:'Gilroy'},
          props.h1 && { fontSize: 20 },
          props.h2 && { fontSize: 18 },
          props.h3 && { fontSize: 16 },
          props.p && { fontSize: 14 },
          props.bold && { fontFamily: 'Gilroy-Bold'},
          props.s 
        ]}>{props.children}</Text> :
          <ActivityIndicator size='small' color='black' animating={true} />
      }
    </View>

  )
}


