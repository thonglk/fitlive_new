import React from 'react';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AddCoachScreen = props => {
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
  const [fullName, setFullName] = React.useState(undefined);
  const [location, setLocation] = React.useState(undefined);
  const [role, setRole] = React.useState(undefined);
  const [phone, setPhone] = React.useState(undefined);
  const [coachId, setCoachId] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  const addCoach = async () => {
    const url = `https://fitlive.glitch.me/addCoach`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      coachId,
      fullName,
      phone,
      email,
      password,
      role,
      userId: props.route.params['userId'],
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
      props.navigation.navigate('EditCoachScreen', {
        userId: props.route.params['userId'],
        coachId: result.coachId,
      });
    } catch (error) {
      alert(error);
    }
  };

  const onPressoPDEZVHH = item => {
    const data = item;
    navigation.navigate('LoginWithEmailScreen', {});
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerVH}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewBl}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollView_9q}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewMr}
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
                  styles.TextKM,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                Email
              </Text>

              <View
                style={styles.ViewKN}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputWY,
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
            style={styles.View_5n}
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
                  styles.TextI3,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@Password@]
              </Text>

              <View
                style={styles.ViewCZ}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputuW,
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
          </View>

          <View
            style={styles.Viewaw}
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
                  styles.TextEb,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@Name@]
              </Text>

              <View
                style={styles.ViewuP}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputpX,
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
            style={styles.Viewpu}
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
                  styles.Text_2b,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@Role@]
              </Text>

              <View
                style={styles.ViewuR}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_2i,
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
                  onChangeText={role => setRole(role)}
                  value={role}
                  placeholderTextColor={theme.colors.medium}
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="name"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.VieweU}
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
                  styles.TextL2,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@Phone@]
              </Text>

              <View
                style={styles.ViewGx}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputyJ,
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
                  textContentType="telephonenumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewBg}
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
                  styles.TextxO,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@CoachId@] ([@Optional@])
              </Text>

              <View
                style={styles.ViewYG}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputOJ,
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
                  onChangeText={coachId => setCoachId(coachId)}
                  value={coachId}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="none"
                  defaultValue=""
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.View_9f}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={addCoach}
            style={StyleSheet.flatten([
              styles.Buttonfb,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            [@Create@]
          </Button>
          <Touchable onPress={onPressoPDEZVHH} />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextL2: {
    textTransform: 'uppercase',
  },
  TextInputyJ: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextKM: {
    textTransform: 'uppercase',
  },
  TextInputWY: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewMr: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  TextI3: {
    textTransform: 'uppercase',
  },
  TextInputuW: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ScrollView_9q: {
    flexGrow: 1,
  },
  KeyboardAvoidingViewBl: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
  },
  Buttonfb: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenContainerVH: {
    alignItems: 'center',
  },
  Text_2b: {
    textTransform: 'uppercase',
  },
  TextInput_2i: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextEb: {
    textTransform: 'uppercase',
  },
  TextInputpX: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextxO: {
    textTransform: 'uppercase',
  },
  TextInputOJ: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewGx: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewKN: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewCZ: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  View_5n: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_9f: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  ViewuR: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewuP: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewYG: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewaw: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewpu: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  VieweU: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewBg: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(AddCoachScreen);