import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const StackScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Settings</Text>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>8 Puzzle</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>Tic Tac Toe</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
      },
      header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 40,
      },
      card: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      cardText: {
        fontSize: 20,
      },
    });
    

export default StackScreen