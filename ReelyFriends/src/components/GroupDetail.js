import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MovieCard from "./MovieCard";
import { getAllMoviesForUser, getMovieDetails } from "../api/Apicall";

export default GroupDetail = ({ closeModal, groupInfo }) => {
  const { likedFilms } = groupInfo;
  const { streamingServices } = groupInfo;
  const [moviesToDisplay, setMoviesToDisplay] = useState([]);
  const [allMoviesToDisplay, setAllMoviesToDispaly] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const endReached = () => {
    setPageNo(pageNo + 1);
  };

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

  useEffect(() => {
    getAllMoviesForUser(pageNo, streamingServices).then((movies) =>
      setAllMoviesToDispaly(allMoviesToDisplay.concat(movies))
    );
  }, [pageNo]);

  if (moviesToDisplay.length === 0) {
    return <Text>Loading...</Text>;
  } else
    return (
      <View style={styles.container}>
          <Text style={styles.title}>{groupInfo.name}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
          <Icon name="close" color={"#f0f0f1"} size={25} />
        </TouchableOpacity>
        <View style={styles.likedMovies}>
         
          <Text style={styles.text}>Movies you all like:</Text>
          <FlatList
            data={moviesToDisplay}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <MovieCard item={item} />}
            contentContainerStyle={styles.movieCardContainer}
          />
        </View>
        <View style={styles.allMovies}>
          <Text style={styles.text}>Movies on your groups services:</Text>
          <FlatList
            data={allMoviesToDisplay}
            onEndReached={endReached}
            key={allMoviesToDisplay.item}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => <MovieCard item={item}/>}
          />
        </View>
      </View>
    );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  likedMovies:{
  backgroundColor: "#373b58",
  marginBottom: 10,
  borderRadius: 10
  },
  container: {
    width: deviceWidth,
    marginTop: 90,
    backgroundColor: '#50515e',
    display: 'flex',
    flexDirection: 'column'
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
    zIndex: 1
  },
  allMovies: {
    backgroundColor: "#373b58",
    borderRadius: 10
    
  },
  text: {
    marginTop: 10,
    marginLeft: 20,
    display: "flex",
    justifyContent: "center",
    color: "#FFF",
    fontSize: 22,
  },
  title: {
    margin: 10,
   textAlign: 'center',
    color: "#FFF",
    fontSize: 30,
  }
});
