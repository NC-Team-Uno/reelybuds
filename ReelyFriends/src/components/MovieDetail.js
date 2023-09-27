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
import React, { useEffect, useState, useContext } from "react";
import { getLink, getPoster } from "../api/Apicall";
import Icon from "react-native-vector-icons/Ionicons";
import {getLikedFilms, updateLikedFilms} from "../api/backendAPICalls";
import { UserContext } from "../contexts/User";

const MovieDetail = ({ movie, closeModal }) => {

  const { user, setUser } = useContext(UserContext); 

  const [userLikedFilms, setUserLikedFilms]= useState([]);

  useEffect(() => {
    getLikedFilms(user.username).then((userData) => {
      
      console.log(userData.likedFilms)})

  }, [])

  const linkImages = {
    netflix: require("../../assets/netflix.png"),
    disney: require("../../assets/disney.png"),
    now: require("../../assets/nowtv.png"),
    apple: require("../../assets/appletv.jpg"),
    prime: require("../../assets/prime.png"),
    iplayer: require("../../assets/iplayer.png"),
    all4: require("../../assets/channel4.png"),
    paramount: require("../../assets/paramount.png"),
    britbox: require("../../assets/britbox.png"),
  };
  useEffect(() => {
    getLink(movie.id).then((linkObj) => {
      setLinkData(linkObj);
    });
  }, []);
  const [linkData, setLinkData] = useState([]);
  const linkArray = Object.entries(linkData);

  const [liked, setLiked] = useState(false);
  const [favourited, setFavourited] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Icon name="close" color={"#f0f0f1"} size={25} />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.contentcontainer}>
        <View style={styles.buttons}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              liked ? setLiked(true) : setLiked(true);
              console.log(user.username, movie.id);          
              updateLikedFilms(user.username, movie.id);
                     
            }}
          >
            <Icon name="heart" color={liked ? "red" : "white"} size={25} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              favourited ? setFavourited(false) : setFavourited(true);
            }}
          >
            <Icon
              name="star"
              color={favourited ? "orange" : "white"}
              size={25}
            />
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
          <FlatList
            horizontal={true}
            data={linkArray}
            renderItem={({ item }) => {
              if (item.length !== 0) {
                return (
                  <TouchableOpacity
                    style={styles.watchButton}
                    onPress={() => {
                      Linking.openURL(item[1]);
                    }}
                  >
                    <Icon name="play" color={"black"} size={25} />
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 4,
                        margin: 5,
                      }}
                      source={linkImages[item[0]]}
                    ></Image>
                  </TouchableOpacity>
                );
              }
            }}
          ></FlatList>
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
    display: "flex",
    alignItems: "center",
  },
  watchButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
