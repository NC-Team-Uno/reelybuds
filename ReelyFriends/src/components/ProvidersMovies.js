import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import MovieCard from "./MovieCard";

const ProvidersMovies = ({ providerName, movies }) => {
  return (
    <View style={styles.providerCarousel}>
      <Text style={styles.text}>Popular on {providerName}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginLeft: 20,
    display: "flex",
    justifyContent: "center",
    color: "#FFF",
    fontSize: 22,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  providerCarousel: {
    flex: 1,
    backgroundColor: "#373b58",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
  },
});

export default ProvidersMovies;
