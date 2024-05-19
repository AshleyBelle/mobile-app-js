import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TILE_SIZE = 100;

function Board({ tiles, moveTile }) {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.board}>
        {tiles.map((tile, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tile, {
              left: (index % 3) * TILE_SIZE,
              top: Math.floor(index / 3) * TILE_SIZE,
            }]}
            onPress={() => moveTile(index)}
          >
            {tile !== 0 && <Text style={styles.tileText}>{tile}</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boardContainer: {
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: TILE_SIZE * 3,
  },
  tile: {
    position: 'absolute',
    width: TILE_SIZE,
    height: TILE_SIZE,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Board;
