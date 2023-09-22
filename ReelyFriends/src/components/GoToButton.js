import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateWatchParty from '../screens/CreateWatchPartyScreen';

function GoToButton() {
  const navigation = useNavigation();

  return (
    <Button
      title={`Create Watch Group`}
      onPress={() => navigation.navigate(CreateWatchParty)}
    />
  );
}

export default GoToButton;