import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import Posts from "../../components/shared/Post";
import posts from "../../data/posts";

function Home() {
  return (
    <View
      style={styles.container}
    >
      <Header />
      <Stories />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Posts post={item} />}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});