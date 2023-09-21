import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const UploadGroupImage = () => {
  const [groupProfilePic, setGroupProfilePic] = React.useState('Upload group profile pic');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setGroupProfilePic}
        value={groupProfilePic}
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

export default UploadGroupImage;