import React from 'react';
import {
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyCalendarScreen = props => {
  const [searchCoach, setSearchCoach] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const [date_start, setDate_start] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Touchable
          onPress={() =>
            props.navigation.navigate('SelectaClientScreen', {
              userId: props.route.params['userId'],
            })
          }
          style={{
            paddingLeft: 5,
            paddingRight: 20,
          }}
        >
          <Text>[@BookNew@]</Text>
        </Touchable>
      ),
    });

    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });
  const today = () => {
    setDate_start(Date.now());
  };

  const backDate = () => {
    setDate_start(date_start - 1000 * 60 * 60 * 24 * 3);
  };

  const nextDate = () => {
    setDate_start(date_start + 1000 * 60 * 60 * 24 * 3);
  };

  const onPresseCp9282G = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPress5IL5Dn6C = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };

  const onPresswrhmBse1 = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPressAyHFTx2a = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPressbXfHCfVj = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };
  const onPressImeC4flH = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <Fetch
        url={`https://fitlive.glitch.me/calendar?date_start=${encodeURIComponent(
          date_start
        )}&search_coachId=${encodeURIComponent(
          searchCoach
        )}&userId=${encodeURIComponent(
          props.route.params['userId']
        )}&update=${encodeURIComponent(update)}`}
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
            return (
              <View
                style={styles.View_6Y}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <Text style={{ color: theme.colors.strong }}>
                  Something Wrong!!!
                </Text>
              </View>
            );
          }

          if (!data) {
            return (
              <View
                style={styles.ViewYZ}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <ActivityIndicator
                  style={styles.ActivityIndicatoruD}
                  size="small"
                  animating={true}
                  hidesWhenStopped={true}
                />
              </View>
            );
          }

          return (
            <View
              style={styles.ViewUA}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <View
                style={styles.Vieww9}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <View
                  style={styles.Viewzb}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Touchable
                    onPress={today}
                    style={StyleSheet.flatten([
                      styles.TouchableEm,
                      {
                        borderRadius: theme.borderRadius.global,
                        borderColor: theme.colors.medium,
                      },
                    ])}
                  >
                    <Text
                      style={StyleSheet.flatten([
                        styles.Text_17,
                        theme.typography.custom54,
                        { color: theme.colors.medium },
                      ])}
                    >
                      Today
                    </Text>
                  </Touchable>

                  <Touchable
                    onPress={backDate}
                    style={StyleSheet.flatten([
                      styles.TouchableTe,
                      {
                        borderRadius: theme.borderRadius.global,
                        borderColor: theme.colors.medium,
                      },
                    ])}
                  >
                    <Icon
                      color={theme.colors.strong}
                      size={24}
                      name="FontAwesome/chevron-left"
                    />
                  </Touchable>

                  <Touchable
                    onPress={nextDate}
                    style={StyleSheet.flatten([
                      styles.TouchableHg,
                      {
                        borderRadius: theme.borderRadius.global,
                        borderColor: theme.colors.medium,
                      },
                    ])}
                  >
                    <Icon
                      color={theme.colors.strong}
                      size={24}
                      name="FontAwesome/chevron-right"
                    />
                  </Touchable>
                </View>

                <View
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Container
                    style={{ backgroundColor: theme.colors.light }}
                    useThemeGutterPadding={true}
                  >
                    <TextInput
                      style={{ backgroundColor: theme.colors.medium }}
                      allowFontScaling={true}
                      autoCapitalize="none"
                      keyboardType="default"
                      value={searchCoach}
                      onChangeText={searchCoach => setSearchCoach(searchCoach)}
                    />
                  </Container>
                </View>
              </View>

              <View
                style={styles.Viewzn}
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <View
                  style={styles.Viewqn}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.ViewbE,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.medium,
                      },
                    ])}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strongInverse }}>
                      {data && data['groupDay']['day_0']}
                    </Text>
                  </View>
                  <FlatList
                    renderItem={({ item }) => (
                      <Touchable
                        onPress={() => onPress5IL5Dn6C(item)}
                        style={styles.Touchableq3}
                      >
                        <View
                          style={styles.ViewqM}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Touchable onPress={() => onPresseCp9282G(item)}>
                            <View
                              style={styles.Viewyd}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <View
                                style={styles.View_4d}
                                pointerEvents="auto"
                                hitSlop={{}}
                                importantForAccessibility="auto"
                                accessible={true}
                              >
                                <View
                                  style={StyleSheet.flatten([
                                    styles.ViewdL,
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
                                  style={styles.ViewWO}
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
                                    style={styles.ViewUo}
                                    pointerEvents="auto"
                                    hitSlop={{}}
                                    importantForAccessibility="auto"
                                    accessible={true}
                                  >
                                    <View
                                      style={styles.View_5e}
                                      pointerEvents="auto"
                                      hitSlop={{}}
                                      importantForAccessibility="auto"
                                      accessible={true}
                                    >
                                      <View
                                        style={styles.Viewqx}
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
                                style={styles.ViewRj}
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
                          </Touchable>
                        </View>
                      </Touchable>
                    )}
                    contentContainerStyle={StyleSheet.flatten([
                      styles.FlatListlG,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.lightInverse,
                      },
                    ])}
                    numColumns={1}
                    data={data['groupBy']['day_0']}
                  />
                </View>

                <View
                  style={styles.ViewUE}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewbn,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.medium,
                      },
                    ])}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strongInverse }}>
                      {data && data['groupDay']['day_1']}
                    </Text>
                  </View>
                  <FlatList
                    renderItem={({ item }) => (
                      <Touchable
                        onPress={() => onPressAyHFTx2a(item)}
                        style={styles.Touchable_3y}
                      >
                        <View
                          style={styles.View_6O}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Touchable onPress={() => onPresswrhmBse1(item)}>
                            <View
                              style={styles.ViewO8}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <View
                                style={styles.Viewj6}
                                pointerEvents="auto"
                                hitSlop={{}}
                                importantForAccessibility="auto"
                                accessible={true}
                              >
                                <View
                                  style={StyleSheet.flatten([
                                    styles.ViewiU,
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
                                  style={styles.ViewvR}
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
                                    style={styles.Viewkr}
                                    pointerEvents="auto"
                                    hitSlop={{}}
                                    importantForAccessibility="auto"
                                    accessible={true}
                                  >
                                    <View
                                      style={styles.ViewhM}
                                      pointerEvents="auto"
                                      hitSlop={{}}
                                      importantForAccessibility="auto"
                                      accessible={true}
                                    >
                                      <View
                                        style={styles.ViewcZ}
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
                                style={styles.Viewio}
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
                          </Touchable>
                        </View>
                      </Touchable>
                    )}
                    contentContainerStyle={StyleSheet.flatten([
                      styles.FlatList_4G,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.lightInverse,
                      },
                    ])}
                    numColumns={1}
                    data={data['groupBy']['day_1']}
                  />
                </View>

                <View
                  style={styles.View_6y}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewe8,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.medium,
                      },
                    ])}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strongInverse }}>
                      {data && data['groupDay']['day_2']}
                    </Text>
                  </View>
                  <FlatList
                    renderItem={({ item }) => (
                      <Touchable
                        onPress={() => onPressImeC4flH(item)}
                        style={styles.Touchablewr}
                      >
                        <View
                          style={styles.ViewOP}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Touchable onPress={() => onPressbXfHCfVj(item)}>
                            <View
                              style={styles.View_70}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <View
                                style={styles.View_4h}
                                pointerEvents="auto"
                                hitSlop={{}}
                                importantForAccessibility="auto"
                                accessible={true}
                              >
                                <View
                                  style={StyleSheet.flatten([
                                    styles.ViewM9,
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
                                  style={styles.Viewfa}
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
                                    style={styles.ViewuN}
                                    pointerEvents="auto"
                                    hitSlop={{}}
                                    importantForAccessibility="auto"
                                    accessible={true}
                                  >
                                    <View
                                      style={styles.View_95}
                                      pointerEvents="auto"
                                      hitSlop={{}}
                                      importantForAccessibility="auto"
                                      accessible={true}
                                    >
                                      <View
                                        style={styles.ViewoJ}
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
                                style={styles.ViewVj}
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
                          </Touchable>
                        </View>
                      </Touchable>
                    )}
                    contentContainerStyle={StyleSheet.flatten([
                      styles.FlatListfR,
                      {
                        borderColor: theme.colors.light,
                        backgroundColor: theme.colors.lightInverse,
                      },
                    ])}
                    numColumns={1}
                    data={data['groupBy']['day_2']}
                  />
                </View>
              </View>
            </View>
          );
        }}
      </Fetch>
      <TextInput
        style={styles.TextInput_57}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={update}
        onChangeText={update => setUpdate(update)}
      />
      <TextInput
        style={styles.TextInput_7f}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={date_start}
        onChangeText={date_start => setDate_start(date_start)}
        defaultValue="new Date()"
        defaultValue=""
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewUA: {
    alignItems: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
  },
  ViewbE: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  Viewqn: {
    width: '100%',
    maxWidth: 420,
  },
  ViewdL: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  Viewqx: {
    marginRight: 6,
  },
  View_5e: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_4d: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  Viewyd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  ViewqM: {
    width: '100%',
  },
  Touchableq3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  View_6Y: {
    alignItems: 'center',
  },
  Viewzb: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  TouchableEm: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    paddingLeft: 5,
  },
  ViewYZ: {
    alignItems: 'center',
  },
  Vieww9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5,
  },
  ViewiU: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  ViewcZ: {
    marginRight: 6,
  },
  ViewhM: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewj6: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  ViewO8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  View_6O: {
    width: '100%',
  },
  Touchable_3y: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  Viewbn: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ViewM9: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  ViewoJ: {
    marginRight: 6,
  },
  View_95: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_4h: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  View_70: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  ViewOP: {
    width: '100%',
  },
  Touchablewr: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  Viewe8: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ActivityIndicatoruD: {
    width: 36,
    height: 36,
  },
  Text_17: {
    marginBottom: 4,
  },
  FlatListlG: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewUo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewWO: {
    alignSelf: 'stretch',
  },
  ViewRj: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Viewzn: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  TextInput_57: {
    opacity: 0,
  },
  TouchableTe: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'center',
    paddingRight: 5,
  },
  Viewkr: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewvR: {
    alignSelf: 'stretch',
  },
  Viewio: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  FlatList_4G: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewUE: {
    width: '100%',
    maxWidth: 420,
  },
  ViewuN: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewfa: {
    alignSelf: 'stretch',
  },
  ViewVj: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  FlatListfR: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  TextInput_7f: {
    opacity: 0,
  },
  TouchableHg: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingRight: 5,
  },
  View_6y: {
    width: '100%',
    maxWidth: 420,
  },
});

export default withTheme(MyCalendarScreen);