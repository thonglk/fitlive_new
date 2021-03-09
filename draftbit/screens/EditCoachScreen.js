import React from 'react';
import {
  Button,
  Container,
  ScreenContainer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const EditCoachScreen = props => {
  const [email, setEmail] = React.useState(undefined);
  const [password, setPassword] = React.useState(undefined);
  const [fullName, setFullName] = React.useState(undefined);
  const [location, setLocation] = React.useState(undefined);
  const [role, setRole] = React.useState(undefined);
  const [phone, setPhone] = React.useState(undefined);
  const [locationAssign, setLocationAssign] = React.useState(undefined);
  const [per_locCre, setPer_locCre] = React.useState(undefined);
  const [per_colCre, setPer_colCre] = React.useState(undefined);
  const [per_cliCre, setPer_cliCre] = React.useState(undefined);
  const [
    permission_client_viewCompany,
    setPermission_client_viewCompany,
  ] = React.useState(undefined);
  const [per_sesCre, setPer_sesCre] = React.useState(undefined);
  const [per_sesCf, setPer_sesCf] = React.useState(undefined);
  const [
    permission_session_confirmLoc,
    setPermission_session_confirmLoc,
  ] = React.useState(undefined);
  const [
    permission_session_viewCompany,
    setPermission_session_viewCompany,
  ] = React.useState(undefined);
  const { theme } = props;

  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  });
  const updateCoach = async () => {
    const url = `https://fitlive.glitch.me/addCoach`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      fullName,
      phone,
      email,
      password,
      role,
      locationAssign,
      permission_location_create: per_locCre,
      permission_colleage_create: per_colCre,
      permission_client_create: per_cliCre,
      permission_session_create: per_sesCre,
      permission_session_confirm: per_sesCf,
      permission_session_confirmLoc,
      permission_session_viewCompany,
      permission_client_viewCompany,
      coachId: props.route.params['coachId'],
      userId: props.route.params['userId'],
      updatedAt: new Date(),
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
      props.navigation.navigate('ListofColleagesScreen', {
        userId: props.route.params['userId'],
      });
    } catch (error) {
      alert(error);
    }
  };

  const fetchData = async () => {
    const url = `https://fitlive.glitch.me/coachDetail?coachId=${props.route.params['coachId']}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const res = await fetch(url, {
      method: 'GET',
      headers,
    });
    const result = await res.json();
    if (result.error) throw new Error(result.error);
    setFullName(result.fullName);
    setEmail(result.email);
    setPassword(result.password);
    setPhone(result.phone);
    setRole(result.role);
    setLocationAssign(result.locationAssign);
    setPer_locCre(result.permission_location_create || false);
    setPer_colCre(result.permission_colleage_create || false);
    setPer_cliCre(result.permission_client_create || false);
    setPer_sesCre(result.permission_session_create || false);
    setPer_sesCf(result.permission_session_confirm || false);
    setPermission_session_viewCompany(
      result.permission_session_viewCompany || false
    );
    setPermission_session_confirmLoc(
      result.permission_session_confirmLoc || false
    );
    setPermission_client_viewCompany(result.permission_client_viewCompany);
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerFO}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewcJ}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollViewav}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewhZ}
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
                  styles.Textsc,
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
                style={styles.ViewaO}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_0I,
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
            style={styles.ViewoZ}
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
                  styles.Text_7T,
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
                style={styles.Viewcw}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputyg,
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
            style={styles.ViewvC}
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
                  styles.Text_9s,
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
                style={styles.View_3N}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputdJ,
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
            style={styles.ViewBR}
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
                  styles.TextWO,
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
                style={styles.Vieway}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputtE,
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
                  placeholder=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewU6}
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
                  styles.Textil,
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
                style={styles.ViewJc}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputP7,
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
            style={styles.Views3}
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
                  styles.TextTq,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@LocationAssign@]
              </Text>

              <View
                style={styles.ViewI4}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <Fetch
                  url={`https://fitlive.glitch.me/locationList?userId=${encodeURIComponent(
                    props.route.params['userId']
                  )}`}
                  headers={{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  }}
                >
                  {({ loading, error, data, refetch }) => {
                    if (loading) {
                      return null;
                    }

                    if (error) {
                      return null;
                    }

                    if (!data) {
                      return null;
                    }

                    return (
                      <Container useThemeGutterPadding={true}>
                        <TextInput
                          style={StyleSheet.flatten([
                            styles.TextInputkn,
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
                          onChangeText={locationAssign =>
                            setLocationAssign(locationAssign)
                          }
                          value={locationAssign}
                          placeholderTextColor={theme.colors.medium}
                          placeholder=""
                          clearButtonMode="while-editing"
                          enablesReturnKeyAutomatically={true}
                          spellcheck={true}
                          returnKeyType="next"
                          textContentType="none"
                          defaultValue=""
                        />
                      </Container>
                    );
                  }}
                </Fetch>
              </View>
            </View>
          </View>

          <View
            style={styles.ViewCE}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline4,
                { color: theme.colors.strong },
              ])}
            >
              [@Permission@]
            </Text>

            <View
              style={styles.View_00}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@AddLocation@]
              </Text>
              <Switch
                value={per_locCre}
                onValueChange={per_locCre => setPer_locCre(per_locCre)}
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.ViewKA}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@AddColleage@]
              </Text>
              <Switch
                value={per_colCre}
                onValueChange={per_colCre => setPer_colCre(per_colCre)}
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.ViewKW}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@AddClient@]
              </Text>
              <Switch
                value={per_cliCre}
                onValueChange={per_cliCre => setPer_cliCre(per_cliCre)}
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.Viewfw}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@ViewAllCompanyClient@]
              </Text>
              <Switch
                value={permission_client_viewCompany}
                onValueChange={permission_client_viewCompany =>
                  setPermission_client_viewCompany(
                    permission_client_viewCompany
                  )
                }
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.Viewlj}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@AddSession@]
              </Text>
              <Switch
                value={per_sesCre}
                onValueChange={per_sesCre => setPer_sesCre(per_sesCre)}
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.ViewF9}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@ConfirmSession@]
              </Text>
              <Switch
                value={per_sesCf}
                onValueChange={per_sesCf => setPer_sesCf(per_sesCf)}
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.ViewCj}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@ConfirmSessionOfLocation@]
              </Text>
              <Switch
                value={permission_session_confirmLoc}
                onValueChange={permission_session_confirmLoc =>
                  setPermission_session_confirmLoc(
                    permission_session_confirmLoc
                  )
                }
                color={theme.colors.primary}
              />
            </View>

            <View
              style={styles.ViewaB}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  theme.typography.headline6,
                  { color: theme.colors.strong },
                ])}
              >
                [@ViewAllCompanySession@]
              </Text>
              <Switch
                value={permission_session_viewCompany}
                onValueChange={permission_session_viewCompany =>
                  setPermission_session_viewCompany(
                    permission_session_viewCompany
                  )
                }
                color={theme.colors.primary}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.View_8l}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={updateCoach}
            style={StyleSheet.flatten([
              styles.ButtonXI,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            [@Save@]
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textsc: {
    textTransform: 'uppercase',
  },
  TextInput_0I: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewhZ: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Text_7T: {
    textTransform: 'uppercase',
  },
  TextInputyg: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Text_9s: {
    textTransform: 'uppercase',
  },
  TextInputdJ: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextWO: {
    textTransform: 'uppercase',
  },
  TextInputtE: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Textil: {
    textTransform: 'uppercase',
  },
  TextInputP7: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ScrollViewav: {
    flexGrow: 1,
  },
  ButtonXI: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KeyboardAvoidingViewcJ: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerFO: {
    alignItems: 'center',
  },
  TextTq: {
    textTransform: 'uppercase',
  },
  TextInputkn: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  ViewaO: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewcw: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewoZ: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_3N: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Vieway: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewJc: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  View_8l: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  View_00: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewI4: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewvC: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewKA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewBR: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewKW: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewU6: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewfw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  Viewlj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  Views3: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewF9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewCE: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 20,
  },
  ViewCj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewaB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default withTheme(EditCoachScreen);