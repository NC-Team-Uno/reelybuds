import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { getMoviesByGenre } from "../api/Apicall";
// import COLORS from "../constants/Colors";


const { width } = Dimensions.get("screen");

const setWidth = (w) => (width / 100) * w;

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
    <Pressable onPress={handleGenrePress}>
      <View style={styles.container}>
        <Text style={styles.genreItem}>{genreName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    // backgroundColor: COLORS.ACTIVE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreItem: {
    color: "#F96501",
  },
});

export default GenreCard;


