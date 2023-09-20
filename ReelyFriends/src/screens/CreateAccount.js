import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions} from 'react-native';

function CreateAccount() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [timesPressed, setTimesPressed] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

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

    // might want to add email verification (existing email) 
  };

  const handleCreateAccount = () => {
    // prevent duplicate submissions
    setIsSubmitting(true);
    if (!validateEmail(email)) {
        setEmailError('Invalid email address');
        return; // do nothing
      }
    setEmailError('');
    setTimeout(() => {
        // reset isSubmitting to false after submit
    setIsSubmitting(false);
      }, 2000); // 2-second delay
    };

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}> Name:</Text>
        <TextInput
          value={name}
          onChangeText={(name) => {
            setName(name)
            validateName()
        }}
          placeholder={'enter your name here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        {nameError ? (
        <Text style={styles.error}>{nameError}</Text>
        ) : null}
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
            console.log('password in the password input ->', password)
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
        }}
          placeholder={'enter your email here'}
          placeholderTextColor='#50515e'
          style={styles.input}
        />
        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
              handleCreateAccount()            
            }} 
            disabled = {isSubmitting}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#D2E6FF' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.pressed}>{pressed ? 'Creating account ...' : 'Submit'}</Text>
            )}
        </Pressable>   
      </View>
    </SafeAreaView>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
container: {
    flex: 1,
    width: deviceWidth * 0.75,
    alignItems: 'top',
    backgroundColor: '#1e2035',
    justifyContent: 'center',  
    borderRadius: 5,
    marginBottom: 30,
    marginStart: 10,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
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
    marginBottom: 5,
},
error: {
    color: 'magenta',
    marginBottom: 10,
},
});

export default CreateAccount;