import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageBrowser } from 'expo-image-picker-multiple'
import SelectedItem from '../../Components/ImageBrowser/SelectedItem';
import NoCameraPerm from '../../Components/ImageBrowser/NoCameraPerm';
import DoneBtn from '../../Components/ImageBrowser/DoneButton';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function ImageBrowserScreen({ navigation }) {
    React.useEffect(() => {

    }, [])
    const updateHandler = (count, onSubmit) => {
        if (count ===0 ) {
            navigation.setOptions({
                headerRight: () =>null
            });
        }
         else {
            navigation.setOptions({
                headerRight: () => <DoneBtn onPress={onSubmit} />
            });
         }

    }
    const CallBack = (callback) => {
        callback.then(photos=>{
            const cPhotos = []
            photos.map(p=>{
                cPhotos.push({
                    uri:p.uri,
                    name:p.filename,
                    id:p.creationTime
                })
            })
           storePhotos(cPhotos).then(()=> navigation.goBack())
        })

    }
    const storePhotos = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('selectedImage', jsonValue)
        } catch (e) {
          console.error(e.message)
        }
      }
    return (
        <View style={{ flex: 1 }} >
            <ImageBrowser
                max={6}
                noCameraPermissionComponent={NoCameraPerm}
                renderSelectedComponent={(n) => <SelectedItem number={n} />}
                onChange={updateHandler}
                callback={CallBack}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
