import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getLink, getPoster } from "../api/Apicall";
import Icon from "react-native-vector-icons/Ionicons";

const MovieDetail = ({ movie, closeModal }) => {
  useEffect(() => {
    getLink(movie.id).then((linkObj) => {
      setLinkData(linkObj);
    });
  }, []);
  const [linkData, setLinkData] = useState([]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Icon name="close" color={"#f0f0f1"} size={25} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.contentcontainer}>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={"#f0f0f1"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="star" color={"#f0f0f1"} size={25} />
          </TouchableOpacity>
        </View>
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
        <View style={styles.watchList}>
          {linkData.map((link) => {
            if (link === undefined) {
              return <Text>There was an error finding the stream!</Text>;
            } else {
              return (
                <TouchableOpacity
                  style={styles.watchButton}
                  key={Object.values(link)}
                  onPress={() => {
                    Linking.openURL(Object.values(link).toString());
                  }}
                >
                  <Text style={styles.watchButton} numberOfLines={1}>
                    Watch now on {Object.keys(link)}
                  </Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>

        <View style={styles.movieDetails}>
          <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
            {movie.original_title}
          </Text>
          <Text style={styles.description}>{movie.overview}</Text>
        </View>
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
  watchList: {
    width: deviceWidth,
    overflow: "hidden",
  },
  watchButton: {
    backgroundColor: "white",
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 2,
    borderRadius: 8,
    fontWeight: "bold",
  },
  buttons: {
    position: "absolute",
    top: 310,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    zIndex: 1,
    left: 10,
    width: deviceWidth,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#f0f0f1",
    marginHorizontal: 20,
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color: "#f0f0f1",
    padding: 10,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#11131C",
    padding: 4,
    borderRadius: 20,
    marginHorizontal: 7,
  },
  closeButton: {
    position: "absolute",
    top: 4,
    right: 10,
    backgroundColor: "#11131C",
    padding: 4,
    borderRadius: 20,
    marginHorizontal: 2,
    marginLeft: 290,
    zIndex: 1,
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
    backgroundColor: "#11131C",
    overflow: "hidden",
    padding: 10,
    margin: 5,
    marginTop: 10,
    color: "#f0f0f1",
    fontWeight: "bold",
    borderRadius: 12,
    textAlign: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  movieDetails: {
    backgroundColor: "#42424D",
    overflow: "hidden",
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

export default MovieDetail;
