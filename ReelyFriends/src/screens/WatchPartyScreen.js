import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity} from 'react-native';
import CreateWatchPartyModal from '../components/CreateWatchPartyModal';
import WatchPartyCard from '../components/WatchPartyCard';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={[styles.container, styles.centeredView]}>
         <Text style={styles.yourWatchParties}>Your Watch Parties</Text>

           <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
            
        <Text style={styles.textStyle}>Create Watch Group</Text>
      </Pressable>
          
           <WatchPartyCard />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
  
            <CreateWatchPartyModal
            closeModal={()=> setModalVisible(false)}
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
    yourWatchParties:{
        textAlign: "center",
        fontSize: 25,
        color: "#fff",
        marginBottom:5,
    },
  centeredView: {
    flex: 1,
    alignItems: 'center',

  },
  buttonOpen: {
backgroundColor: "red"

  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop:2,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    backgroundColor: '#f96501',
  },
  buttonClose: {
    backgroundColor: '#f96501',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
