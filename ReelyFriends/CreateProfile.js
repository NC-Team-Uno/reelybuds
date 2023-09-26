import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Dimensions} from 'react-native';
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebase';
import { NavigationProp } from '@react-navigation/native';


function CreateProfile({route, navigation}) {

  const {name, userName, email, password} = route.params;

  const [timesPressed, setTimesPressed] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log(name, userName, email, password)

  const providerData = [
    "Netflix" ,
    "Disney+" ,
    "Apple TV" ,
    "Amazon Prime" ,
    "Now TV" ,
    "BBC iPlayer" ,
    "Channel 4" ,
    "Paramount+" ,
    "Sky Go" ,
    "BritBox" ,
    "YouTube" 
];

  const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Fantasy'];

  const [selectedProviders, setSelectedProviders] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);


  const toggleProvider = (provider) => {
    if (selectedProviders.includes(provider)) {
      setSelectedProviders(selectedProviders.filter((item) => item !== provider));
    } else {
      setSelectedProviders([...selectedProviders, provider]);
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
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
    .then(()=> {   
      navigation.navigate('Homepage', {
        name: name,
        userName: userName,
        email: email,
      })   

      })
    .catch((error) => {
        const errorMessage = error.message;
        alert('Sign up failed: ' + errorMessage);
      })   
  }

  const handleCreateAccount = () => {

    setIsSubmitting(true);
    createUserFirebase()      
    // post  in the user account MongoDB name, username, email, selectedProviders, selectedGenres, avatar
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
            setAvatar(avatar)
        }}
          placeholder={'enter your photo url here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        <Text style={styles.textSelection}>Select favourite streaming providers:</Text>
        <View style={styles.selectionContainer}>
          {providerData.map((provider) => (
            <Pressable
              key={provider}
              style={({ pressed }) => [
                {
                  backgroundColor: selectedProviders.includes(provider)
                  ? '#f96501'
                  : pressed
                  ? '#f96501'
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
                    ? '#f96501'
                    : pressed
                    ? '#f96501'
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
              backgroundColor: pressed ? '#D2E6FF' : '#f96501',
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
    alignItems: 'top',
    backgroundColor: '#1e2035',
    justifyContent: 'center',  
    paddingLeft: 20,
    paddingRight: 20,
},
input: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'white', 
    borderRadius: 2,
    paddingHorizontal: 10,
    marginBottom: 10,
},
textSelection: {
    textAlign: 'center',
    marginStart: 10,
    alignContent: 'center',
    color: '#EF8945',
    fontSize: 24,
},

create: {
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#7AA5D9',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
  },
wrapperCustom: {
    borderColor: 'purple',
    borderRadius: 5,
    fontSize: 16,
    marginBottom:20,
},
pressed: {
    borderRadius: 10,
    textAlign: 'center',
    color: '#DDDBCB',
    fontSize: 24,
    marginBottom: 5,
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
  borderRadius: 10,
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
},
selectionButton: {
  padding: 10,
  margin: 5,
  borderRadius: 5,
  borderWidth: 1,

},
selectionText: {
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default CreateProfile;
