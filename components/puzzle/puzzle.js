import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Board from './Board';

function Puzzle() {
  const initialTiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; 
  const [tiles, setTiles] = useState(initialTiles); // 0 represents the empty tile
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [solving, setSolving] = useState(false);

  useEffect(() => {
    if (solving) {
        // Call your solving algorithm here
        // For simplicity, let's just reset the puzzle to the solved state after a delay
        const delay = 200; // milliseconds
        const timer = setTimeout(() => {
            setTiles(initialTiles);
            setMoves(0);
            setSolving(false);
        }, delay);

        return () => clearTimeout(timer);
    }
  }, [solving]);

  const shuffleTiles = () => {
    const shuffledTiles = tiles.slice(); // Create a copy of the tiles array

    // Perform a series of valid tile moves to shuffle the tiles
    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap tiles at indices i and j
      [shuffledTiles[i], shuffledTiles[j]] = [shuffledTiles[j], shuffledTiles[i]];
    }

    // Reset the move counter to 0
    setMoves(0);
    
    // Set the shuffled tiles as the new state
    setTiles(shuffledTiles);

    setGameStarted(true);
  };

  const moveTile = (clickedIndex) => {
    // Find the index of the empty tile (value: 0)
    const emptyIndex = tiles.indexOf(0);
  
    // Check if the clicked tile is adjacent to the empty tile
    if (isAdjacent(clickedIndex, emptyIndex)) {
      // Create a copy of the tiles array
      const newTiles = [...tiles];
  
      // Swap the clicked tile with the empty tile
      [newTiles[clickedIndex], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[clickedIndex]];
  
      // Update the state with the new tiles array
      setTiles(newTiles);

      setMoves(moves + 1);
    }
  };

  const isAdjacent = (index1, index2) => {
    // Check if the two indices are adjacent horizontally or vertically
    return (
      Math.abs(index1 - index2) === 1 || // Adjacent horizontally
      Math.abs(index1 - index2) === 3 // Adjacent vertically (assuming a 3x3 grid)
    );
  };

  const isSolved = () => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) {
        return false; // Puzzle is not solved
      }
    }
    return true; // Puzzle is solved
  };

  const newGame = () => {
    setTiles(initialTiles); // Reset tiles to initial state
    setMoves(0); // Reset moves counter

    setGameStarted(true);
  };

  const solvePuzzle = () => {
    setSolving(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sliding Puzzle Game</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={shuffleTiles}>
          <Text style={styles.buttonText}>Shuffle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={newGame}>
          <Text style={styles.buttonText}>New Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={solvePuzzle}>
          <Text style={styles.buttonText}>Solve</Text>
        </TouchableOpacity>
      </View>
      {!gameStarted ?   
        <Text style={styles.infoText}>Click shuffle to start the game</Text> : null}
      {gameStarted && !isSolved() ? 
        <Text style={styles.infoText}>Moves: {moves}</Text> : null}
      {isSolved() && <Text style={styles.infoText}>Congratulations! You solved the puzzle!</Text>}
      <Board tiles={tiles} moveTile={moveTile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 80,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    //position: 'absolute',
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: '#874CCC',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  infoText: {
    marginBottom: 20,
    fontSize: 16,
  },
});

export default Puzzle;
