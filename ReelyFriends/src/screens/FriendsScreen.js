import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FriendsScreen(){
    return (
        <View style={styles.container}> 
            <Text style={styles.text}> Friends Screen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1E2030",
    },
    text: {
        color: "#FFF"
    }
})


