
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import WatchPartyCard from "../components/WatchPartyCard";
import { getUserWatchGroups } from "../api/backendAPICalls";
import GroupDetail from "../components/GroupDetail";
import CreateWatchGroup from "../components/CreateWatchGroup";
import CreateWatchPartyModal from '../components/CreateWatchPartyModal';
import { UserContext } from '../contexts/User';




const App = () => {
  const { user, setUser } = useContext(UserContext); // user from db
  const [modalVisible, setModalVisible] = useState(false);
  const [groups, setGroups] = useState([]);
  const [groupModalData, setGroupModalData] = useState([]);

  useEffect(() => {
    getUserWatchGroups(user.username).then((data) => {
      setGroups(data.reverse());
    });
  }, []);

  const handlePress = (item) => {
    setGroupModalData(item);
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, styles.centeredView]}>
      <Text style={styles.yourWatchParties}>Your Watch Parties</Text>

      <CreateWatchGroup setGroups={setGroups} />

      <FlatList
        horizontal={false}
        data={groups}
        key={groups.item}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                key={item._id}
                onPress={() => {
                  handlePress(item);
                }}
              >
                <WatchPartyCard group={item} />
              </TouchableOpacity>
            </>
          );
        }}
      ></FlatList>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <GroupDetail
          groupInfo={groupModalData}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E2030",
    height: 150,
  },
  yourWatchParties: {
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingTop: 2,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#f96501",
  },
  buttonClose: {
    backgroundColor: "#f96501",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default App;
