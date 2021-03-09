import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const HomepageAdminScreen = props => {
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    //console.log
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('focus');
      styles.Viewmu = StyleSheet.flatten([styles.Viewmu, { display: 'none' }]);

      if (typeof checkUpdate !== 'undefined' && Platform.OS !== 'web')
        checkUpdate();

      if (typeof webHelper !== 'undefined') {
        showBanner();
        webHelper.initNoti();
      }
      loadUserData();
    });
    return unsubscribe;
  });

  const showBanner = async () => {
    if (webHelper.Device.osName === 'iOS' && Platform.OS === 'web')
      styles.Viewmu = StyleSheet.flatten([styles.Viewmu, { display: 'flex' }]);
  };

  const checkUpdate = async () => {
    try {
      const checkForUpdateAsync = await Updates.checkForUpdateAsync();
      console.log('checkForUpdateAsync', checkForUpdateAsync);
      if (checkForUpdateAsync.isAvailable)
        navigation.navigate('CheckUpdateScreen');
    } catch (e) {
      alert(e);

      // handle or log error
    }
  };

  const loadUserData = async () => {
    if (!props.route.params['userId']) return;
    try {
      const response = await fetch(
        `https://fitlive.glitch.me/user?userId=${encodeURIComponent(
          props.route.params['userId']
        )}`
      );

      const result = await response.json();
      if (result.error) throw new Error(result.error);
      if (!result.permission_session_viewCompany) {
        styles.Touchable_7D = Object.assign(styles.Touchable_7D, {
          display: 'none',
        });
      }
      if (!result.permission_colleage_create) {
        styles.TouchableMi = Object.assign(styles.Touchable_7D, {
          display: 'none',
        });
      }
      if (!result.permission_location_create) {
        styles.Touchableem = Object.assign(styles.Touchableem, {
          display: 'none',
        });
      }

      setUpdate(Date.now());
    } catch (error) {
      alert(error);
    }
  };

  const onPress4A7YwpKb = item => {
    const data = item;
    navigation.navigate('SelectaClientScreen', { userId: data['userId'] });
  };
  const onPressJGopYRla = item => {
    const data = item;
    navigation.navigate('MyCalendarScreen', {
      userId: data['userId'],
      role: data['role'],
    });
  };
  const onPressd3ojjO5T = async () => {
    await WebBrowser.openBrowserAsync(
      'https://apps.apple.com/vn/app/fitlive/id1550753414'
    );
  };
  const onPresshdNZMrPB = item => {
    const data = item;
    navigation.navigate('ListofSessionAdminScreen', { userId: data['userId'] });
  };
  const onPressIMapvTli = item => {
    const data = item;
    navigation.navigate('AddClientScreen', { userId: data['userId'] });
  };
  const onPress3ophw9EA = item => {
    const data = item;
    navigation.navigate('ListofClientScreen', { userId: data['userId'] });
  };
  const onPressLMkIikBY = item => {
    const data = item;
    navigation.navigate('LocationListScreen', { userId: data['userId'] });
  };
  const onPressa9L6ahKA = item => {
    const data = item;
    navigation.navigate('BusinessSettingScreen', { userId: data['userId'] });
  };
  const onPressuGN128Oc = item => {
    const data = item;
    navigation.navigate('SettingScreen', { userId: data['userId'] });
  };

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewJP}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View
          style={StyleSheet.flatten([
            styles.Viewmu,
            {
              borderColor: theme.colors.divider,
              borderRadius: theme.borderRadius.global,
              backgroundColor: theme.colors.background,
            },
          ])}
          pointerEvents="auto"
          hitSlop={{}}
          importantForAccessibility="auto"
          accessible={true}
        >
          <View
            style={styles.View_9u}
            pointerEvents="auto"
            importantForAccessibility="auto"
            hitSlop={{}}
            accessible={true}
          >
            <View
              style={styles.Viewyq}
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.ViewGa}
                accessible={true}
                hitSlop={{}}
                importantForAccessibility="auto"
                pointerEvents="auto"
              >
                <Icon
                  style={styles.IconEx}
                  size={34}
                  color={theme.colors.strong}
                  name="MaterialIcons/get-app"
                />
              </View>

              <View
                style={styles.ViewIy}
                pointerEvents="auto"
                hitSlop={{}}
                accessible={true}
                importantForAccessibility="auto"
              >
                <Text
                  style={StyleSheet.flatten([
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ])}
                  ellipsizeMode="tail"
                  textBreakStrategy="highQuality"
                  accessible={true}
                  allowFontScaling={true}
                >
                  {'[@TryMobileApp@]'}
                </Text>

                <Text
                  style={StyleSheet.flatten([
                    theme.typography.subtitle1,
                    { color: theme.colors.strong },
                  ])}
                  allowFontScaling={true}
                  accessible={true}
                  textBreakStrategy="highQuality"
                  ellipsizeMode="tail"
                >
                  {'[@BetterExperience@]'}
                </Text>
              </View>
            </View>
          </View>

          <Button
            onPress={onPressd3ojjO5T}
            style={StyleSheet.flatten([
              styles.Button_3L,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
            color={theme.colors.null}
            icon="FontAwesome/apple"
          >
            {'[@DownloadIosApp@]'}
          </Button>
        </View>
        <Fetch
          url={`https://fitlive.glitch.me/user?userId=${encodeURIComponent(
            props.route.params['userId']
          )}`}
          headers={{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            apiVersion: 'v1',
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
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <View
                  style={styles.ViewU0}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    style={styles.ViewbJ}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text
                      style={StyleSheet.flatten([
                        styles.Text_9A,
                        theme.typography.headline3,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['businessName']}
                    </Text>
                  </View>
                </View>

                <View style={styles.ViewV0}>
                  <Text
                    style={StyleSheet.flatten([
                      styles.TextLx,
                      theme.typography.headline3,
                      { color: theme.colors.strong },
                    ])}
                  >
                    {data && data['fullName']}
                  </Text>

                  <Text
                    style={StyleSheet.flatten([
                      styles.TextbE,
                      theme.typography.custom52,
                      { color: theme.colors.strong },
                    ])}
                  >
                    {data && data['role']}
                  </Text>
                </View>

                <View
                  style={styles.ViewTB}
                  needsOffscreenAlphaCompositing={false}
                >
                  <Touchable
                    onPress={() => onPress4A7YwpKb(data)}
                    style={styles.Touchable_7U}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.ViewTk,
                        {
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                          borderRadius: theme.borderRadius.global,
                        },
                      ])}
                    >
                      <View
                        style={styles.View_41}
                        hitSlop={{}}
                        accessible={true}
                        pointerEvents="auto"
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextGE,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@BookSession@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.ViewjL}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Icon
                          style={styles.Icongh}
                          color={theme.colors.strong}
                          size={24}
                          name="MaterialIcons/notifications-active"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPressJGopYRla(data)}
                    style={styles.Touchablepw}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.Viewjr,
                        {
                          borderRadius: theme.borderRadius.global,
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.divider,
                        },
                      ])}
                    >
                      <View
                        style={styles.ViewhF}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextKW,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@Calendar@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.ViewDy}
                        hitSlop={{}}
                        pointerEvents="auto"
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconMT}
                          size={24}
                          color={theme.colors.strong}
                          name="Entypo/calendar"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPresshdNZMrPB(data)}
                    style={styles.Touchable_7D}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.View_82,
                        {
                          borderRadius: theme.borderRadius.global,
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.divider,
                        },
                      ])}
                    >
                      <View
                        style={styles.ViewqS}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.Textbj,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@SearchBooking@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.View_4v}
                        hitSlop={{}}
                        pointerEvents="auto"
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconMe}
                          size={24}
                          color={theme.colors.strong}
                          name="FontAwesome/search"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPressIMapvTli(data)}
                    style={styles.Touchablerj}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.ViewMe,
                        {
                          borderRadius: theme.borderRadius.global,
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                        },
                      ])}
                    >
                      <View
                        style={styles.View_6y}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.Textm5,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@AddClient@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.ViewQm}
                        hitSlop={{}}
                        pointerEvents="auto"
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconVb}
                          size={24}
                          color={theme.colors.strong}
                          name="AntDesign/adduser"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPress3ophw9EA(data)}
                    style={styles.TouchableCr}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.View_1W,
                        {
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                          borderRadius: theme.borderRadius.global,
                        },
                      ])}
                    >
                      <View
                        style={styles.Viewbp}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.Text_8u,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@Clients@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.Views7}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconO3}
                          color={theme.colors.strong}
                          size={24}
                          name="FontAwesome/list-ul"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPressLMkIikBY(data)}
                    style={styles.Touchableem}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.ViewPv,
                        {
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                          borderRadius: theme.borderRadius.global,
                        },
                      ])}
                    >
                      <View
                        style={styles.Viewvw}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextHa,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@Location@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.View_8S}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconMb}
                          color={theme.colors.strong}
                          size={24}
                          name="FontAwesome/location-arrow"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPressa9L6ahKA(data)}
                    style={styles.TouchableMi}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.Viewm0,
                        {
                          borderRadius: theme.borderRadius.global,
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.divider,
                        },
                      ])}
                    >
                      <View
                        style={styles.ViewbF}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextmN,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@BusinessSetting@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.Vieww6}
                        hitSlop={{}}
                        pointerEvents="auto"
                        accessible={true}
                      >
                        <Icon
                          style={styles.Iconxc}
                          size={24}
                          color={theme.colors.strong}
                          name="Ionicons/md-business"
                        />
                      </View>
                    </View>
                  </Touchable>

                  <Touchable
                    onPress={() => onPressuGN128Oc(data)}
                    style={styles.TouchableHw}
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.Viewpd,
                        {
                          borderRadius: theme.borderRadius.global,
                          backgroundColor: theme.colors.background,
                          borderColor: theme.colors.divider,
                        },
                      ])}
                    >
                      <View
                        style={styles.ViewMc}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextKb,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {'[@Setting@]'}
                        </Text>
                      </View>

                      <View
                        style={styles.ViewBp}
                        hitSlop={{}}
                        pointerEvents="auto"
                        accessible={true}
                      >
                        <Icon
                          style={styles.IconQW}
                          size={24}
                          color={theme.colors.strong}
                          name="FontAwesome/gear"
                        />
                      </View>
                    </View>
                  </Touchable>
                </View>
                <View
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                />
              </View>
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputFd}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={update}
        onChangeText={update => setUpdate(update)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_8u: {
    textAlign: 'left',
  },
  Viewbp: {
    marginBottom: 24,
  },
  IconVb: {
    width: 24,
    height: 24,
  },
  TextGE: {
    textAlign: 'left',
  },
  View_41: {
    marginBottom: 24,
  },
  Icongh: {
    height: 24,
    width: 24,
  },
  Touchable_7U: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  IconO3: {
    height: 24,
    width: 24,
  },
  TextKW: {
    textAlign: 'left',
  },
  ViewhF: {
    marginBottom: 24,
  },
  IconMT: {
    height: 24,
    width: 24,
  },
  KeyboardAvoidingViewJP: {
    flexGrow: 1,
  },
  ViewbJ: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    maxWidth: '70%',
  },
  ViewU0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  TextmN: {
    textAlign: 'left',
  },
  ViewbF: {
    marginBottom: 24,
  },
  Iconxc: {
    width: 24,
    height: 24,
  },
  Textm5: {
    textAlign: 'left',
  },
  View_6y: {
    marginBottom: 24,
  },
  TextKb: {
    textAlign: 'left',
  },
  ViewMc: {
    marginBottom: 24,
  },
  IconQW: {
    width: 24,
    height: 24,
  },
  Textbj: {
    textAlign: 'left',
  },
  ViewqS: {
    marginBottom: 24,
  },
  IconMe: {
    height: 24,
    width: 24,
  },
  TextHa: {
    textAlign: 'left',
  },
  Viewvw: {
    marginBottom: 24,
  },
  IconMb: {
    height: 24,
    width: 24,
  },
  IconEx: {
    width: 34,
    height: 34,
    maxWidth: 34,
    maxHeight: 34,
  },
  ViewGa: {
    width: 34,
    height: 34,
    marginRight: 14,
  },
  Viewyq: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '80%',
  },
  View_9u: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 24,
  },
  Viewmu: {
    width: '100%',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 24,
    marginTop: 24,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    justifyContent: 'center',
  },
  TextLx: {
    paddingBottom: 10,
  },
  ViewMe: {
    width: '100%',
    height: 140,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  ViewTk: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  View_1W: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  Viewjr: {
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  Text_9A: {
    textTransform: 'uppercase',
  },
  Viewm0: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
    width: '100%',
    borderRightWidth: 1,
  },
  Viewpd: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingLeft: 14,
    height: 140,
    width: '100%',
    borderRightWidth: 1,
  },
  View_82: {
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 14,
    borderLeftWidth: 1,
    borderTopWidth: 1,
  },
  ViewPv: {
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    width: '100%',
    height: 140,
    paddingLeft: 14,
  },
  ViewQm: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  ViewjL: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  Views7: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  ViewDy: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  Touchablepw: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  Vieww6: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  ViewBp: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  View_4v: {
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    height: 42,
  },
  TextInputFd: {
    opacity: 0,
  },
  View_8S: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    alignItems: 'center',
  },
  ViewIy: {
    paddingRight: 34,
  },
  Button_3L: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextbE: {
    textTransform: 'uppercase',
  },
  ViewV0: {
    paddingTop: 32,
    alignItems: 'flex-start',
    paddingBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ViewTB: {
    paddingLeft: 32,
    alignItems: 'flex-start',
    paddingRight: 32,
    flexWrap: 'wrap',
    paddingBottom: 72,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Touchable_7D: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  Touchablerj: {
    width: '45%',
    marginBottom: 14,
    marginTop: 14,
    alignSelf: 'stretch',
    maxWidth: 160,
  },
  TouchableCr: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  Touchableem: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  TouchableMi: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
  TouchableHw: {
    alignSelf: 'stretch',
    marginTop: 14,
    marginBottom: 14,
    width: '45%',
    maxWidth: 160,
  },
});

export default withTheme(HomepageAdminScreen);