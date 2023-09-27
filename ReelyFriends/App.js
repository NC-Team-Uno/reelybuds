<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authorised from "./src/screens/Authorised";
import Unauthorised from "./src/screens/Unauthorised";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { UserProvider } from "./src/contexts/User";
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Homepage from "./src/screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Header from "./src/components/Header";
import FriendsScreen from "./src/screens/FriendsScreen";
import MyList from "./src/screens/MyList";
import WatchPartyScreen from "./src/screens/WatchPartyScreen";
import UserScreen from "./src/screens/UserScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import CreateAccount from "./src/screens/CreateAccount";
import Login from "./src/screens/Login";
import CreateProfile from "./src/screens/CreateProfile";
>>>>>>> main

const Stack = createNativeStackNavigator();
const globalScreenOtions = {
  headerShown: false,
};
export default function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });

    return unsubscribe;
  }, [isUser]);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOtions}>
          {!isUser ? (
            <Stack.Screen name="Unauthorised" component={Unauthorised} />
          ) : (
            <Stack.Screen name="Authorised" component={Authorised} />
          )}
        </Stack.Navigator>
=======
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
    });
  }, []);

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  const InsideStack = createNativeStackNavigator();

  function InsideLayout() {
    return (
      <InsideStack.Navigator initialRouteName="Register">
        <InsideStack.Screen name="CreateAccount" component={CreateAccount} />
        <InsideStack.Screen name="CreateProfile" component={CreateProfile} />
      </InsideStack.Navigator>
    );
  }

  return (
    <>
      <Header />
      <StatusBar style={"#fff"} />
      <NavigationContainer>
        <View style={styles.container}>
          {user ? (
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
                name="Homepage"
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
                name="User Profile"
                component={UserScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="person" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          ) : (
            <Stack.Navigator initialRouteName="LogIn">
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={InsideLayout}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          )}
        </View>
>>>>>>> main
      </NavigationContainer>
    </UserProvider>
  );
}
<<<<<<< HEAD
=======

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2030",
  },
});
>>>>>>> main
