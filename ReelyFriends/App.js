import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import LogIn from './src/screens/LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateProfile from './src/screens/CreateProfile';


const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <LogIn />
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
