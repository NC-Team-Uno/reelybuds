import React from "react";
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const Header = ()=>{

    return (
    <View style={styles.container}>
        <Text style={styles.labelStyle}>ReelyFriends</Text>
    </View>
    ); 
}

const deviceWidth = Dimensions.get('window').width;
 
const styles = StyleSheet.create({
    container: {
        width: deviceWidth, 
        height: 90,
        backgroundColor: '#11131C',
        justifyContent: 'flex-end',
        paddingBottom: 20,
        alignItems: 'center',

    }, 
    labelStyle: {
        fontSize: 24,
        fontWeight: "700",
        color: '#F2F2F2',
    }
})

export default Header;