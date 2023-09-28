import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getAllMoviesForUser, searchMovieByName } from "../api/Apicall";
import MovieCard from "../components/MovieCard";
import { UserContext } from "../contexts/User";
import SearchBar from "../components/SearchBar";

export default function MyList() {
  const { user, setUser } = useContext(UserContext);
  const [movieList, setMovieList] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [text, setText] = useState("");
  const endReached = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    if (text === "") {
      getAllMoviesForUser(pageNo, user.streamingServices).then((movies) =>
        setMovieList(movieList.concat(movies))
      );
    } else {
      searchMovieByName(text).then((movies) => {
        setMovieList(movies);
      });
    }
  }, [pageNo, text]);

  return (
    <View style={styles.container}>
      <SearchBar setMovieList={setMovieList} text={text} setText={setText} />
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
