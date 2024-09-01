import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import stories from '../../../data/stories'
import { LinearGradient } from 'expo-linear-gradient'

function Stories() {
  return (
    <View style={styles.container}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories.map(story => (
                <View key={story.id} style={styles.storyContainer}>
                <LinearGradient
                    colors={['#DE0046', '#F7A34B']}
                    style={styles.story} 
                >
                    <Image
                        source={{ uri: story.user.avatar }}
                        style={styles.avatar}
                    />
                </LinearGradient>
                <Text numberOfLines={1} style={styles.username}>{story.user.username}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    storyContainer: {
        alignItems: 'center',
        marginHorizontal: 4,
        width: 75,
    },
    story: {
        width: 67,
        height: 67,
        borderRadius: 33.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
    },
    username: {
        color: '#000',
        fontSize: 12,
        marginTop: 2,
        textAlign: 'center',
    },
})
