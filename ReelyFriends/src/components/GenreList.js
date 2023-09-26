import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getMovieGenres } from "../api/Apicall";
import COLORS from "../style/Colors";

const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    getMovieGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {});
  }, []);

  const toggleGenreSelection = (genreId) => {
    if (selectedGenres.includes(genreId)) {
      setSelectedGenres(selectedGenres.filter((id) => id !== genreId));
    } else {
      setSelectedGenres([...selectedGenres, genreId]);
    }
  };

  return (
    <FlatList
      data={genres}
      keyExtractor={(genre) => genre.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: genre }) => (
        <Pressable
          style={({ pressed }) => [
            styles.genreButton,
            {
              backgroundColor: pressed
                ? "#F96501"
                : selectedGenres.includes(genre.id)
                ? COLORS.LIGHT_BACKGROUND
                : COLORS.BASIC_BACKGROUND,
              borderColor: selectedGenres.includes(genre.id)
                ? COLORS.ORANGE_BACKGROUND
                : COLORS.BASIC_BACKGROUND,
            },
          ]}
          onPress={() => toggleGenreSelection(genre.id)}
        >
          <Text
            style={[
              styles.genreButtonText,
              {
                color: selectedGenres.includes(genre.id)
                  ? COLORS.FONT_COLOR_ORANGE
                  : COLORS.FONT_COLOR_ORANGE,
              },
            ]}
          >
            {genre.name}
          </Text>
        </Pressable>
      )}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    display: "flex",
    gap: 10,
    paddingHorizontal: 10, 
    paddingTop: 10, 
  },
  genreButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    marginBottom: 10,
  },
  genreButtonText: {
    fontSize: 16,
    color: COLORS.FONT_COLOR_MAIN,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default GenreList;
