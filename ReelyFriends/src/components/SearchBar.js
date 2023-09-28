
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default SearchBar = ({text, setText}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        placeholder="Search for a movie"
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
    color: 'white'
  },
});

