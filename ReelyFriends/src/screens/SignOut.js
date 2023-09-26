import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const SignOut = () => {
  const navigation = useNavigation();
  const [timesPressed, setTimesPressed] = useState(0);

  return (
    <View>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          signOut(auth)
            .then(() => {
              navigation.navigate("Login");
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
            {pressed ? "Signing out ..." : "Sign out"}
          </Text>
        )}
      </Pressable>
    </View>
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

export default SignOut;
