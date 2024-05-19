import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import HomeScreen from "./HomeScreen";
import GameScreen from "./GameScreen";
import StackScreen from "./StackScreen";
import Calculator from "../components/calculator/calculator";
import List from "../components/video.js/List";
import Puzzle from "../components/puzzle/puzzle";
import { color } from "react-native-elements/dist/helpers";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

// function MyStack(){
//     return(
//         <HomeStackNavigator.Navigator
//             initialRouteName="HomeScreen"
//         >
//             <HomeStackNavigator.Screen
//                 name="HomeScreen"
//                 component={HomeScreen}
//             />
//             <HomeStackNavigator.Screen
//                 name="Stack"
//                 component={StackScreen}
//                 options={{
//                     headerBackTitleVisible: false,
//                 }}
//             />
//         </HomeStackNavigator.Navigator>
//     )
// }

const Tab = createBottomTabNavigator();

function MyTabs(){
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Puzzle" 
                component={Puzzle} 
                options={{
                    tabBarLabel:'Games',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="extension-puzzle-sharp" size={23} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Calculator" 
                component={Calculator}
                options={{
                    tabBarLabel:'Calcuator',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="calculator" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Video" 
                component={List}
                options={{
                    tabBarLabel:'Video',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="video-camera" size={24} color={color} />
                    ),
                }}       
            />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}