import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MovieCard from "./MovieCard";
import { getMovieDetails } from "../api/Apicall";

export default GroupDetail = ({ closeModal, groupInfo }) => {
   const {likedFilms} = groupInfo
   const [moviesToDisplay, setMoviesToDisplay] = useState([])

useEffect(() => {
    const fetchMovieDetails = async () => {
      const moviePromises = likedFilms.map(async (id) => {
        const movieDetails = await getMovieDetails(id);
        return movieDetails;
      });
      const movieDetails = await Promise.all(moviePromises);
      setMoviesToDisplay(movieDetails);
    };
    fetchMovieDetails();
  }, [likedFilms]);

if (moviesToDisplay.length === 0 ) {
return <Text>Loading...</Text>
} else return (<>
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
        <Icon name="close" color={"#f0f0f1"} size={25} />
      </TouchableOpacity>
      <Text>{groupInfo.name}</Text>
      <View style={styles.list}>
        <Text>Movies you all like:</Text>
        <FlatList
          data={moviesToDisplay}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <MovieCard item={item} />}
          contentContainerStyle={styles.movieCardContainer}
        />
      </View>
    </View>
    </>
  );
}

  


const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#50515e",
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
  providerCarousel: {
    flex: 1,
    backgroundColor: "#373b58",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 12,
  },
});
