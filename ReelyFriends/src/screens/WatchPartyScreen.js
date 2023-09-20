import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WatchPartyScreen() {
return (
    <View style={styles.container}>
        <Text style={styles.text}>Watch Party</Text>
    </View>
)
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#1E2030",
    },
    text: {
        color: "#FFF"
    }

})