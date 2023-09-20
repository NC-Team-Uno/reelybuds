import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-ionicons';

export default function MyList() {
return (
    <View style={styles.container}>
        <Text style={styles.text}>My List</Text>
    </View>
)
}

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: "#1E2030",
},
text: {
    color: "#FFF"
}
})