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
import { useState, useContext, useEffect } from "react";
import WatchGroupFriends from "./WatchGroupFriends";
import { postWatchGroup, getUserWatchGroups } from "../api/backendAPICalls";
import { UserContext } from "../contexts/User";

export default function CreateWatchPartyModal({ closeModal, setGroups }) {
  const { user, setUser } = useContext(UserContext);
  const [groupAdmin, setGroupAdmin] = useState(user.username);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [members, setMembers] = useState([groupAdmin]);

  const objectToSend = { groupAdmin, name, avatar, members };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.exitButton} onPress={closeModal}>
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
          <TouchableOpacity
            onPress={() => {
              setAvatar(
                "https://outsourcetopk.com/public/assets/images/portfolio/logo/Popcorn-1.jpg"
              );
            }}
          >
            <Image
              source={{
                uri: "https://outsourcetopk.com/public/assets/images/portfolio/logo/Popcorn-1.jpg",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAvatar(
                "https://i.pinimg.com/1200x/3e/08/1f/3e081f1c27ea7933ed8c9f32989c67ed.jpg"
              );
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/1200x/3e/08/1f/3e081f1c27ea7933ed8c9f32989c67ed.jpg",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAvatar(
                "https://endlessicons.com/wp-content/uploads/2012/09/pizza-icon-614x460.png"
              );
            }}
          >
            <Image
              source={{
                uri: "https://endlessicons.com/wp-content/uploads/2012/09/pizza-icon-614x460.png",
              }}
              style={[styles.profileImage, styles.pizzaIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setAvatar(
                "https://thenounproject.com/api/private/icons/4929894/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
              );
            }}
          >
            <Image
              source={{
                uri: "https://thenounproject.com/api/private/icons/4929894/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0",
              }}
              style={[styles.profileImage, styles.pizzaIcon]}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.selectFriendsTitle}>Select friends</Text>

          <View style={styles.friends}>
            <WatchGroupFriends
              members={members}
              setMembers={setMembers}
              groupAdmin={groupAdmin}
            />
           
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.pressable]}
        onPress={() => {
          if (objectToSend.name.length === 0) {
            Alert.alert("A group name is required to create a watch group.");
          } else {
            postWatchGroup(objectToSend);
            getUserWatchGroups(user.username).then((data) => {
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
    paddingBottom: 10,
    margin: 10,
    borderRadius: 20,
  },

  selectAvatarText: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 20,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    margin: 6,
    borderWidth: 2,
    borderColor: "#696a77",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#f0f0f1",
    textAlign: "center",
  },
  exitButton: {
    backgroundColor: "#50515e",
    padding: 4,
    borderRadius: 12,
    top: 15,
    alignItems: "end",
    position: "absolute",
  },
  pizzaIcon: {
    backgroundColor: "#fff",
  },

  avatarContainer: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  createButton: {
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#f96501",
    borderRadius: 20,
    alignSelf: "center",
    textAlign: "center",
  },
  selectFriendsTitle: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 20,
  },
  friends: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    paddingLeft: 10,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 1,
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});
