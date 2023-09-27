import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./Login";
import CreateAccount from "./CreateAccount";
import CreateProfile from "./CreateProfile";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const globalScreenOtions = {
  headerShown: false,
};

const Unauthorised = () => {


  return (
    <>
      <Header />
      <StatusBar style="auto" />
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={globalScreenOtions}>
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
          />
          <Stack.Screen
            name="CreateProfile"
            component={CreateProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Unauthorised;
