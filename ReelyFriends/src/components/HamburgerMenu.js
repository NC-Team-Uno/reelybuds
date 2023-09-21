import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text style={styles.menuButton}>☰</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <Text>Edit Profile</Text> 
          <Text>Log Out</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    alignItems: "auto",
  },
  menuButton: {
    fontSize: 24,
    margin: 10,
    color: "#fff"
  },
  menu: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
    right: 10,
    padding: 10,
  },
});

export default HamburgerMenu;
