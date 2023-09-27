import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Dimensions,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";



function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmailError, setUserEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [timesPressed, setTimesPressed] = useState(0);

  const navigation = useNavigation();

  const validateEmail = () => {
    if (!email.trim()) {
      setUserEmailError("Email is required");
    } else {
      setUserEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // get username by email from MongoDB
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sign in failed: " + error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {
          validateEmail(email);
          setEmail(email);
        }}
        placeholder={"your email here"}
        placeholderTextColor="#50515e"
        style={styles.input}
        autoFocus
      />
      {userEmailError ? (
        <Text style={styles.error}>{userEmailError}</Text>
      ) : null}
      <Text style={styles.username}>Password:</Text>
      <TextInput
        value={password}
        onChangeText={(password) => {
          validatePassword(password);
          setPassword(password);
        }}
        placeholder={"your password here"}
        placeholderTextColor="#50515e"
        style={styles.input}
        secureTextEntry={true}
      />
      {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          handleLogin();
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#D2E6FF" : "#de5900",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.pressed}>
            {pressed ? "Logging in ..." : "Log in"}
          </Text>
        )}
      </Pressable>
      <Text style={styles.create}>
        {" "}
        Don't have an account? Click below to create one.{" "}
      </Text>
      <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
          navigation.navigate("CreateAccount");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#D2E6FF" : "#de5900",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.pressed}>
            {pressed ? "Creating account ..." : "Create account"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
    backgroundColor: "#1e2035",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    width: deviceWidth * 0.75,
    alignContent: "center",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 37,
  },
  username: {
    width: deviceWidth * 0.75,
    textAlign: "center",
    marginTop: 15,
    marginStart: 10,
    marginBottom: 5,
    alignContent: "center",
    color: "#EF8945",
    fontSize: 24,
  },
  create: {
    width: deviceWidth * 0.75,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#7AA5D9",
    fontSize: 16,
    marginTop: 10,
  },
  wrapperCustom: {
    width: deviceWidth * 0.75,
    borderColor: "purple",
    borderRadius: 15,
    fontSize: 16,
    marginTop: 15,
  },
  pressed: {
    borderRadius: 10,
    textAlign: "center",
    color: "#DDDBCB",
    fontSize: 24,
    textShadowRadius: 5,
    textShadowColor: "black",
    fontWeight: "700",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 15,
  },
  error: {
    color: "magenta",
    marginBottom: 10,
  },
});

export default LogIn;
