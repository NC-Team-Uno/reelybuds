import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { getPoster } from "../api/Apicall";

const MovieCard = ({poster}) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.container}
        source={{ uri: getPoster(poster) }}
      ></ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "white",
    height: 300,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 20,
    marginHorizontal: 10,
    padding: "50px",
    shadowColor: '#11131c',
    shadowOffset: {
      width: 10,
      height:10,
    },
    shadowOpacity: 1,
    shadowRadius: 12,

  },
});


export default MovieCard;
