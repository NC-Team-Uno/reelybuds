import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
  Dimensions,
} from "react-native";
import GroupNameInput from "./GroupNameInput";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";
import WatchGroupFriends from "./WatchGroupFriends";
import { postWatchGroup, getUserWatchGroups } from "../api/backendAPICalls";

export default function CreateWatchPartyModal({ closeModal, setGroups }) {
  const [groupAdmin, setGroupAdmin] = useState("ReelCritic2023");
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [members, setMembers] = React.useState([groupAdmin]);

  const objectToSend = { groupAdmin, name, avatar, members };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={closeModal}>
        <Icon name="close" color={"#f46201"} size={40} />
      </TouchableOpacity>
      <View style={styles.internalContainer}>
        <Text style={styles.title}>Create Watch Group</Text>

        <GroupNameInput name={name} setName={setName} />

        <Text style={styles.selectAvatarText}>Select an avatar</Text>

        <View style={styles.avatarContainer}>
          <TouchableOpacity
            onPress={() => {
              setAvatar(
                "https://t4.ftcdn.net/jpg/03/54/98/47/360_F_354984781_y61LJvrAl1bL0c8DkisoEhtQHQFyOv2C.jpg"
              );
            }}
          >
            <Image
              source={{
                uri: "https://t4.ftcdn.net/jpg/03/54/98/47/360_F_354984781_y61LJvrAl1bL0c8DkisoEhtQHQFyOv2C.jpg",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://outsourcetopk.com/public/assets/images/portfolio/logo/Popcorn-1.jpg",
            }}
            style={styles.profileImage}
          />
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/3e/08/1f/3e081f1c27ea7933ed8c9f32989c67ed.jpg",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.searchFriendsContainer}>
          <WatchGroupFriends
            members={members}
            setMembers={setMembers}
            groupAdmin={groupAdmin}
          />
        </View>
      </View>
      <Pressable
        style={[styles.pressable]}
        onPress={() => {
          if (objectToSend.name.length === 0) {
            Alert.alert("name required");
          } else {
            postWatchGroup(objectToSend);
            console.log("group posted", objectToSend);
            getUserWatchGroups("ReelCritic2023").then((data) => {
              setGroups(data.reverse());
            });
            closeModal();
          }
        }}
      >
        <Text style={styles.createButton}>Create Watch Group</Text>
      </Pressable>
    </View>
  );
}
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "column",
    marginTop: 90,
    marginBottom: 50,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#50515e",
  },
  internalContainer: {
    backgroundColor: "#96969b",
    margin: 10,
    borderRadius: 20,
  },

  selectAvatarText: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 6,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#f0f0f1",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#50515e",
    padding: 4,
    borderRadius: 12,
    top: 15,
    alignItems: "end",
    position: "absolute",
  },

  avatarContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  individualFriendBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7b602",
    margin: 20,
    borderRadius: 30,
    justifyContent: "space-between",
  },
  friendNameText: {
    marginLeft: 20,
    color: "#fff",
  },
  addButton: {
    marginRight: 10,
  },
  createButton: {
    color: "#fff",
    padding: 4,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f96501",
    borderRadius: 20,
    width: 210,
    height: 30,
    alignSelf: "center",
    textAlign: "center",
  },
});
