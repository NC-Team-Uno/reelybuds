import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions} from 'react-native';

function CreateAccount() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [email, setEmail] = useState('');
  const [timesPressed, setTimesPressed] = useState(0);
  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }


  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={(name) => setName(name)}
          placeholder={'enter your name here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{name}</Text>
        <Text style={styles.username}>Username:</Text>
        <TextInput
          value={name}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={'enter your username here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{userName}</Text>
        <Text style={styles.password}>Password:</Text>
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'enter your password here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{password}</Text>
        <Text style={styles.password}>Confirm password:</Text>
        <TextInput
          value={confirmedPassword}
          onChangeText={(confirmedPassword) => setConfirmedPassword(confirmedPassword)}
          placeholder={'enter your password here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{confirmedPassword}</Text>
        <Text style={styles.password}>Email:</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={'enter your email here'}
          style={styles.input}
        />
        <Text style={{color: 'white'}}>{email}</Text>
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1);
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'orange',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.text}>{pressed ? 'Creating account ...' : 'Submit'}</Text>
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
    backgroundColor: '#1e2030',
    justifyContent: 'center',  
  },
  input: {
    alignContent: 'center',
    borderColor: 'orange',
    color: 'grey',
    fontSize: 24
  },
  text: {
    borderRadius: 20,
    alignContent: 'center',
    color: 'black',
    fontSize: 24
  },
  username: {
    alignContent: 'center',
    color: 'white',
    fontSize: 24
  },
  password: {
    alignContent: 'center',
    color: 'white',
    fontSize: 24
  },
  create: {
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    color: 'white',
    fontSize: 20
  },
  wrapperCustom: {
    borderColor: 'purple',
    fontSize: 18
  }
});

export default CreateAccount;