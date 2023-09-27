import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import FriendsSearchBar from "../components/FriendsSearchBar"
import { UserContext } from "../contexts/User";


export default function FriendsScreen(){
  const { user, setUser } = useContext(UserContext); // user from db
  return (
    <View style={styles.container}>
      <Text style={styles.friendsText}> Friends Screen </Text>
      <FriendsSearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E2030",
    },
    friendsText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 25,
        margin: 10,
    }
})

