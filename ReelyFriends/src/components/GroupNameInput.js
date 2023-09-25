import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const GroupNameInput = ({groupToPost, setGroupToPost, groupName, setGroupName}) => {

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={groupName}
        onChangeText={(text)=>{
       setGroupName(text)
      
        

        }}
        placeholder="Enter Group Name"
        placeholderTextColor="#fff" 
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    color: "#fff"
  },
});

export default GroupNameInput;