import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { getMoviesByGenre } from "../api/Apicall";
// import COLORS from "../constants/Colors";

const { width } = Dimensions.get("screen");


const GenreCard = ({ genreName }) => {
  const handleGenrePress = async () => {
    try {
      const response = await getMoviesByGenre(genreName);

      console.log("Movies by genre:", response);
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };
  return (
    // <Pressable onPress={handleGenrePress}>
      <View style={styles.container}>
        <Text style={styles.genreItem}>{genreName}</Text>
      </View>
    // </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
  },
  genreItem: {
    color: "#F96501",
    fontSize: 16,
  },
});

export default GenreCard;
