import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions} from 'react-native';

function CreateProfile() {

  const [timesPressed, setTimesPressed] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  const handleCreateAccount = () => {
    // prevent duplicate submissions
    setIsSubmitting(true);
    setTimeout(() => {
        // reset isSubmitting to false after submit
    setIsSubmitting(false);
      }, 2000); // 2-second delay
    };

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}> Upload profile picture:</Text>
       
        <Pressable
            onPress={() => {
              setTimesPressed(current => current + 1)
              handleCreateAccount();       
            }} 
            disabled = {isSubmitting}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#D2E6FF' : '#f96501',
              },
              styles.wrapperCustom,
            ]}>
            {({pressed}) => (
              <Text style={styles.pressed}>{pressed ? 'Creating account ...' : 'Complete'}</Text>
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

export default CreateProfile;