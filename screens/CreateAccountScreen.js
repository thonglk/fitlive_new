import React from 'react';
import {
  Button,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
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

const CreateAccountScreen = props => {
  const [businessName, setBusinessName] = React.useState(undefined);
  const [businesName, setBusinesName] = React.useState(undefined);
  const [location, setLocation] = React.useState(undefined);
  const [fullName, setFullName] = React.useState(undefined);
  const [phoneNumber, setPhoneNumber] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  const createAccountButton = async () => {
    const url = `https://server.fitlive.fit/createAccount`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      businessName: businessName,
      location: location,
      fullName: fullName,
      phone: phoneNumber,
      email: email,
      password: password,
      role: 'owner',
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await res.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
      await AsyncStorage.setItem('auth', JSON.stringify({ email, password }));
      props.navigation.navigate('HomepageAdminScreen', {
        userId: result.userId,
      });
    } catch (error) {
      alert(error);
    }
  };

  const onPressa7TJXU7r = item => {
    const data = item;
    navigation.navigate('LoginWithEmailScreen', {});
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerVp}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_1E}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollViewDA}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.Viewai}
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
                  styles.TextCm,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("NameOfYourBusiness")}
              </Text>

              <View
                style={styles.ViewSU}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputod,
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
                  onChangeText={businessName => setBusinessName(businessName)}
                  value={businessName}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="organizationname"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewA7}
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
                  styles.TextYc,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
                onChangeText={businesName => setBusinesName(businesName)}
                value={businesName}
              >
                {lang("BussinessAddress")}
              </Text>

              <View
                style={styles.ViewHo}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputbh,
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
                  onChangeText={location => setLocation(location)}
                  value={location}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="fullstreetaddress"
                />
              </View>
            </View>
          </View>
          <Divider
            style={styles.DividerOR}
            color={theme.colors.divider}
            height={1}
          />
          <View
            style={styles.View_5U}
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
                  styles.Textix,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("YourName")}
              </Text>

              <View
                style={styles.ViewKh}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputuc,
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
                  onChangeText={fullName => setFullName(fullName)}
                  value={fullName}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="name"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.Viewtw}
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
                  styles.TextxK,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("YourPhone")}
              </Text>

              <View
                style={styles.ViewAe}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_67,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="phone-pad"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                  value={phoneNumber}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="telephonenumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewzA}
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
                  styles.TextPt,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("YourEmail")}
              </Text>

              <View
                style={styles.ViewKR}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputsG,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={email => setEmail(email)}
                  value={email}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="emailaddress"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewlI}
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
                  styles.TextBk,
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
                style={styles.View_4i}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputiq,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="visible-password"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={password => setPassword(password)}
                  value={password}
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
            <Divider
              style={styles.DividerdL}
              color={theme.colors.divider}
              height={1}
            />
          </View>
        </ScrollView>

        <View
          style={styles.Viewie}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={createAccountButton}
            style={StyleSheet.flatten([
              styles.ButtonXK,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            {lang("Create")}
          </Button>
          <Touchable onPress={onPressa7TJXU7r} />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextCm: {
    textTransform: 'uppercase',
  },
  TextInputod: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Viewai: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  TextxK: {
    textTransform: 'uppercase',
  },
  TextInput_67: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextPt: {
    textTransform: 'uppercase',
  },
  TextInputsG: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ScrollViewDA: {
    flexGrow: 1,
  },
  KeyboardAvoidingView_1E: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ButtonXK: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenContainerVp: {
    alignItems: 'center',
  },
  Textix: {
    textTransform: 'uppercase',
  },
  TextInputuc: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextBk: {
    textTransform: 'uppercase',
  },
  TextInputiq: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextYc: {
    textTransform: 'uppercase',
  },
  TextInputbh: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewSU: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewAe: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewKR: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewie: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  ViewKh: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  View_4i: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  DividerdL: {
    height: 1,
  },
  ViewHo: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewA7: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  DividerOR: {
    height: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  View_5U: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewtw: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewzA: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewlI: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(CreateAccountScreen);