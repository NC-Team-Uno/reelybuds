import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authorised from "./src/screens/Authorised";
import Unauthorised from "./src/screens/Unauthorised";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { UserProvider } from "./src/contexts/User";

const Stack = createNativeStackNavigator();
const globalScreenOtions = {
  headerShown: false,
};
export default function App() {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsUser(true);
      } else {
        setIsUser(false);
      }
    });

    return unsubscribe;
  }, [isUser]);

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOtions}>
          {!isUser ? (
            <Stack.Screen name="Unauthorised" component={Unauthorised} />
          ) : (
            <Stack.Screen name="Authorised" component={Authorised} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
