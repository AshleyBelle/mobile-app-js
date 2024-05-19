import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

const VideoModal = ({ episode, onClose }) => {
  return (
    <Modal visible={true} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.title}>{episode.title}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>&times;</Text>
        </TouchableOpacity>
        <Video
          source={episode.videos[0].url}
          style={styles.video}
          useNativeControls
          resizeMode="contain"
        />
        <Text style={styles.details}>{episode.videos[0].details}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  video: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default VideoModal;
