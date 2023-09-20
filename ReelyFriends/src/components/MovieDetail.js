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
import Icon from "react-native-vector-icons/Ionicons";

const MovieDetail = ({ movie, closeModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Icon name="heart" color={"#fea971"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="star" color={"#fea971"} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={closeModal}>
          <Icon name="close" color={"#f46201"} size={40} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentcontainer}>
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
  buttons: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    zIndex: 2,
    top: 15,
    width: deviceWidth,
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
  button: {
    backgroundColor: "#50515e",
    padding: 4,
    borderRadius: 12,
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
    marginTop: 20,
    color: "#f0f0f1",
    fontWeight: "bold",
    borderRadius: 12,
    textAlign: "center",
  },
});

export default MovieDetail;
