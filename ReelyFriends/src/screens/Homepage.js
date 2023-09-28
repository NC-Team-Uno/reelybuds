import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text} from "react-native";
import Providers from "../components/Providers";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../contexts/User";
import COLORS from "../style/Colors";


const Homepage = () => {
  const { user, setUser } = useContext(UserContext); 
  const [timesPressed, setTimesPressed] = useState(0);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        Welcome {user.username}, here's what's hot right now!
      </Text>
      <StatusBar style="dark" translucent={false} />
      <Providers />
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
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.FONT_COLOR_ORANGE,
    marginTop:10
  },
});

export default Homepage;
