import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions} from 'react-native';
import CreateAccount from './CreateAccount';

function LogIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [timesPressed, setTimesPressed] = useState(0);

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
  const handleLogin = () => {
    
    validateUserName();
    validatePassword();

  
    
    if (!userNameError && !passwordError && !passwordConfirmationError) {
      if (password === confirmPassword) {
   
        console.log('Logging in...');
        // usecontext on user to login
      } else {
        // display message
        console.log('Passwords do not match');
      }
    } else {

      console.log('Incorrect username or password');
    }
  };


  const handleCreateAccount = () => {
    // use 'userName' and 'password' to create a new account (post to DB)
  };


  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}>Username:</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
              validateUserName(userName)
              setUserName(userName)}}
          placeholder={'enter your username here'}
          placeholderTextColor='#50515e'
          style={styles.input}
          autoFocus
        />
        {userNameError ? <Text style={styles.error}>{userNameError}</Text> : null}
        <Text style={styles.username}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={(password) => {
              validatePassword(password)
              setPassword(password)}
          }
          placeholder={'enter your password here'}
          placeholderTextColor='#50515e'
          style={styles.input}
          secureTextEntry={true}
          autoFocus
        />
        {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        <Pressable
            onPress={() => {             
                      setTimesPressed(current => current + 1);
                      handleLogin()
                    }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#D2E6FF' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.pressed}>{pressed ? 'Logging in ...' : 'Log in'}</Text>
            )}
        </Pressable>
        <Text style={styles.create}> Don't have an account? Click below to create one. </Text>
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
              <CreateAccount />
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#D2E6FF' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.pressed}>{pressed ? 'Creating account ...' : 'Create account'}</Text>
            )}
        </Pressable>  
        <Text style={styles.create}> Forgot your password? Click HERE to retrieve it. </Text>
      </View>
    </SafeAreaView>
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

  },
  wrapperCustom: {
    borderColor: 'purple',
    borderRadius: 5,
    fontSize: 16,
    marginTop: 15,
  },
  pressed: {
    borderRadius: 10,
    textAlign: 'center',
    color: '#DDDBCB',
    fontSize: 22,
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

export default LogIn;