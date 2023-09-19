import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { getMovieGenres } from "../api/Apicall";
import GenreCard from "./GenreCard";

const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovieGenres()
      .then((data) => {
        setGenres(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <View>
      <FlatList
        data={genres}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <GenreCard genreName={item.name} />}
      />
    </View>
  );
};

export default GenreList;
