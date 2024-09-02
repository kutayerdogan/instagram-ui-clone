import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Heart } from '../../Icons';

function LikeButton({ likes }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <TouchableOpacity onPress={handleLikePress} style={styles.likeButton}>
      <Heart 
        size={24} 
        stroke={isLiked ? 'red' : '#000'}
        fill={isLiked ? 'red' : 'transparent'} 
      />
      {likeCount > 0 && (
        <Text style={styles.likeCount}>{likeCount}</Text>
      )}
    </TouchableOpacity>
  );
}

export default LikeButton;

const styles = StyleSheet.create({
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  likeCount: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});


