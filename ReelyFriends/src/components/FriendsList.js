import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import ProvidersMovies from "./ProvidersMovies";
import { getMoviesByProvider } from "../api/Apicall";
import { UserContext } from "../contexts/User";

//need to get list of user friends and render their details - like getting movie data

const FriendsList = () => {
  const {user,setUser} = useContext(UserContext) // user from db
  const [friendsList, setFriendsList] = useState({});
  useEffect(() => {
    Object.keys().forEach(() => {
      getFriendsByUserId().then((friendsResponse) => {
        setFriendsList(() => ({
          //spread friends?
        }));
      });
    });
  }, []);
};

export default FriendsList;
