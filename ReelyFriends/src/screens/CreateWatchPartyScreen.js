import React from "react";
import {StyleSheet,Text, View, TouchableOpacity, Button, Alert, Image} from 'react-native';
import GroupNameInput from "../components/GroupNameInput";
import FriendsSearchBar from "../components/FriendsSearchBar";
import Icon from "react-native-vector-icons/Ionicons";


export default function CreateWatchParty(){
    return (
    <View style={styles.container}>
    <Text style={styles.createWatchPartyTitle}>Create Watch Group</Text>
    <GroupNameInput />

    <Text style={styles.selectAvatar}>Select an avatar</Text>
    <View style={styles.avatarContainer}>
    <Image
        source={require('../../assets/face.jpeg')}
        style={styles.profileImage} 
      />
         <Image
        source={require('../../assets/face.jpeg')}
        style={styles.profileImage} 
      />
   <Image
        source={require('../../assets/face.jpeg')}
        style={styles.profileImage} 
      />
         <Image
        source={require('../../assets/face.jpeg')}
        style={styles.profileImage} 
      />
    </View>
 

<View style={styles.searchFriendsContainer}>


<FriendsSearchBar /> 

<View style={styles.individualFriendBox}>
<Text style={styles.friendNameText}>Andra</Text>
<TouchableOpacity style={styles.addButton}>
          <Icon name="add" color={"#fff"} size={40} />
        </TouchableOpacity>

</View>

</View>
    
<Button style={styles.createButton}
    title="Create Watch Group"
    onPress={() => Alert.alert('One day soon this will enter data to our jazzy DB!')}
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
selectAvatar: {
color: "#fff",
marginLeft: 15, 
},
avatarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'

},
searchFriendsContainer: {
    backgroundColor: "#50515e",
    padding: 5,
    paddingBottom: 200,
    borderRadius: 40,
    margin: 10,
    
},
profileImage: {
    width: 70, 
    height: 70,
    borderRadius: 100,
    alignSelf: "center",
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

})