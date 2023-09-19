import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsScreen from './src/screens/FriendsScreen';
import SearchScreen from './src/screens/SearchScreen';
import WatchPartyScreen from './src/screens/WatchPartyScreen';
import UserScreen from './src/screens/UserScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Watch Party" component={WatchPartyScreen} />
        <Tab.Screen name="Friends" component={FriendsScreen} />
        <Tab.Screen name="UserScreen" component={UserScreen} />

      </Tab.Navigator>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##1e2030',

  },
});
