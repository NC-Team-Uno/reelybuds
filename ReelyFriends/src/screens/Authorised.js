import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "../components/Header";

import FriendsScreen from "./FriendsScreen";
import MyList from "./MyList";
import WatchPartyScreen from "./WatchPartyScreen";
import UserScreen from "./UserScreen";
import { auth } from "../../firebase";
import { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/User";
import { updateProfile } from "firebase/auth";

export default function App() {
  const Tab = createBottomTabNavigator();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (auth.currentUser.displayName === null) {
      updateProfile(auth.currentUser, { displayName: user.username });
    }
    axios
      .get(
        `https://reelyfriends-api-mnnh.onrender.com/users/${auth.currentUser.displayName}`
      )
      .then(({ data }) => {
        setUser(data);
      });
  }, []);
  return (
    <>
      <Header />
      <StatusBar style="light" />
      <NavigationContainer independent={true}>
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
            {/* <Tab.Screen
              name="CreateWatchParty"
              component={CreateWatchParty}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Icon name="albums-outline" size={size} color={color} />
                ),
              }}
            /> */}
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
              name="User Settings"
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
