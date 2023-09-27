import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WatchPartyCard({ group }) {
  const { name, avatar, members, groupAdmin } = group;
  return (
     <View style={styles.watchGroupContainer}>
        <Text style={styles.innerContainerGroupName}>{name}</Text>
       <Text style={styles.admin}>Admin: {groupAdmin}</Text>
   
    
        <View style={styles.friendsAndAvatarBox}>
        <Image style={styles.avatar} source={{uri: avatar}}></Image>
       <View>
          {members.map((member) => {
            return (
              <View style={styles.friends} key={member._id}>
              <Text key={member.id} style={styles.individualFriend}>
               {member}
              </Text>
              </View>

            );
 }
)}</View>
          </View>
          </View>
          )
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
    backgroundColor: "#fc873f",
    padding: 10,
    width:300,
    textAlign: "center",
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 17.5,
  },
  admin:{
    backgroundColor: "#d3d3d3",
    marginTop:5,
    marginBottom: 5,
    width: 300,
    borderRadius: 15,
    color: "black",
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    alignSelf: "flex-start",
    margin: 10,
    borderWidth: 2,
    borderColor: '#696a77',
  },
  friendsAndAvatarBox: {
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
