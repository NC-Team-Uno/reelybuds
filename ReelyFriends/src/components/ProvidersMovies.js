import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import MovieCard from "./MovieCard";


const ProvidersMovies = ({ providerName, movies }) => {
  return (
    <View>
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
    display: "flex",
    justifyContent: "center",
    color: "#FFF",
    fontSize: 30,
  },
  logo: {
    width: 40, 
    height: 40, 
    marginRight: 10,
  },
});

export default ProvidersMovies;
