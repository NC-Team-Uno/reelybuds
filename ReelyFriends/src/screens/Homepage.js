import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from "react-native";
import { getNowPopularMovies } from "../api/Apicall";
import MovieCard from "../components/MovieCard"


const Homepage = () => {
  const [nowPopular, setNowPopular] = useState({});
  useEffect(() => {
    getNowPopularMovies().then((movieResponse) =>
    // console.log(movieResponse.data)
    setNowPopular(movieResponse.data)
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerSubtitle}>View All</Text>
      </View>
      <FlatList
        data={nowPopular.results}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard title={item.title} poster={item.poster_path} />
        )}
      />
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
    width: deviceWidth,
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
    fontWeight: 800,
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