import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Define the initial state of the calculator
const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

// Function to perform calculator operations based on the type of button pressed
const calculator = (type, value, state) => {
  switch (type) {
    case 'number':
      return {
        ...state,
        currentValue: state.currentValue === '0' ? value : state.currentValue + value,
      };
    case 'clear':
      return initialState;
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      };
    case 'equal':
      if (state.operator) {
        const current = parseFloat(state.currentValue);
        const prev = parseFloat(state.previousValue);
        const result =
          state.operator === '+'
            ? prev + current
            : state.operator === '-'
            ? prev - current
            : state.operator === '*'
            ? prev * current
            : prev / current;
        return {
          currentValue: result.toString(),
          operator: null,
          previousValue: null,
        };
      }
      return state;
    case 'toggleSign':
      return {
        ...state,
        currentValue: (parseFloat(state.currentValue) * -1).toString(),
      };
    case 'percentage':
      return {
        ...state,
        currentValue: (parseFloat(state.currentValue) / 100).toString(),
      };
    case 'decimal':
      if (!state.currentValue.includes('.')) {
        return {
          ...state,
          currentValue: state.currentValue + '.',
        };
      }
      return state;
    default:
      return state;
  }
};

// Main Calculator component
const Calculator = () => {
    // State to manage calculator data
  const [state, setState] = useState(initialState);
    // Function to handle button press
  const handleTap = (type, value) => {
    setState((prevState) => calculator(type, value, prevState));
  };
   // Array containing button values and types
  const buttonValues = [
    { type: 'clear', value: 'AC' },
    { type: 'toggleSign', value: '+/-' },
    { type: 'percentage', value: '%' },
    { type: 'operator', value: '÷' },
    { type: 'number', value: '7' },
    { type: 'number', value: '8' },
    { type: 'number', value: '9' },
    { type: 'operator', value: '*' },
    { type: 'number', value: '4' },
    { type: 'number', value: '5' },
    { type: 'number', value: '6' },
    { type: 'operator', value: '-' },
    { type: 'number', value: '1' },
    { type: 'number', value: '2' },
    { type: 'number', value: '3' },
    { type: 'operator', value: '+' },
    { type: 'number', value: '0' },
    { type: 'decimal', value: '.' },
    { type: 'equal', value: '=' },
  ];
 // Function to render a button
  const renderButton = (button, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.button,
        button.type === 'operator' || button.type === 'equal' ? styles.operatorButton : null,
        button.value === '0' ? styles.zeroButton : null,
      ]}
      onPress={() => handleTap(button.type, button.value)}
    >
      <Text style={styles.buttonText}>{button.value}</Text>
    </TouchableOpacity>
  );

  const renderRow = (start, end) => (
    <View style={styles.buttonRow}>
      {buttonValues.slice(start, end).map(renderButton)}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{state.currentValue}</Text>
      <View style={styles.buttonContainer}>
        {renderRow(0, 4)}
        {renderRow(4, 8)}
        {renderRow(8, 12)}
        {renderRow(12, 16)}
        {renderRow(16, 20)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    fontSize: 30,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '90%',
    textAlign: 'right',
  },
  buttonContainer: {
    width: '90%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
  },
  zeroButton: {
    flex: 2,
  },
  operatorButton: {
    backgroundColor: '#f09a36',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default Calculator;
