import React from "react";
import {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Icon } from "react-native";
import {getUserFriends} from "../api/backendAPICalls";

export default function WatchGroupFriends({members, setMembers, groupAdmin}){
    useEffect(()=>{
        getUserFriends(groupAdmin)
        .then((friends)=>{
        setFriendsList(friends)
        })
        },[])
    const [friendsList, setFriendsList] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    if (friendsList.length === 0){
        setFriendsList(["Loading..."])
    }

return (
    <>
    {friendsList.map((friend)=>{
        return (
            <TouchableOpacity 
            disabled={isDisabled}
            onPress={()=>{
            setIsDisabled(true)
            setMembers([...members, friend])
            }} key={friend}>
        <Text style={styles.friend}>{friend}</Text>
        </TouchableOpacity>
        )
    })}
    </>
)
}

 const styles = StyleSheet.create({
    friend:{
        color: '#50515e',
        fontWeight: 'bold'

    }
 
})