import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>
        <Text style={styles.orange}>Reely</Text>Friends
      </Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 90,
    backgroundColor: "#11131C",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  labelStyle: {
    marginTop: 10,
    fontSize: 37,
    fontWeight: "700",
    color: "#F2F2F2",
  },
  orange: {
    color: "#f96501",
  },
});

export default Header;
