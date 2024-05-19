import React, {useState} from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './components/calculator/calculator';
import Puzzle from './components/puzzle/puzzle';
import List from './components/video.js/List';
import Navigation from './screens/Navigation';

//responsible for the displaying thr components in the navigation
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hello this is mobile app</Text>
    //   <StatusBar style="auto" />
    // </View>
    //<List/>
    // <Calculator/>
    //<Puzzle/>
    <Navigation/>
  );
}
