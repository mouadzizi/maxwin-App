import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ImageBrowser } from 'expo-image-picker-multiple'
import SelectedItem from '../../Components/ImageBrowser/SelectedItem';
import NoCameraPerm from '../../Components/ImageBrowser/NoCameraPerm';
import DoneBtn from '../../Components/ImageBrowser/DoneButton';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as ImageManipulator from 'expo-image-manipulator'


export default function ImageBrowserScreen({ navigation }) {

    const updateHandler = (count, onSubmit) => {
        if (count === 0) {
            navigation.setOptions({
                headerRight: () => null
            });
        }
        else {
            navigation.setOptions({
                headerRight: () => <DoneBtn onPress={onSubmit} />
            });
        }

    }
    const CallBack = (callback) => {
        callback.then(photos => {
            const cPhotos = []
            photos.map(async (p) => {
                const pressedPic = await _processImageAsync(p.localUri)
                cPhotos.push({
                    uri: pressedPic.uri,
                    name: pressedPic.filename,
                    id: pressedPic.creationTime
                })
            })
            storePhotos(cPhotos).then(() => navigation.goBack())
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
    const _processImageAsync = async (uri) => {
        const file = await ImageManipulator.manipulateAsync(
            uri,
            [],
            { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
        )
        return file;
    }
    const selectedComponent = React.useCallback((n) => <SelectedItem number={n} />, [])
    const noCameraPermission = React.useCallback(() => <NoCameraPerm />, [])
    return (
        <View style={{ flex: 1 }} >
            <ImageBrowser
                max={6}
                noCameraPermission={noCameraPermission}
                renderSelectedComponent={selectedComponent}
                onChange={updateHandler}
                callback={CallBack}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
