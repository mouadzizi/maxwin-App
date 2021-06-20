import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './HomeSectionProductView.style'
export default function HomeSectionProductView() {
    const [counter, setCounter] = useState(0);

    const Increment = () => {
        setCounter(counter+1)
    }
    const Decrement = () => {
        if(counter > 0)
        setCounter(counter-1)
    }
    useEffect(() => {
        setTimeout(() => {
            setCounter(counter+1)
        }, 100);
    }, [counter, Increment,Decrement])

    return (
        <View
        style={styles.container}>
            <Text>Counter : {counter} </Text>

            <TouchableOpacity
            onPress={Increment}
            style={{backgroundColor: '#aaa', height: 30}}>
                <Text>Incremment</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={Decrement}
            style={{backgroundColor: '#aaa', height: 40, margin: 20}}>
                <Text>Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> setCounter(0)}
            style={{backgroundColor: '#aaa', height: 40, margin: 20}}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}
