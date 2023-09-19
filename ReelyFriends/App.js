import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/screens/Homepage'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FriendsScreen from './src/screens/FriendsScreen';
import SearchScreen from './src/screens/SearchScreen';
import WatchPartyScreen from './src/screens/WatchPartyScreen';
import UserScreen from './src/screens/UserScreen';

//trying to use Ionicons - following instructions at: https://ionic.io/ionicons/usage#home-outline




const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Homepage}  options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home-outline" size={size} color={color} />
              ),
            }}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="search-outline" size={size} color={color} />
              ),
            }}/>
        <Tab.Screen name="Watch Party" component={WatchPartyScreen} options={{
          tabBarIcon: ({ color, size }) => (
          <Icon name="film-outline" size={size} color={color}/>
          ),
        }}/>
        <Tab.Screen name="Friends" component={FriendsScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="happy" size={size} color={color}/>
          )
        }}
          />
        <Tab.Screen name="UserScreen" component={UserScreen} options={{
          tabBarIcon:({ color, size })=> (
            <Icon name="person" size={size} color={color}/>
          )
        }}/>

      </Tab.Navigator>
      <StatusBar style="auto" />
    </View>
    </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2030',

  },
});
