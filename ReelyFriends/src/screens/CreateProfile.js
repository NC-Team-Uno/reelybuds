import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { providerData } from "../constants/providerData";
import { UserContext } from "../contexts/User";
import GenreList from "../components/GenreList";
import COLORS from "../style/Colors";

function CreateProfile({ route }) {
  const { user } = useContext(UserContext);
  const [timesPressed, setTimesPressed] = useState(0);
  const [avatar, setAvatar] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const navigation = useNavigation();

  const findProviderIdByLogo = (logoUrl) => {
    for (const providerKey in providerData) {
      if (providerData[providerKey].logo === logoUrl) {
        return providerData[providerKey].id;
      }
    }
    return null;
  };

  const toggleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const createUserFirebase = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: user.userName });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Sign up failed: " + errorMessage);
      });
  };

  const handleCreateAccount = () => {
    setIsSubmitting(true);
    const providerIds = selectedServices.map((logoUrl) =>
      findProviderIdByLogo(logoUrl)
    );
    console.log(selectedGenres);
    const userprofile = {
      username: user.username,
      avatar: avatar
        ? avatar
        : "https://gravatar.com/avatar/8f77f34d18833ea1ffba1a8ba15633b9?s=200&d=robohash&r=pg",
      streamingServices: providerIds,
      preferences: selectedGenres,
      wishlist: [],
      likedFilms: [],
      friends: [],
      watchGroups: [],
    };

    axios
      .post("https://reelyfriends-api-mnnh.onrender.com/users", userprofile)
      .then((user) => {
        createUserFirebase();
      })
      .catch((err) => alert("Please retry" + err));
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textSelection}>Upload profile picture</Text>
      <TextInput
        value={avatar}
        onChangeText={(avatar) => {
          setAvatar(avatar);
        }}
        placeholder={"your photo url here"}
        placeholderTextColor="#50515e"
        style={styles.input}
      />
      <View style={styles.section}>
        <Text style={styles.textSelection}>
          Select favourite streaming providers
        </Text>
        <View style={styles.buttonContainer}>
          {Object.keys(providerData).map((providerKey) => {
            const provider = providerData[providerKey];
            const isSelected = selectedServices.includes(provider.logo);
            return (
              <Pressable
                key={providerKey}
                style={[
                  styles.pressableButton,
                  {
                    width: "30%",
                    backgroundColor: isSelected
                      ? COLORS.LIGHT_BACKGROUND
                      : COLORS.BASIC_BACKGROUND,
                    borderColor: isSelected
                      ? COLORS.FONT_COLOR_ORANGE
                      : COLORS.BASIC_BACKGROUND,
                  },
                ]}
                onPress={() => toggleServiceSelection(provider.logo)}
              >
                <Image
                  source={{ uri: provider.logo }}
                  style={styles.providerLogo}
                />
              </Pressable>
            );
          })}
        </View>
      </View>

      <Text style={styles.textSelection}>Select favourite genres</Text>
      <View style={styles.selectionContainer}>
        <GenreList
          selectedGenreNames={selectedGenres}
          handleGenreSelection={setSelectedGenres}
        />
      </View>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          handleCreateAccount();
        }}
        disabled={isSubmitting}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#D2E6FF" : "#de5900",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.pressed}>
            {pressed ? "Creating account ..." : "Complete profile"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
    backgroundColor: "#1e2035",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: deviceWidth * 0.75,
    textAlign: "left",
    color: COLORS.FONT_COLOR_ORANGE,
    fontSize: 18,
    borderWidth: 1,
    borderColor: COLORS.ORANGE_BACKGROUND,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    height: 37,
  },
  textSelection: {
    width: deviceWidth * 0.75,
    textAlign: "center",
    marginStart: 10,
    alignContent: "center",
    color: COLORS.FONT_COLOR_MAIN,
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },

  create: {
    width: deviceWidth * 0.75,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#7AA5D9",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
  wrapperCustom: {
    width: deviceWidth * 0.75,
    borderColor: "purple",
    borderRadius: 15,
    fontSize: 16,
    marginBottom: 20,
    marginTop: 30,
  },
  pressed: {
    borderRadius: 20,
    textAlign: "center",
    color: "#DDDBCB",
    fontSize: 24,
    fontWeight: "700",
    textShadowRadius: 5,
    textShadowColor: "black",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    marginBottom: 15,
  },
  error: {
    color: "magenta",
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 1,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
  },
  selectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "auto",
    alignItems: "stretch",
  },
  selectionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  selectionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  pressableButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: COLORS.ORANGE_BACKGROUND,
    color: COLORS.FONT_COLOR_MAIN,
    borderRadius: 4,
    borderColor: COLORS.FONT_COLOR_ORANGE,
    borderWidth: 1,
    fontSize: 18,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonProviders: {
    color: COLORS.FONT_COLOR_MAIN,
    fontSize: 16,
  },
  buttonText: {
    color: COLORS.FONT_COLOR_MAIN,
    fontSize: 18,
    fontWeight: "bold",
  },
  providerLogo: {
    display: "flex",
    justifyContent: "center",
    width: 80,
    height: 73,
    padding: 10,
  },
});

export default CreateProfile;
