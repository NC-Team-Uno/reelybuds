import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage'
import Header from './src/components/Header';
import CreateProfile from './src/screens/CreateProfile';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CreateProfile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##1e2030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
