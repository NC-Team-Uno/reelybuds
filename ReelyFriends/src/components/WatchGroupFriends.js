import React from "react";
import {useState, useEffect} from 'react'
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {getUserFriends} from "../api/backendAPICalls";
import Icon from "react-native-vector-icons/Ionicons";

export default function WatchGroupFriends({members, setMembers, groupAdmin}){
    useEffect(()=>{
        getUserFriends(groupAdmin)
        .then((friends)=>{
        setFriendsList(friends)
        })
        },[])
    const [friendsList, setFriendsList] = useState([]);
    if (friendsList.length === 0){
        setFriendsList(["Loading..."])
    }

return (
    <>
    {friendsList.map((friend)=>{
        return (
            <TouchableOpacity 
            style={styles.friend}

            onPress={()=>{

            setMembers([...members, friend])
            }} key={friend}>
        <Text>{friend}</Text>
        <Icon name="add" color={"#f46201"} size={25} />
        </TouchableOpacity>
        )
    })}
    </>
)
}

 const styles = StyleSheet.create({
    friend:{
        flexDirection: 'row',
    alignItems: 'center',
        color: '#50515e',
        fontWeight: 'bold',
        backgroundColor:'white',
        padding: 10,
        borderRadius: 20,


    }
 
})