import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, Pressable, Dimensions, Alert, PermissionsAndroid, TouchableOpacity} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

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
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      }, 2000); // 2-second delay
    };

  const [singleFile, setSingleFile] = useState(null);

  const checkPermissions = async () => {
      try {
        const result = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );
  
        if (!result) {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title:
                'You need to give storage permission to download and save the file',
              message: 'App needs access to your camera ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            }
          );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
            return true;
        } else {
            Alert.alert('Error', I18n.t('PERMISSION_ACCESS_FILE'));
  
            console.log('Camera permission denied');
            return false;
          }
        } else {
          return true;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    };
  
    const uploadImage = async () => {
      const BASE_URL = 'xxxx';
  
      // Check if any file is selected or not
      if (singleFile != null) {
        // If file selected then create FormData
        const data = new FormData();
  
        data.append('file_attachment', {
          uri: singleFile.uri,
          name: singleFile.name,
          type: singleFile.mimeType,
        });
  
        // return
        try {
          let res = await fetch(BASE_URL + 'tutorial/upload.php', {
            method: 'post',
            body: data,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            timeout: 5000,
          });
  
          let result = await res.json();
          console.log('result', result);
          if (result.status == 1) {
            Alert.alert('Info', result.msg);
          }
        } catch (error) {
          // Error retrieving data
          // Alert.alert('Error', error.message);
          console.log('error upload', error);
        }
      } else {
        // If no file selected the show alert
        Alert.alert('Please Select File first');
      }
    };
  
    async function selectFile() {
      try {
        const result = await checkPermissions();
  
        if (result) {
          const result = await DocumentPicker.getDocumentAsync({
            copyToCacheDirectory: false,
            type: 'image/*',
          });
  
          if (result.type === 'success') {
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(result));
            // Setting the state to show single file attributes
            setSingleFile(result);
          }
        }
      } catch (err) {
        setSingleFile(null);
        console.warn(err);
        return false;
      }
    }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.username}> Upload profile picture:</Text>
        {singleFile != null ? (
        <Text style={styles.textStyle}>
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text style={styles.buttonTextStyle}>Upload File</Text>
      </TouchableOpacity>
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
              <Text style={styles.pressed}>{pressed ? 'Creating account ...' : 'Complete profile'}</Text>
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
buttonStyle: {
  backgroundColor: '#307ecc',
  borderWidth: 0,
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
});

export default CreateProfile;