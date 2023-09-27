import React, { useState, useEffect, useContext } from "react";
import { View } from "react-native";
import ProvidersMovies from "./ProvidersMovies";
import { getMoviesByProvider } from "../api/Apicall";
import { UserContext } from "../contexts/User";

const providerData = {
  netflix: { id: 8, name: "Netflix" },
  disneyplus: { id: 337, name: "Disney+" },
  appletv: { id: 350, name: "Apple TV" },
  amazonprime: { id: 9, name: "Amazon Prime" },
  nowtv: { id: 39, name: "Now TV" },
  bbciplayer: { id: 38, name: "BBC iPlayer" },
  channel4: { id: 103, name: "All 4" },
  paramountplus: { id: 531, name: "Paramount+" },
  britbox: { id: 380, name: "BritBox" },
};

const Providers = () => {
  const [movieLists, setMovieLists] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user.hasOwnProperty("streamingServices")) {
      console.log(user.streamingServices);
      const filteredProviders = Object.keys(providerData).filter(
        (providerName) =>
          user.streamingServices.includes(
            providerData[providerName].id.toString()
          )
      );
      console.log(filteredProviders);

      filteredProviders.forEach((providerName) => {
        getMoviesByProvider(providerData[providerName].id).then(
          (movieResponse) => {
            setMovieLists((prevMovieLists) => ({
              ...prevMovieLists,
              [providerName]: movieResponse,
            }));
          }
        );
      });
    }
  }, [user]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {Object.keys(movieLists).map((providerName) => (
        <ProvidersMovies
          key={providerName}
          providerName={providerData[providerName].name}
          movies={movieLists[providerName] || []}
        />
      ))}
    </View>
  );
};

export default Providers;
