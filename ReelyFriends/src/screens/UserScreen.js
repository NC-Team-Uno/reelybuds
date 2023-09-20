import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >User Screen</Text>
        </View>
    )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#1E2030",
         
        },
        text:{
            color: "#FFF",

        }

    })


