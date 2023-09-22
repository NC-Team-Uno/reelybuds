import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ScrollView} from "react-native";
import HamburgerMenu from "../components/HamburgerMenu";
import { providerData } from "../constants/providerData";
import { getMovieDetails, getProviderLogo } from "../api/Apicall";
import MovieCard from "../components/MovieCard";
import COLORS from "../style/Colors";

export default function UserScreen() {
  const [moviesLiked, setMoviesLiked] = useState([]);
  const [moviesWatch, setMoviesWatch] = useState([]);
  const [providerLogos, setProviderLogos] = useState([]);
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

  const getProviderLogos = async () => {
    const logoPromises = userData.streamingServices.map(async (serviceId) => {
      const logoUrl = await getProviderLogo(serviceId);
      return { serviceId, logoUrl };
    });

    const providerLogos = await Promise.all(logoPromises);
    return providerLogos;
  };


   useEffect(() => {
     // Call getProviderLogos only once
     getProviderLogos().then((logos) => {
       // Remove duplicate logos
       const uniqueLogos = logos.filter(
         (logo, index, self) =>
           index === self.findIndex((l) => l.serviceId === logo.serviceId)
       );
       setProviderLogos(uniqueLogos);
     });
   }, []); 

  const getProviderNames = () => {
    return userData.streamingServices.map((serviceId) => {
      const provider = Object.values(providerData).find(
        (provider) => provider.id === parseInt(serviceId)
      );
      return provider ? provider.name : "";
    });
  };

   const renderProviderLogos = () => {
     return providerLogos.map((logo) => (
       <Image
         key={logo.serviceId}
         source={{ uri: logo.logoUrl }}
         style={styles.providerLogo}
       />
     ));
   };

  const providerNames = getProviderNames();

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
        <Text style={styles.text}>
          Streaming Services:
        </Text>
        <FlatList
          data={providerNames}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Text style={styles.providerName}>{item}</Text>
          )}
          contentContainerStyle={styles.providerNamesContainer}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>
          Streaming Services:
        </Text>
        <FlatList
          data={providerLogos}
          keyExtractor={(item) => item.serviceId}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderProviderLogos}
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
    width: 50,
    height: 50,
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
