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
        <View style={styles.watchNow}>
          <Text style={styles.watchNowText}>Watch now on: </Text>
          <FlatList
            horizontal={true}
            data={linkData}
            renderItem={({ item }) => {
              if (item.length !== 0) {
                return (
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      Linking.openURL(Object.values(item).toString());
                    }}
                  >
                    <Text style={styles.bubble}>{Object.keys(item)}</Text>
                  </TouchableOpacity>
                );
              }
            }}
          ></FlatList>
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
  watchButtons: {
    width: deviceWidth,
    height: 200,
    backgroundColor: "#fff",
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
    marginVertical: 8,
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
  watchNowText: {
    fontWeight: "bold",
    color: "#f0f0f1",
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  watchNow: {
    paddingBottom: 50,
  },
});

export default MovieDetail;
