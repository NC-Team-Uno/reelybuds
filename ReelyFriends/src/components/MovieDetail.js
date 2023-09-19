import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { getPoster } from "../api/Apicall";

const MovieDetail = ({ movie, closeModal }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentcontainer}>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <Image
          resizeMethod="scale"
          resizeMode="cover"
          source={{
            uri: getPoster(movie.backdrop_path),
          }}
          style={styles.images}
        />
        <View style={styles.info}>
          <Text style={styles.bubble}>
            {movie.release_date.toString().slice(0, 4)}
          </Text>
          <Text style={styles.bubble}>{movie.vote_average} ★</Text>
        </View>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.description}>{movie.overview}</Text>
      </ScrollView>
    </View>
  );
};
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50515e",
  },
  contentcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 30,
    color: "#f0f0f1",
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color: "#f0f0f1",
    paddingHorizontal: 30,
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 1,
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  images: {
    width: deviceWidth,
    height: 350,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    shadowColor: "08080c",
  },
  bubble: {
    backgroundColor: "#f96501",
    overflow: "hidden",
    padding: 10,
    margin: 10,
    color: "#f0f0f1",
    fontWeight: "bold",
    borderRadius: 14,
    textAlign: "center",
  },
});

export default MovieDetail;
