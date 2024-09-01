import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

function Stories() {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
    >
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
        <View style={styles.story}>
            <View style={styles.storyImage}>
                <Text>Image</Text>
            </View>
            <Text style={styles.storyName}>Name</Text>
        </View>
    </ScrollView>
    );
}

export default Stories

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
    },

    story: {
        alignItems: "center",
        marginRight: 20,
    },

    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#ccc",
        justifyContent: "center",
        alignItems: "center",
    },

    storyName: {
        marginTop: 5,
    }
})