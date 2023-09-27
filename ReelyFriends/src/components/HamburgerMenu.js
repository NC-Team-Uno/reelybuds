import React, { useContext, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import EditProfileScreen from "../screens/EditProfileScreen";
import COLORS from "../style/Colors";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { UserContext } from "../contexts/User";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const {setUser} = useContext(UserContext)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openEditProfileModal = () => {
    setModalVisible(true);
  };

  const logout = () => {
    setUser({})
    signOut(auth)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu}>
        <Text style={styles.menuButton}>☰</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuText} onPress={openEditProfileModal}>
            Edit Profile
          </Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <EditProfileScreen closeModal={() => setModalVisible(false)} />
          </Modal>
          <Text style={styles.menuText} onPress={logout}>Log Out</Text>
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
    color: COLORS.FONT_COLOR_MAIN,
    padding: 10,
  },
  menu: {
    display: "flex",
    gap: 10,
    backgroundColor: "#fff",
    position: "absolute",
    top: 50,
    right: 10,
    padding: 10,
    zIndex: 10,
  },
  menuText: {
    color: COLORS.FONT_COLOR_ORANGE,
    fontSize: 16,
  }
});

export default HamburgerMenu;
