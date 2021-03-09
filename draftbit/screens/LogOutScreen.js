import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import * as AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const LogOutScreen = props => {
  const { theme } = props;

  const logOut = async () => {
    await AsyncStorage.removeItem('auth');
    props.navigation.navigate('LoginWithEmailScreen');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_5i}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewzK}
        behavior="position"
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.Viewgr}>
          <Text
            style={StyleSheet.flatten([
              styles.TextVK,
              theme.typography.headline2,
              { color: theme.colors.strong },
            ])}
          >
            Log out
          </Text>

          <Text
            style={StyleSheet.flatten([
              styles.Textun,
              theme.typography.subtitle1,
              { color: theme.colors.medium },
            ])}
          >
            Are you sure?
          </Text>

          <View
            style={styles.ViewaR}
            pointerEvents={[{ label: '', value: '' }]}
            clickable=""
          >
            <Button
              onPress={logOut}
              style={StyleSheet.flatten([
                styles.ButtonHV,
                { borderRadius: theme.borderRadius.global },
              ])}
              type="solid"
            >
              Log out
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonHV: {
    height: 54,
    marginTop: 12,
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  KeyboardAvoidingViewzK: {
    justifyContent: 'center',
    flexGrow: 1,
    maxWidth: 600,
    width: '100%',
  },
  ScreenContainer_5i: {
    alignItems: 'center',
  },
  TextVK: {
    marginBottom: 24,
    textAlign: 'center',
  },
  Viewgr: {
    paddingLeft: 32,
    paddingRight: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textun: {
    textAlign: 'center',
  },
  ViewaR: {
    paddingLeft: 32,
    paddingRight: 32,
    width: '100%',
    marginTop: 40,
    marginBottom: 60,
  },
});

export default withTheme(LogOutScreen);
