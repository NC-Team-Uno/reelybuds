import React from "react";
import {useState, useEffect} from 'react'
import {View, Text, Styles, TouchableOpacity, Icon } from "react-native";
import {getUserFriends} from "../api/backendAPICalls";

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
            onPress={()=>{
                setMembers([...members, friend])
            }} key={friend}>
        <Text>{friend}</Text>
        </TouchableOpacity>
        )
    })}

    </>
)
}
