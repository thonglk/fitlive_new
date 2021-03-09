import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import AsyncStorage from '@react-native-async-storage/async-storage';
                     import {lang} from '../config/config';

import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ChangePasswordScreen = props => {
  const [newpassword, setNewpassword] = React.useState(undefined);
  const [repassword, setRepassword] = React.useState(undefined);
  const { theme } = props;

  const changePass = async () => {
    const url = `https://server.fitlive.fit/changePassword`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      password: newpassword,
      userId: props.route.params['userId'],
    });

    try {
      if (newpassword != repassword)
        throw new Error("Confirm password aren't same");
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await res.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
      await AsyncStorage.setItem(
        'auth',
        JSON.stringify({ email: result.email, password: newpassword })
      );
      props.navigation.navigate('HomepageAdminScreen', {
        userId: props.route.params['userId'],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerJO}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewRB}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
        onChangeText={repassword => setRepassword(repassword)}
        value={repassword}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollView_22}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewMy}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.Textiy,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("Password")}
              </Text>

              <View
                style={styles.Viewq6}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputHg,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="default"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={newpassword => setNewpassword(newpassword)}
                  value={newpassword}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="password"
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewPe}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.Text_84,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("RepeatPassword")}
              </Text>

              <View
                style={styles.ViewvV}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputMy,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="default"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={repassword => setRepassword(repassword)}
                  value={repassword}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="done"
                  textContentType="password"
                  defaultValue=""
                  secureTextEntry={true}
                />
              </View>
            </View>
          </View>

          <View
            style={styles.Viewn7}
            hitSlop={{}}
            importantForAccessibility="auto"
            pointerEvents="auto"
            accessible={true}
          >
            <Button
              onPress={changePass}
              style={StyleSheet.flatten([
                styles.ButtonKN,
                { borderRadius: theme.borderRadius.global },
              ])}
              type="solid"
              value={newpassword}
              onChangeText={newpassword => setNewpassword(newpassword)}
            >
              {lang("Set")}
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textiy: {
    textTransform: 'uppercase',
  },
  TextInputHg: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewMy: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Text_84: {
    textTransform: 'uppercase',
  },
  TextInputMy: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ScrollView_22: {
    flexGrow: 1,
  },
  KeyboardAvoidingViewRB: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
  },
  ButtonKN: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenContainerJO: {
    alignItems: 'center',
  },
  Viewq6: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewvV: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewPe: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewn7: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
});

export default withTheme(ChangePasswordScreen);