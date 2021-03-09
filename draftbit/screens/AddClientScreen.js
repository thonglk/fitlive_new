import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AddClientScreen = props => {
  const [firstName, setFirstName] = React.useState(undefined);
  const [lastName, setLastName] = React.useState(undefined);
  const [phoneNumber, setPhoneNumber] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [clientCode, setClientCode] = React.useState(undefined);
  const [loader, setLoader] = React.useState(undefined);
  const { theme } = props;

  const addClient = async () => {
    const url = `https://fitlive.glitch.me/addClient`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      lastName,
      firstName,
      phone: phoneNumber,
      email,
      clientCode,
      coachId: props.route.params['userId'],
      userId: props.route.params['userId'],
    });
    if (loader) return console.log(loader);
    setLoader('Loading...');
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      setLoader(undefined);

      alert(result.msg);
      props.navigation.navigate('ClientDetailScreen', {
        userId: props.route.params['userId'],
        clientId: result.clientId,
      });
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerMX}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewt7}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollView_7b}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewLW}
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
                  styles.TextM2,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@FirstName@]
              </Text>

              <View
                style={styles.Viewwk}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputnV,
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
                  onChangeText={firstName => setFirstName(firstName)}
                  value={firstName}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewTu}
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
                  styles.TextrD,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@LastName@]
              </Text>

              <View
                style={styles.ViewzI}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputWP,
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
                  onChangeText={lastName => setLastName(lastName)}
                  value={lastName}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewSp}
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
                  styles.TextiL,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@ClientPhone@]
              </Text>

              <View
                style={styles.View_8r}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_0j,
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
                  textContentType="creditcardnumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.View_8p}
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
                  styles.TextEc,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@ClientEmail@]
              </Text>

              <View
                style={styles.Viewtn}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputXv,
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
                  textContentType="creditcardnumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.View_3D}
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
                  styles.TextVX,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@ClientCode@]
              </Text>

              <View
                style={styles.ViewQt}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputiU,
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
                  onChangeText={clientCode => setClientCode(clientCode)}
                  value={clientCode}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.Viewt9}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={addClient}
            style={StyleSheet.flatten([
              styles.Button_2G,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            {loader ? '[@Loading@]' : '[@Add@]'}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputbx}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={loader}
        onChangeText={loader => setLoader(loader)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextM2: {
    textTransform: 'uppercase',
  },
  TextInputnV: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewLW: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ScrollView_7b: {
    flexGrow: 1,
  },
  Button_2G: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KeyboardAvoidingViewt7: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerMX: {
    alignItems: 'center',
  },
  TextrD: {
    textTransform: 'uppercase',
  },
  TextInputWP: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextiL: {
    textTransform: 'uppercase',
  },
  TextInput_0j: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextEc: {
    textTransform: 'uppercase',
  },
  TextInputXv: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextVX: {
    textTransform: 'uppercase',
  },
  TextInputiU: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Viewwk: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewt9: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  ViewzI: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewTu: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_8r: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewtn: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewQt: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  TextInputbx: {
    opacity: 0,
  },
  ViewSp: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_8p: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_3D: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(AddClientScreen);