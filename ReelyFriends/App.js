import { StyleSheet } from 'react-native';
import LogIn from './src/screens/LogIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './src/screens/Homepage';

export default function App() {

  const [user, setUser] = useState (null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  },[])

  const Stack = createNativeStackNavigator();
  const InsideStack = createNativeStackNavigator();

  function InsideLayout () {
    <InsideStack.Navigator>
      <InsideStack.Screen name="InsideHomepage" component={Homepage} />
    </InsideStack.Navigator>
  
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? 
          (<Stack.Screen name= "Inside" component={InsideLayout} />) 
          : (<Stack.Screen name = "Login" component={LogIn} />)}
        </Stack.Navigator>

      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##1e2030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
