import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-ionicons";
import { getAllMoviesForUser } from "../api/Apicall";
import MovieCard from "../components/MovieCard";

export default function MyList() {
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const endReached = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    getAllMoviesForUser(pageNo).then((movies) =>
      setMovieList(movieList.concat(movies))
    );
  }, [pageNo]);
  return (
    <View style={styles.container}>
      <FlatList
        data={movieList}
        onEndReached={endReached}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
  },
  title: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    margin: 10,
  },
});
