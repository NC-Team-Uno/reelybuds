import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  FlatList,
} from "react-native";
import CreateWatchPartyModal from "../components/CreateWatchPartyModal";

export default CreateWatchGroup = ({ setGroups }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, styles.centeredView]}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Create Watch Party</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <CreateWatchPartyModal
          setGroups={setGroups}
          closeModal={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
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
    height: 40,
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
