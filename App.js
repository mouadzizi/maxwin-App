import { StatusBar } from 'expo-status-bar';
import React from 'react';
import BottomHomeNavigation from './app/Navigation/BottomNavigation/MainBottomNavigation/MainBottomNavigation'
import MainStack from './app/Navigation/StackNavigation/MainStack'
import {auth} from './app/API/Firebase'
export default function App() {

  return (
     <MainStack />
  );
}

