import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { UserContext } from "../contexts/User";
import { getAllUsers} from "../api/backendAPICalls";

export default function FriendsScreen(){
  const { user, setUser } = useContext(UserContext); 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.friendsText}> Your Friends</Text>
      <ScrollView>
        {user.friends.map(friend=>{
          const content = users.filter(user=>user.username === friend)[0]
          console.log(content)
        
          return (
            <View key={content._id} style={styles.card}>
              <Image
                style={styles.image}
                src={
                  content.avatar ||
                  "https://gravatar.com/avatar/8f77f34d18833ea1ffba1a8ba15633b9?s=200&d=robohash&r=pg"
                }
              ></Image>
              <Text style={styles.names}> {content.username}</Text>
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.friendsText}> Add Friends </Text>
      {users.map((member, i) => {
        return (
          <View key={member._id} style={styles.card}>
            <Image
              style={styles.image}
              src={
                member.avatar ||
                "https://gravatar.com/avatar/8f77f34d18833ea1ffba1a8ba15633b9?s=200&d=robohash&r=pg"
              }
            ></Image>
            <Text style={styles.names}> {member.username}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
  },
  friendsText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
    margin: 10,
  },
  names: {
    color: "#F96501",
    textAlign: "center",
    fontSize: 18,
    margin: 10,
  },
  card: {
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    width: 300,
    margin: 5,
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 5,
  },
  image: {
    height: 75,
    width: 75,
  },
});

