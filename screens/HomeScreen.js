import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

  return (
    <View>
        <Text
            style={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
        >Welcome to HomeScreen</Text>
        <Image 
        source={require('../assets/giphy.gif')} 
        style={styles.gif}
      />
        {/* <TouchableOpacity
            onPress={() => navigation.navigate("Stack")}
            style={{
                backgroundColor: "purple",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
        >
            <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
            >Play Games</Text>
            
        </TouchableOpacity> */}
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '20%',
    },
    gif: {
        paddingLeft: 90,
        width: 290, // Adjust the width and height as needed
        height: 200,
        marginBottom: 20,
      },
});
export default HomeScreen