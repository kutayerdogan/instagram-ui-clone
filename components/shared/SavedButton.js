import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Saved } from '../../Icons';

function SavedButton() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSavePress = () => {
    setIsSaved(!isSaved);
  };

  return (
    <TouchableOpacity onPress={handleSavePress} style={styles.SavedButton}>
      <Saved 
        size={24} 
        fill={isSaved ? '#000' : 'transparent'} 
      />
    </TouchableOpacity>
  );
}

export default SavedButton;

const styles = StyleSheet.create({
  SavedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});


