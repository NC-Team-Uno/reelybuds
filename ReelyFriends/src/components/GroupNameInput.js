import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const GroupNameInput = ({ name, setName}) => {

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={(text)=>{
       setName(text)
      
        

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