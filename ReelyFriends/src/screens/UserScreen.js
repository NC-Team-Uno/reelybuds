import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HamburgerMenu from '../components/HamburgerMenu';

export default function UserScreen() {
    return (
        <View style={styles.container}>
            <HamburgerMenu />
            <Text style={[styles.text, styles.username]}>UserName</Text>
            <Text style={[styles.text, styles.name]}>Name</Text>
            <Image
        source={require('../../assets/face.jpeg')}
        style={styles.profileImage} 
      />
  <Text style={[styles.text, styles.componentToCome]}>Need component here to render user likes</Text>
  <Text style={[styles.text, styles.componentToCome]}>Need component here to render user watch list</Text>
        </View>
    )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#1E2030",

        },
        text: {
            color: "#fff"
        },
        username: {
            textAlign: "center",
            fontSize: 25,
        },
        name: {
            textAlign: "center",
            fontSize: 15,
            padding: 6, 
        },
        profileImage: {
            width: 150, 
            height: 150,
            borderRadius: 100,
            alignSelf: "center",
            margin: 10
        },
        componentToCome: {
            alignSelf: "center",
            fontSize: 15,
            margin: 5,
        }
        }
    )
