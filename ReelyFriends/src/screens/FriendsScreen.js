import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import TextInputExample from "../components/FriendsSearchBar";

export default function FriendsScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.friends}> Friends Screen </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E2030",
    },
    friends: {
        color: "#fff",
        textAlign: "center",
        fontSize: 25,
        margin: 10,
    }
})