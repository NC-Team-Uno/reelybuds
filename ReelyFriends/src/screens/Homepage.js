import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from "react-native";
import { getNewMovies } from "../api/Apicall";
import MovieCard from "../components/MovieCard"



const Homepage = () => {
  const [newMovies, setNewMovies] = useState({});
  useEffect(() => {
    getNewMovies().then((movieResponse) =>
    setNewMovies(movieResponse.data)
    );
  }, []);

  return (

    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubtitle}>New Movies</Text>
      </View>
      <FlatList
        data={newMovies.results}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard title={item.title} poster={item.poster_path} />
        )}
      />
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
    width: deviceWidth,
    color: "#FFF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#FFF",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#FFF",
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});


export default Homepage;