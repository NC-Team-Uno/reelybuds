import React from 'react';
import { View, Text, StyleSheet, Image, Button, Alert, navigation} from 'react-native';

export default function WatchPartyCard(){

    return (
        <>
        <View style={styles.watchGroupContainer}>
            <Text style={styles.innerContainerGroupName}>Northcoders Movie Buds</Text>
       
       <View style={styles.providersBox}>
       <Image
        source={require('../../assets/face.jpeg')}
        style={styles.groupImage} 
      />
    <Image
        source={require('../../assets/disneypluslogo.jpeg')}
        style={styles.disneyLogo} 
      />
      <Image
        source={require('../../assets/netflixlogo.jpeg')}
        style={styles.disneyLogo} 
      />
    </View>
  <View style={styles.friendsBox}>
            <Text style={styles.individualFriend}>Kieran</Text>
            <Text style={styles.individualFriend}>Andra</Text>
            <Text style={styles.individualFriend}>Hayden</Text>
            <Text style={styles.individualFriend}>Viktoriia</Text>
            <Text style={styles.individualFriend}>Imran</Text>
            <Text style={styles.individualFriend}>Sula</Text>
        </View>
        </View>
    </>
)
}

const styles = StyleSheet.create ({
 watchGroupContainer: {
        backgroundColor: "#50515e",
        padding: 15,
        borderRadius: 40,
        margin: 10,
        shadowColor: "#08080C",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 12,
  },
    innerContainerGroupName: {
        color: "black",
        backgroundColor: "#d3d3d3",
        padding: 10,
        textAlign: "center",
        borderRadius: 15,
        marginRight:20,
        marginLeft: 20,
        fontWeight: 'bold'
      
    },
    groupImage:{
        width: 70, 
        height: 70,
        borderRadius: 100,
        alignSelf: "left",
        margin: 10
    },
    disneyLogo: {
        width: 50,
        height: 30,
        marginLeft: 7
    },
    friendsBox: {
        backgroundColor: "#d3d3d3",
        borderRadius: 10,
        margin: 5,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    individualFriend: {
        backgroundColor: "#",
        padding: 10,
        marginLeft: 3,
        marginRight:3, 
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 10,
        justifyContent: 'flex-start',
    }, 
    providersBox: {
    flexDirection: 'row',
    alignItems: 'center'
    }
})