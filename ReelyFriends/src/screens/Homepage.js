import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from "react-native";
import { getNewMovies, getMovieGenres } from "../api/Apicall";
import MovieCard from "../components/MovieCard";
import GenreList from "../components/GenresList"


const Homepage = () => {
  const [newMovies, setNewMovies] = useState({});
  const [genres, setGenres] = useState([]);

  useEffect(() => {

    getNewMovies().then((movieResponse) => setNewMovies(movieResponse.data));
  }, []);



    getMovieGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {});
  }, []);




  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubtitle}>New Movies</Text>
      </View>
      <GenreList />
      <FlatList
        data={newMovies.results}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
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
    fontWeight: "bold",
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
