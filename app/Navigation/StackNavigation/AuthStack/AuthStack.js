import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../HomeStack';

export default function AuthStack() {
const Stack = createStackNavigator();

    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeView" component={HomeView} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
