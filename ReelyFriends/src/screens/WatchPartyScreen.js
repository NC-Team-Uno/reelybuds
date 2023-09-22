import React from 'react';
import { View, Text, StyleSheet, Image, Button, Navigation} from 'react-native';
import GoToButton from '../components/GoToButton';
export default function WatchPartyScreen() {

return (
    <View style={styles.container}>
        <Text style={styles.yourWatchParties}>Your Watch Parties</Text>
   <GoToButton  />



        <View style={styles.explanationBox}>
        <Text style={styles.explanationText}>Invite friends to a watch party and choose the perfect film for your night in!</Text>
        </View>

        <View style={styles.watchGroupContainer}>
            <Text style={styles.innerContainerText}>Northcoders Movie Buds</Text>
       
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
    </View>
)
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#1E2030"
    },
    title: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 25,
        margin: 10,
    },
    createButton: {

    },
    explanationBox: {
        backgroundColor: "#50515e",

    },
    explanationText: {
        color: "#fff",
        textAlign: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop:5,
        marginBottom: 5
    },
    yourWatchParties:{
        color: "#fff",
        margin:10,
        fontSize:17,
        fontWeight: "bold"

    },
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
    innerContainerText: {
        color: "black",
        backgroundColor: "#d3d3d3",
        padding: 10,
        textAlign: "center",
        borderRadius: 15,
        marginRight:20,
        marginLeft: 20
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
        backgroundColor: "red",
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