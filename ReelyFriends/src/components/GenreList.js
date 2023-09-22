import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Pressable, Text, View } from "react-native";
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
    <ScrollView contentContainerStyle={styles.flexContainer}>
      <View style={styles.buttonContainer}>
        {genres.map((genre) => (
          <Pressable
            key={genre.id.toString()}
            style={({ pressed }) => [
              styles.genreButton,
              {
                width: "45%",
                backgroundColor: pressed
                  ? "#F96501"
                  : selectedGenres.includes(genre.id)
                  ? COLORS.LIGHT_BACKGROUND
                  : COLORS.BASIC_BACKGROUND,
                borderColor: selectedGenres.includes(genre.id)
                  ? "#F96501"
                  : "#ECECEC",
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
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
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
