import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenContainer, withTheme } from '@draftbit/ui';

import * as Updates from 'expo-updates';





export default function App(props) {
  const [update, setUpdate] = useState('');
    const [fetchUpdateAsync, setFetchUpdateAsync] = useState('');
  const [reloadAsync, setReloadAsync] = useState('');

  const [notification, setNotification] = useState(false);


  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      console.log('focus');
      checkUpdate();
    });
    return unsubscribe;
  }, []);

const checkUpdate = async () =>{
  try {
  const checkForUpdateAsync = await Updates.checkForUpdateAsync();
  console.log('checkForUpdateAsync',checkForUpdateAsync)
  if (checkForUpdateAsync.isAvailable) {
      setUpdate("New Update Available. Updating...")

    const fetchUpdateAsync = await Updates.fetchUpdateAsync();
    setFetchUpdateAsync(JSON.stringify(fetchUpdateAsync))

    const reloadAsync = await Updates.reloadAsync();
    setReloadAsync(JSON.stringify(reloadAsync))

  } else  setUpdate("Lastest Version Already!")

} catch (e) {
  // handle or log error
  setUpdate(JSON.stringify(e))
}
}

  return (
     <ScreenContainer
      hasSafeArea={true}
      scrollable={true}
    >
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text>Checking...: {update}</Text>
      <Text>{fetchUpdateAsync ? "Downloading new update...":""}</Text>

    
    </View>
    </ScreenContainer>

  );
}
