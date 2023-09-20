import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ProvidersMovies from "./ProvidersMovies";
import { getMoviesByProvider } from "../api/Apicall";

const providerData = {
  netflix: { id: 8, name: "Netflix" },
  disneyplus: { id: 337, name: "Disney+" },
  appletv: { id: 350, name: "Apple TV" },
  amazonprime: { id: 9, name: "Amazon Prime" },
  nowtv: { id: 39, name: "Now TV" },
  bbciplayer: { id: 38, name: "BBC iPlayer" },
  channel4: { id: 103, name: "Channel 4" },
  paramountplus: { id: 531, name: "Paramount+" },
  skygo: { id: 29, name: "Sky Go" },
  britbox: { id: 380, name: "BritBox" },
  youtube: { id: 192, name: "YouTube" },
};

const Providers = () => {
  const [movieLists, setMovieLists] = useState({});

  useEffect(() => {
    Object.keys(providerData).forEach((providerName) => {
      getMoviesByProvider(providerData[providerName].id).then(
        (movieResponse) => {
          setMovieLists((prevMovieLists) => ({
            ...prevMovieLists,
            [providerName]: movieResponse,
          }));
        }
      );
    });
  }, []);

  return (
    <View>
      {Object.keys(providerData).map((providerName) => (
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
