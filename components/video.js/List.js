import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import videos from './videos';
import Pagination from './Pagination'; // Import your Pagination component

const ITEMS_PER_PAGE = 5;

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [playingVideoId, setPlayingVideoId] = useState(null);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    setTableData(videos.slice(startIndex, endIndex));
  }, [currentPage]);

  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.title}</Text>
      <Text style={styles.listItemText}>{item.date}</Text>
      <TouchableOpacity onPress={() => setPlayingVideoId(item.id)} style={styles.button}>
        <Text style={styles.buttonText}>Play Episode</Text>
      </TouchableOpacity>
      {playingVideoId === item.id && (
        <View style={styles.videoContainer}>
          <Video
            source={item.videos[0].url}
            style={styles.video}
            useNativeControls
            resizeMode="contain"
            shouldPlay
          />
          <TouchableOpacity onPress={() => setPlayingVideoId(null)} style={styles.closeButton}>
            <Ionicons name="close-circle" size={32} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.TextHeading}>Attack on Titan</Text>
      <Text style={styles.TextPara}>List of Episodes</Text>
      <FlatList
        data={tableData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  TextHeading:{
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  TextPara: {
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: '#eee',
    padding: 15,
    marginBottom: 5,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#874CCC',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  videoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
  },
});

export default List;
