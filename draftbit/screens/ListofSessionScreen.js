import React from 'react';
import {
  DatePicker,
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ListofSessionScreen = props => {
  const [date, setDate] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });
  const refreshData = () => {
    setUpdate(new Date().getTime());
  };

  const onPressEnpehRma = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPressPX9NQv8O = item => {
    const data = item;
    navigation.navigate('ListofSessionAdminScreen', {
      role: props.route.params['role'],
      userId: props.route.params['userId'],
    });
  };
  const onPressvaaBr7pm = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPresszbjzoFh8 = () => navigation.goBack();

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View
        style={styles.Viewfl}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <View
          style={styles.ViewtX}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Touchable onPress={onPresszbjzoFh8} style={styles.TouchableeJ}>
            <Icon
              color={theme.colors.strong}
              size={30}
              name="AntDesign/arrowleft"
            />
          </Touchable>

          <Text
            style={StyleSheet.flatten([
              theme.typography.headline3,
              { color: theme.colors.strong },
            ])}
          >
            Calendar
          </Text>
        </View>

        <View
          style={styles.View_7M}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Touchable onPress={onPressPX9NQv8O} style={styles.TouchablesU}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/search"
            />
          </Touchable>

          <Touchable onPress={refreshData} style={styles.TouchableMM}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/rotate-right"
            />
          </Touchable>
        </View>
      </View>

      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewoe}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View
          style={styles.ViewII}
          hitSlop={{}}
          accessible={true}
          importantForAccessibility="auto"
          pointerEvents="auto"
        >
          <DatePicker
            label="Date"
            mode="date"
            leftIconMode="inset"
            type="solid"
            date={date}
            onDateChange={date => setDate(date)}
          />
          <Divider
            style={styles.DividerIo}
            color={theme.colors.divider}
            height={1}
          />
        </View>
        <Fetch
          url={`https://fitlive.glitch.me/sessionList?filter_day=${encodeURIComponent(
            date
          )}&userId=${encodeURIComponent(
            props.route.params['userId']
          )}&role=${encodeURIComponent(
            props.route.params['role']
          )}&update=${encodeURIComponent(update)}`}
          headers={{
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return (
                <View
                  style={styles.Viewkt}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <ActivityIndicator
                    style={styles.ActivityIndicatorLt}
                    size="small"
                    animating={true}
                    hidesWhenStopped={true}
                  />
                </View>
              );
            }

            if (error) {
              return (
                <Text
                  style={StyleSheet.flatten([
                    styles.TextJf,
                    { color: theme.colors.strong },
                  ])}
                >
                  Error!
                </Text>
              );
            }

            if (!data) {
              return (
                <View
                  style={styles.Viewpc}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Text style={{ color: theme.colors.strong }}>Empty!!!</Text>
                </View>
              );
            }

            return (
              <FlatList
                renderItem={({ item }) => (
                  <Touchable
                    onPress={() => onPressEnpehRma(item)}
                    style={styles.Touchableug}
                  >
                    <View
                      style={styles.Viewih}
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <Touchable onPress={() => onPressvaaBr7pm(item)}>
                        <View
                          style={styles.View_8W}
                          pointerEvents="auto"
                          hitSlop={{}}
                          importantForAccessibility="auto"
                          accessible={true}
                        >
                          <View
                            style={styles.ViewLZ}
                            pointerEvents="auto"
                            hitSlop={{}}
                            importantForAccessibility="auto"
                            accessible={true}
                          >
                            <View
                              style={StyleSheet.flatten([
                                styles.View_7w,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderColor: theme.colors.light,
                                  borderRadius: theme.borderRadius.global,
                                },
                              ])}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <Text
                                style={StyleSheet.flatten([
                                  theme.typography.caption,
                                  { color: theme.colors.medium },
                                ])}
                              >
                                {item && item['start_hour']}
                              </Text>

                              <Text
                                style={StyleSheet.flatten([
                                  theme.typography.caption,
                                  { color: theme.colors.medium },
                                ])}
                              >
                                {item && item['end_hour']}
                              </Text>
                            </View>

                            <View
                              style={styles.Viewdi}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <Text
                                style={StyleSheet.flatten([
                                  theme.typography.body1,
                                  { color: theme.colors.strong },
                                ])}
                              >
                                {item && item['fullName']}
                              </Text>

                              <View
                                style={styles.Viewbx}
                                pointerEvents="auto"
                                hitSlop={{}}
                                importantForAccessibility="auto"
                                accessible={true}
                              >
                                <View
                                  style={styles.ViewTR}
                                  pointerEvents="auto"
                                  hitSlop={{}}
                                  importantForAccessibility="auto"
                                  accessible={true}
                                >
                                  <View
                                    style={styles.Viewx7}
                                    pointerEvents="auto"
                                    hitSlop={{}}
                                    importantForAccessibility="auto"
                                    accessible={true}
                                  >
                                    <Text
                                      style={StyleSheet.flatten([
                                        theme.typography.caption,
                                        { color: theme.colors.light },
                                      ])}
                                    >
                                      {item && item['location']}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View
                            style={styles.Viewd8}
                            pointerEvents="auto"
                            hitSlop={{}}
                            importantForAccessibility="auto"
                            accessible={true}
                          >
                            <Text
                              style={StyleSheet.flatten([
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ])}
                            >
                              {item && item['status']}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          style={styles.DividervI}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    </View>
                  </Touchable>
                )}
                contentContainerStyle={styles.FlatList_67}
                data={data}
              />
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputa3}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={update}
        onChangeText={update => setUpdate(update)}
        defaultValue="0"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Touchableug: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  FlatList_67: {
    paddingBottom: 44,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewII: {
    width: '100%',
    marginBottom: 14,
    paddingLeft: 32,
    paddingRight: 32,
  },
  Viewfl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  ViewtX: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_7w: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  Viewx7: {
    marginRight: 6,
  },
  ViewTR: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewLZ: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  View_8W: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  Viewih: {
    width: '100%',
  },
  TouchablesU: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  TouchableeJ: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  Viewkt: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActivityIndicatorLt: {
    width: 36,
    height: 36,
  },
  Viewpc: {
    width: '100%',
    alignItems: 'center',
  },
  TextJf: {
    textAlign: 'center',
  },
  DividerIo: {
    height: 1,
    marginTop: 14,
  },
  KeyboardAvoidingViewoe: {
    maxWidth: 600,
  },
  Viewbx: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewdi: {
    alignSelf: 'stretch',
  },
  Viewd8: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  DividervI: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  TouchableMM: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  View_7M: {
    flexDirection: 'row',
  },
  TextInputa3: {
    opacity: 0,
  },
});

export default withTheme(ListofSessionScreen);
