import React, {useContext, useState} from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Dimensions} from 'react-native';
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { providerData } from '../constants/providerData';
import { UserContext } from '../contexts/User';



function CreateProfile({route}) {

    const { user } = useContext(UserContext);
    console.log(user);

  

  const [timesPressed, setTimesPressed] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigation = useNavigation();


  const providerNames = [
    "netflix" ,
    "disneyplus" ,
    "appletv" ,
    "amazonprime" ,
    "nowtv" ,
    "bbciplayer" ,
    "channel4" ,
    "paramountplus" ,
    "skygo" ,
    "britbox" ,
    "youtube" 
];


  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Fantasy'];

  const [streamingPreferences, setStreamingPreferences] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);


  const toggleProvider = (provider) => {
    if (streamingPreferences.includes(provider)) {
      setStreamingPreferences(streamingPreferences.filter((item) => item !== provider));
    } else {
      setStreamingPreferences([...streamingPreferences, provider]);
    }
  };

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((item) => item !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const createUserFirebase = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(()=>{updateProfile(auth.currentUser, {displayName: user.userName})})
    .catch((error) => {
        const errorMessage = error.message;
        alert('Sign up failed: ' + errorMessage);
      })   
  }

  const userprofile = {username: user.username, avatar: avatar ? avatar : 'https://gravatar.com/avatar/8f77f34d18833ea1ffba1a8ba15633b9?s=200&d=robohash&r=pg', streamingServices: streamingPreferences.map((service)=>{return providerData[service].id.toString()}), preferences: selectedGenres, wishlist: [], likedFilms: [], friends: [], watchGroups:[]};

  const handleCreateAccount = () => {
    setIsSubmitting(true);
       axios
         .post("https://reelyfriends-api-mnnh.onrender.com/users", userprofile)
         .then((user) => {
           createUserFirebase();
         })
         .catch((err) => alert("Please retry" + err));
    setTimeout(() => {
    setIsSubmitting(false);
    }, 2000);
  };


  return (
      <View style={styles.container}>
        <Text style={styles.textSelection}>Upload profile picture:</Text>
        <TextInput
          value={avatar} 
          onChangeText={(avatar) => {
            setAvatar(avatar);
        }}
          placeholder={'your photo url here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        <Text style={styles.textSelection}>Select favourite streaming providers:</Text>
        <View style={styles.selectionContainer}>
          {providerNames.map((provider) => (
            <Pressable
              key={provider}
              style={({ pressed }) => [
                {
                  backgroundColor: streamingPreferences.includes(provider)
                  ? '#de5900'
                  : pressed
                  ? '#de5900'
                  : '#D2E6FF',
                },
                styles.selectionButton,
              ]}
              onPress={() => toggleProvider(provider)}>
              <Text style={styles.selectionText}>{provider}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.textSelection}>Select favourite genres:</Text>
        <View style={styles.selectionContainer}>
          {genres.map((genre) => (
            <Pressable
              key={genre}
              style={({ pressed }) => [
                {
                  backgroundColor: selectedGenres.includes(genre)
                    ? '#de5900'
                    : pressed
                    ? '#de5900'
                    : '#D2E6FF',
                },
                styles.selectionButton,
              ]}
              onPress={() => toggleGenre(genre)}>
              <Text style={styles.selectionText}>{genre}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
            handleCreateAccount();
          }}
          disabled={isSubmitting}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#D2E6FF' : '#de5900',
            },
            styles.wrapperCustom,
          ]}>
          {({ pressed }) => (
            <Text style={styles.pressed}>
              {pressed ? 'Creating account ...' : 'Complete profile'}
            </Text>
          )}
        </Pressable>
      </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: deviceWidth,
    alignItems: "center",
    backgroundColor: '#1e2035',
    justifyContent: 'center',  
    paddingLeft: 20,
    paddingRight: 20,
},
input: {
    width: deviceWidth * 0.75,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white', 
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    height: 37,
},
textSelection: {
    width: deviceWidth * 0.75,
    textAlign: 'center',
    marginStart: 10,
    alignContent: 'center',
    color: '#EF8945',
    fontSize: 24,
},

create: {
    width: deviceWidth * 0.75,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#7AA5D9',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 15,
  },
wrapperCustom: {
    width: deviceWidth * 0.75,
    borderColor: 'purple',
    borderRadius: 15,
    fontSize: 16,
    marginBottom:20,
    marginTop: 30,
},
pressed: {
  borderRadius: 20,
  textAlign: 'center',
  color: '#DDDBCB',
  fontSize: 24,
  fontWeight: "700",
  textShadowRadius: 5,
  textShadowColor:"black",
  borderRadius: 10,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 10,
  marginBottom: 15,
},
error: {
    color: 'magenta',
    marginBottom: 10,
},
buttonStyle: {
  backgroundColor: '#307ecc',
  borderWidth: 1,
  color: '#FFFFFF',
  borderColor: '#307ecc',
  height: 40,
  alignItems: 'center',
  borderRadius: 20,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 15,
  marginBottom: 15,
},
buttonTextStyle: {
  color: '#FFFFFF',
  paddingVertical: 10,
  fontSize: 16,
},
textStyle: {
  backgroundColor: '#fff',
  fontSize: 15,
  marginTop: 16,
  marginLeft: 35,
  marginRight: 35,
  textAlign: 'center',
},
selectionContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignSelf:'auto',
  alignItems: "stretch",
},
selectionButton: {
  padding: 10,
  margin: 5,
  borderRadius: 10,
  borderWidth: 1,

},
selectionText: {
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default CreateProfile;
