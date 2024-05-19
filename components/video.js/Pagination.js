import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Logic to disable "Previous" button when on first page
  const isPreviousDisabled = currentPage === 1;

  // Logic to disable "Next" button when on last page
  const isNextDisabled = currentPage === totalPages;

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        style={[styles.pageButton, isPreviousDisabled && styles.disabledButton]}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={isPreviousDisabled}
      >
        <Text style={styles.buttonText}>Previous</Text>
      </TouchableOpacity>
      
      {/* Display page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.pageButton, currentPage === index + 1 && styles.activeButton]}
          onPress={() => onPageChange(index + 1)}
        >
          <Text style={[styles.buttonText, currentPage === index + 1 && styles.activeButtonText]}>
            {index + 1}
          </Text>
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity
        style={[styles.pageButton, isNextDisabled && styles.disabledButton]}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={isNextDisabled}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  pageButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 5,
    backgroundColor: '#874CCC',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: '#f09a36',
  },
  activeButtonText: {
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
});

export default Pagination;
