import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./src/screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "./src/components/Header";

import FriendsScreen from "./src/screens/FriendsScreen";
import MyList from "./src/screens/MyList";
import WatchPartyScreen from "./src/screens/WatchPartyScreen";
import UserScreen from "./src/screens/UserScreen";
import CreateWatchParty from "./src/screens/CreateWatchPartyScreen";



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header />
      <StatusBar style="light" />
      <NavigationContainer>
        <View style={styles.container}>

          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#f96501",
              tabBarInactiveTintColor: "#fff",
              tabBarStyle: {
                backgroundColor: "#11131c",
                activeTintColor: "#fff",
                padding: 0,
                borderTopWidth: 0,
              },
            }}
          >

            <Tab.Screen
              name="Home"
              component={Homepage}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="My List"
              component={MyList}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="albums-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="CreateWatchParty"
              component={CreateWatchParty}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="albums-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Watch Party"
              component={WatchPartyScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="film-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Friends"
              component={FriendsScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="happy" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="UserScreen"
              component={UserScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="person" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2030",
  },
});
