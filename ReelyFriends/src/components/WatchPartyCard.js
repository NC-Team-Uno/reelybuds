import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  navigation,
} from "react-native";

export default function WatchPartyCard({ group }) {
  const { name, avatar, members, groupAdmin, streamingServices } = group;
  return (
    <>
      <View style={styles.watchGroupContainer}>
        <Text style={styles.innerContainerGroupName}>{name}</Text>
       <Text>admin: {groupAdmin}</Text><Image style={{width: 100, height: 100}} source={{uri: avatar}}></Image>
        <View style={styles.providersBox}>
        </View>
        <View style={styles.friendsBox}>
        

          {members.map((member) => {
            return (
              <>
              <Text key={member} style={styles.individualFriend}>
               {member}
              </Text>
              </>
            );
          })}
}

const styles = StyleSheet.create({
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
    marginRight: 20,
    marginLeft: 20,
    fontWeight: "bold",
  },
  groupImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    alignSelf: "left",
    margin: 10,
  },
  disneyLogo: {
    width: 50,
    height: 30,
    marginLeft: 7,
  },
  friendsBox: {
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    margin: 5,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  individualFriend: {
    backgroundColor: "#50515E",
    color: "white",
    padding: 10,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 10,
    justifyContent: "flex-start",
  },
  providersBox: {
    flexDirection: "row",
    alignItems: "center",
  },
});
