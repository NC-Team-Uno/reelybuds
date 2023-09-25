import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CreateAccount() {


  const [timesPressed, setTimesPressed] = useState(0);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [isSubmitting, setIsSubmitting] = useState(false);

  let textLog= '';
  const navigation = useNavigation();
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }


  const validateUserName = () => {
    if (!userName.trim()) {
      setUserNameError('Username is required');
    } else {
      setUserNameError('');
    }
  };
  
  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmedPassword = () => {
    if (password === confirmedPassword) {
        setPasswordConfirmationError("");     
    } else {
        setPasswordConfirmationError("Passwords do not match");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /[a-z0-9.]+@[a-z]+\.[a-z]{2,3}/ig;
    return emailRegex.test(email);
  };

  const handleNext = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }
    setEmailError('');
    navigation.navigate('CreateProfile', {
        userName: userName,
        email:email,
        password: password,
      });
  
    };

  return (
      <View style={styles.container}>
        <Text style={styles.username}>Username:</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
            setUserName(userName)
            validateUserName()
        }}
          placeholder={'enter your username here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        {userNameError ? (
        <Text style={styles.error}>{userNameError}</Text>
        ) : null}
        <Text style={styles.username}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={(password) => {
            setPassword(password)
            validatePassword()
        }}
          placeholder={'enter your password here'}
          placeholderTextColor='#50515e'
          secureTextEntry={true}
          style={styles.input}
        />
        {passwordError ? (
        <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <Text style={styles.username}>Confirm password:</Text>
        <TextInput
          value={confirmedPassword}
          onChangeText={(confirmedPassword) => {
            setConfirmedPassword(confirmedPassword)
        }}      
          placeholder={'enter your password here'}
          placeholderTextColor='#50515e'
          style={styles.input}
          secureTextEntry={true}
        />
        {passwordConfirmationError ? (
                <Text style={styles.error}>{passwordConfirmationError}</Text>
                ) : null}
        <Text style={styles.username}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={(email) => {
            validateConfirmedPassword()
            setEmail(email)
            validateEmail()
        }}
          placeholder={'enter your email here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
              handleNext() 
     
            }} 
            disabled = {isSubmitting}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#D2E6FF' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.pressed}>{pressed ? 'Creating account ...' : 'Next'}</Text>
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
username: {
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
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
    marginBottom: 15,
},
error: {
    color: 'magenta',
    marginBottom: 10,
},
});

export default CreateAccount;

