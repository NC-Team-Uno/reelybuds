import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputExample = () => {
  const [text, setText] = React.useState('Search for friends');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
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

export default TextInputExample;