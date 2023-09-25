import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable, 
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import GenreList from "../components/GenreList";
import { providerData } from "../constants/providerData"; 
import COLORS from "../style/Colors";

const EditProfileScreen = ({closeModal}) => {
  const [newPassword, setNewPassword] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const handlePasswordChange = () => {
    // Implement logic to update the user's password
  };

  const handleGenreSelection = (genre) => {
    // Implement logic to add/remove genres from the selectedGenres array
  };

 const toggleServiceSelection = (service) => {
   if (selectedServices.includes(service)) {
     setSelectedServices(selectedServices.filter((s) => s !== service));
   } else {
     setSelectedServices([...selectedServices, service]);
   }
 };

  const handleProfileUpdate = () => {
    // Implement logic to update the user's profile data on the server
    // Include selectedServices in the update
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Edit Profile</Text>
        <Pressable onPress={closeModal} style={styles.closeButton}>
          <Ionicons name="close" size={24} color={COLORS.FONT_COLOR_MAIN} />
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Change Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Enter new password"
          placeholderTextColor="#F96501"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Change Profile Picture</Text>
        <TextInput
          style={styles.input}
          placeholder="Add link to your picture"
          placeholderTextColor="#F96501"
          value={newPicture}
          onChangeText={(text) => setNewPicture(text)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Genres You Like</Text>
        <GenreList />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Manage Streaming Services</Text>
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
      <View style={styles.wrapperBtn}>
        <Pressable style={styles.pressableButton} onPress={handleProfileUpdate}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: COLORS.BASIC_BACKGROUND,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.FONT_COLOR_MAIN,
  },
  closeButton: {
    padding: 8,
  },
  wrapperBtn: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  section: {
    display: "flex",
    justifyContent: "left",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
    color: COLORS.FONT_COLOR_MAIN,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.ORANGE_BACKGROUND,
    borderRadius: 4,
    padding: 8,
    color: COLORS.FONT_COLOR_ORANGE,
    width: "100%",
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
    justifyContent: "space-evenly",
    alignItems: "center",
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
    width: 80,
    height: 73,
    padding: 10,
  },
});

export default EditProfileScreen;

