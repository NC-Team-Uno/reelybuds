import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, Pressable } from "react-native";
import Providers from "../components/Providers";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const Homepage = () => {
  const [user, setUser] = useState(null);
  const [timesPressed, setTimesPressed] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser("guest");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.container}>Hello, {user} !</Text>
      <StatusBar style="light" translucent={false} />
      <Providers />
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          signOut(auth)
            .then(() => {
              navigation.navigate("LogIn");
            })
            .catch((error) => {
              alert("Error signing out: " + error.message);
            });
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#D2E6FF" : "#f96501",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.pressed}>
            {pressed ? "Signing out" : "Sign out"}
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2030",
    color: "#FFF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "#FFF",
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#FFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Homepage;
