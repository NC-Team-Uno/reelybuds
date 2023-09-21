import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ProvidersMovies from "./ProvidersMovies";
import { getMoviesByProvider } from "../api/Apicall";

//need to get list of user friends and render their details - like getting movie data


const FriendsList  = () => {
    const [friendsList, setFriendsList] = useState({});
  useEffect(()=>{
    Object.keys().forEach(()=>{
        getFriendsByUserId().then(
            (friendsResponse) => {
                setFriendsList(()=>({
                    //spread friends?
                }))
            }
        )
    })
  },[])
}

export default FriendsList;

//api call to our DB - how?
const getFriendsByUserId = async ()=> {
    try {
        const response 
    }
}


// const getMovieGenres = async () => {
//     try {
//       const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list`, {
//         params: {
//           api_key: TMDB_API_KEY,
//         },
//       });
//       const genres = response.data.genres;
//       return genres;
//     } catch (error) {
//       le.error("Error fetching movie genres:", error);
//       throw error;
//     }
//   };