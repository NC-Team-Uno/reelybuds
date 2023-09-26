import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView} from "react-native";
import HamburgerMenu from "../components/HamburgerMenu";
import { providerData } from "../constants/providerData";
import { getMovieDetails } from "../api/Apicall";
import MovieCard from "../components/MovieCard";
import COLORS from "../style/Colors";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";


export default function UserScreen() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser('');
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(user);
  
  


  const [moviesLiked, setMoviesLiked] = useState([]);
  const [moviesWatch, setMoviesWatch] = useState([]);
  const [userData, setUserData] = useState({
    _id: "650af73caa1b3fded7210987",
    username: "MovieBuffMaster",
    avatar:
      "https://gravatar.com/avatar/8f77f34d18833ea1ffba1a8ba15633b9?s=200&d=robohash&r=pg",
    streamingServices: [
      "8",
      "337",
      "350",
      "9",
      "39",
      "38",
      "103",
      "531",
      "29",
      "380",
    ],
    likedFilms: [
      "677179",
      "330",
      "343668",
      "155",
      "49026",
      "399404",
      "591274",
      "159824",
      "1001811",
    ],
    wishlist: [
      "107",
      "345940",
      "4108",
      "1008042",
      "156022",
      "20504",
      "1271",
      "117263",
      "10191",
    ],
  });

  useEffect(() => {
    const fetchMovies = async (movieIds, stateSetter) => {
      try {
        const moviePromises = movieIds.map(async (movieId) => {
          const movieDetails = await getMovieDetails(movieId);
          return movieDetails;
        });

        const movieData = await Promise.all(moviePromises);
        stateSetter(movieData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovies(userData.likedFilms, setMoviesLiked);
    fetchMovies(userData.wishlist, setMoviesWatch);
  }, [userData]);

 const getProviderLogos = () => {
   return userData.streamingServices.map((serviceId) => {
     const provider = Object.values(providerData).find(
       (provider) => provider.id === parseInt(serviceId)
     );
     return provider ? provider.logo : "null";
   });
 };

  return (
    <ScrollView style={styles.container}>
      <HamburgerMenu />
      <Text style={styles.username}>{userData.username}</Text>
      <Image source={{ uri: userData.avatar }} style={styles.profileImage} />
      <View style={styles.list}>
        <Text style={[styles.text, styles.componentToCome]}>Likes</Text>
        <FlatList
          data={moviesLiked}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard item={item} />}
          contentContainerStyle={styles.movieCardContainer}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Watch List</Text>
        <FlatList
          data={moviesWatch}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard item={item} />}
          contentContainerStyle={styles.movieCardContainer}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Streaming Services</Text>
        <FlatList
          data={getProviderLogos()}
          keyExtractor={(item, index) => index.toString()} 
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.providerLogo} /> 
          )}
          contentContainerStyle={styles.providerLogosContainer}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
  },
  username: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.FONT_COLOR_ORANGE,
  },
  name: {
    textAlign: "center",
    fontSize: 15,
    padding: 6,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
    margin: 10,
  },
  list: {
    marginVertical: 20,
  },
  text: {
    color: COLORS.FONT_COLOR_MAIN,
    alignSelf: "left",
    fontSize: 18,
    marginHorizontal: 20,
  },
  providerLogosContainer: {
    display: "flex",
    gap: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  providerLogo: {
    width: 70,
    height: 65,
    padding: 5,
  },
  providerNamesContainer: {
    marginLeft: 20,
    marginTop: 20,
    display: "flex",
    columnGap: 20,
  },
  providerName: {
    color: COLORS.FONT_COLOR_ORANGE,
    fontSize: 14,
    marginHorizontal: 5,
  },
});
