import React from "react";
import {StyleSheet,Text, View, TouchableOpacity, Button} from 'react-native';
import GroupNameInput from "../components/GroupNameInput";
import UploadGroupImage from "../components/UploadImage";
import FriendsSearchBar from "../components/FriendsSearchBar";
import Icon from "react-native-vector-icons/Ionicons";


export default function CreateWatchParty(){
    return (
    <View style={styles.container}>
    <Text style={styles.createWatchPartyTitle}>Create watch party</Text>
    <GroupNameInput />
    <UploadGroupImage />

<View style={styles.searchFriendsContainer}>

<FriendsSearchBar style={styles.friendsSearchBar}/> 

<View style={styles.individualFriendBox}>
<Text style={styles.friendNameText}>Andra</Text>
<TouchableOpacity style={styles.addButton}>
          <Icon name="add" color={"#fff"} size={40} />
        </TouchableOpacity>

</View>

</View>
    
<Button style={styles.createButton}
    title="Create Watch Party"
    />
    
    </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
backgroundColor: "#1E2030"

},
createWatchPartyTitle: {
    color: "#fff",
    margin:10,
    fontSize:17,
    fontWeight: "bold"
},
searchFriendsContainer: {
    backgroundColor: "#50515e",
    padding: 5,
    paddingBottom: 200,
    borderRadius: 40,
    margin: 10,
    
},

searchForFriendsText: {
    justifyContent: "flex-start",
},
individualFriendBox: {

    flexDirection: 'row',
    backgroundColor: '#f96501',
    borderRadius: 20,
    alignItems: 'center',
    width: 200
},
friendNameText: {
    color: '#fff',
    paddingLeft: 15,
    paddingRight: 50, 
},
addButton:{

}
})