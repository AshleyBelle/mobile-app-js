import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Sidebar = ({ navigation }) => {
  const [active, setActive] = useState(1); // State for active item

  const handlePress = (screenName, index) => {
    setActive(index); // Update active state
    navigation.navigate(screenName); // Navigate to the selected screen
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., clear user data, navigate to login screen)
    console.log('Logout functionality not implemented yet.');
  };

  return (
    <View style={styles.sidebar}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.sidebarHeaderText}>Play n Chill</Text>
      </View>
      <View style={styles.sidebarItems}>
        {/* Navigation links */}
        <TouchableOpacity
          style={[styles.sidebarItem, active === 1 && styles.sidebarItemActive]}
          onPress={() => handlePress('Dashboard', 1)}
        >
          <MaterialCommunityIcons name="speedometer" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarItem, active === 2 && styles.sidebarItemActive]}
          onPress={() => handlePress('Videos', 2)}
        >
          <MaterialCommunityIcons name="movie" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Videos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarItem, active === 3 && styles.sidebarItemActive]}
          onPress={() => handlePress('Games', 3)}
        >
          <MaterialCommunityIcons name="gamepad-variant" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Games</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarItem, active === 4 && styles.sidebarItemActive]}
          onPress={() => handlePress('Calculator', 4)}
        >
          <MaterialCommunityIcons name="calculator" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sidebarItem, active === 5 && styles.sidebarItemActive]}
          onPress={() => handlePress('Maps', 5)}
        >
          <MaterialCommunityIcons name="map-marker" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Maps</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sidebarLogout}>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={24} color="#fff" />
          <Text style={styles.sidebarItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    flex: 1, // Occupy full height
    backgroundColor: '#222',
    padding: 20,
  },
  sidebarHeader: {
    marginBottom: 20,
  },
  sidebarHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sidebarItems: {
    marginBottom: 20,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  sidebarItemActive: {
    backgroundColor: '#111',
  },
  sidebarItemText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  sidebarLogout: {},
});

export default Sidebar;
