import React from 'react';
                     import {lang} from '../config/config';

import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ClientEditScreen = props => {
  const [firstName, setFirstName] = React.useState(undefined);
  const [lastName, setLastName] = React.useState(undefined);
  const [phone, setPhone] = React.useState(undefined);
  const [email, setEmail] = React.useState(undefined);
  const [clientCode, setClientCode] = React.useState(undefined);
  const [loader, setLoader] = React.useState(undefined);
  const { theme } = props;

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  });
  const deleteClient = async () => {
    const url = `https://server.fitlive.fit/addClient`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      isDelete: true,
      deletedAt: new Date(),

      lastName,
      firstName,
      phone,
      email,
      clientCode,
      clientId: props.route.params['clientId'],
      userId: props.route.params['userId'],
      bussinessId: props.route.params['bussinessId'],
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
      props.navigation.navigate('ListofClientScreen', {
        userId: props.route.params['userId'],
      });
    } catch (error) {
      alert(error);
    }
  };

  const updateClient = async () => {
    const url = `https://server.fitlive.fit/addClient`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      lastName,
      firstName,
      phone,
      email,
      clientCode,
      clientId: props.route.params['clientId'],
      userId: props.route.params['userId'],
      bussinessId: props.route.params['bussinessId'],
      updatedAt: new Date(),
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
      props.navigation.navigate('ClientDetailScreen', {
        userId: props.route.params['userId'],
        clientId: result.clientId,
      });
    } catch (error) {
      alert(error);
    }
  };

  const fetchData = async () => {
    setLoader('Loading...');
    const url = `https://server.fitlive.fit/clientDetail?clientId=${props.route.params['clientId']}&userId=${props.route.params['userId']}&businessId=${props.route.params['businessId']}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers,
      });
      const result = await res.json();
      setLoader(undefined);

      if (result.error) throw new Error(result.error);
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setEmail(result.email);
      setPhone(result.phone);
      if (result.clientCode) setClientCode(result.clientCode);
    } catch (e) {
      setLoader(undefined);

      alert(e);
    }
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerW8}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewnm}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollViewdR}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewTx}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text style={{ color: theme.colors.strong }}>{loader}</Text>
          </View>

          <View
            style={styles.Viewwb}
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
                  styles.Text_1j,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("FirstName")}
              </Text>

              <View
                style={styles.ViewKB}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputOW,
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
            style={styles.ViewiZ}
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
                  styles.TextoB,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("LastName")}
              </Text>

              <View
                style={styles.ViewZ7}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_6g,
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
            style={styles.View_5q}
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
                  styles.Textde,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("ClientPhone")}
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
                    styles.TextInput_9m,
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
                  onChangeText={phone => setPhone(phone)}
                  value={phone}
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
            style={styles.View_8o}
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
                  styles.TextgP,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("ClientEmail")}
              </Text>

              <View
                style={styles.ViewtZ}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputKh,
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
            style={styles.ViewkL}
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
                  styles.Textiw,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                {lang("ClientCode")}
              </Text>

              <View
                style={styles.View_4d}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputm2,
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
          style={styles.ViewHm}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={updateClient}
            style={StyleSheet.flatten([
              styles.ButtonOE,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            Save
          </Button>

          <Button
            onPress={deleteClient}
            style={StyleSheet.flatten([
              styles.ButtonJG,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="outline"
            color={theme.colors.error}
          >
            {lang("Delete")}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputXy}
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
  Text_1j: {
    textTransform: 'uppercase',
  },
  TextInputOW: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextoB: {
    textTransform: 'uppercase',
  },
  TextInput_6g: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Textde: {
    textTransform: 'uppercase',
  },
  TextInput_9m: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextgP: {
    textTransform: 'uppercase',
  },
  TextInputKh: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ScrollViewdR: {
    flexGrow: 1,
  },
  ButtonOE: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 5,
  },
  KeyboardAvoidingViewnm: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerW8: {
    alignItems: 'center',
  },
  Textiw: {
    textTransform: 'uppercase',
  },
  TextInputm2: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewTx: {
    alignItems: 'center',
  },
  ViewKB: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewwb: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewZ7: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  View_4i: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewtZ: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewHm: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  View_4d: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ButtonJG: {
    marginTop: 5,
    marginBottom: 5,
  },
  TextInputXy: {
    opacity: 0,
  },
  ViewiZ: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_5q: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_8o: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewkL: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(ClientEditScreen);