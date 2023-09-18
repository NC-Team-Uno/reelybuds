import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getPoster } from "../components/";

const MovieCard = ({title, poster}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.container}
        source={{ uri: getPoster(poster) }}
      ></ImageBackground>
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 20,
    padding: "50px",
  },
});

export default MovieCard;
