import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const GroupNameInput = () => {
  const [groupName, setGroupName] = React.useState('Enter group name');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setGroupName}
        value={groupName}
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