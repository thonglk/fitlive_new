import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';

import {
  Container,
  DatePicker,
  Divider,
  Icon,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
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

const ListofSessionAdminScreen = props => {
  const [search, setSearch] = React.useState(undefined);
  const [filter_dayStart, setFilter_dayStart] = React.useState(undefined);
  const [filter_dayEnd, setFilter_dayEnd] = React.useState(undefined);
  const [filter_locationId, setFilter_locationId] = React.useState(undefined);
  const [filter_coachId, setFilter_coachId] = React.useState(undefined);
  const [search_coachId, setSearch_coachId] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });
  const downloadLink = async () => {
    var filter_url = `https://server.fitlive.fit/sessionSearch?filter_coachId=${encodeURIComponent(
      filter_coachId
    )}&filter_dayStart=${encodeURIComponent(
      filter_dayStart
    )}&filter_dayEnd=${encodeURIComponent(
      filter_dayEnd
    )}&filter_locationId=${encodeURIComponent(
      filter_locationId
    )}&search=${encodeURIComponent(search)}&userId=${encodeURIComponent(
      props.route.params['userId']
    )}&update=${encodeURIComponent(update)}`;
    var url = `${filter_url}&export=csv`;
    await WebBrowser.openBrowserAsync(url);
  };

  const refreshData = () => {
    setUpdate(new Date().getTime());
  };

  const onPressmmSRYgyZ = item => {
    const data = item;
    navigation.navigate('SessionDetailScreen', {
      userId: props.route.params['userId'],
      sessionId: item['sessionId'],
    });
  };

  const onPressT6SpePCe = async () => {
    await WebBrowser.openBrowserAsync('https://a.b');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerB3}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewrM}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View
          style={styles.View_1S}
          hitSlop={{}}
          accessible={true}
          importantForAccessibility="auto"
          pointerEvents="auto"
        >
          <TextField
            style={styles.TextField_2w}
            allowFontScaling={true}
            autoCapitalize="none"
            keyboardAppearance="default"
            keyboardType="default"
            label="Booking ID"
            leftIconMode="inset"
            type="solid"
            value={search}
            onChangeText={search => setSearch(search)}
          />
        </View>
        <Divider
          style={styles.Divider_97}
          color={theme.colors.divider}
          height={1}
        />
        <View
          style={styles.View_1H}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={styles.ViewAb}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.Viewhd}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <DatePicker
                label="From"
                mode="date"
                leftIconMode="inset"
                type="solid"
                date={filter_dayStart}
                onDateChange={filter_dayStart =>
                  setFilter_dayStart(filter_dayStart)
                }
                error={false}
              />
            </View>

            <View
              style={styles.Viewb4}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <DatePicker
                label="To"
                mode="date"
                leftIconMode="inset"
                type="solid"
                date={filter_dayEnd}
                onDateChange={filter_dayEnd => setFilter_dayEnd(filter_dayEnd)}
                error={false}
              />
            </View>
          </View>

          <View
            style={styles.ViewEg}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.View_4E}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Fetch
                url={`https://server.fitlive.fit/locationList?userId=${encodeURIComponent(
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
                    <Picker
        selectedValue={filter_locationId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_locationId(itemValue)}
      >
             
        <Picker.Item label="Location" value="undefined" />
        {data.map(prop => {
         return (
         <Picker.Item label={prop.location} value={prop.locationId} />
         );
      })}
      </Picker>

                  );
                }}
              </Fetch>
            </View>

            <View
              style={styles.ViewfL}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Fetch
                url={`https://server.fitlive.fit/getCoach?filter_locationId=${encodeURIComponent(
                  filter_locationId
                )}&update=${encodeURIComponent(
                  update
                )}&userId=${encodeURIComponent(props.route.params['userId'])}`}
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
                    <Picker
        selectedValue={filter_coachId}
        style={{ height: 60, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setFilter_coachId(itemValue)}
      >
             
        <Picker.Item label="Coach" value="undefined" />
        { data.map(prop => {
         return (
         <Picker.Item label={prop.fullName} value={prop.coachId} />
         );
      })}
      </Picker>

                  );
                }}
              </Fetch>
            </View>
          </View>
        </View>
        <Divider
          style={styles.Dividerc9}
          color={theme.colors.divider}
          height={1}
        />
        <View
          style={styles.Viewbv}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Touchable
            onPress={downloadLink}
            style={StyleSheet.flatten([
              styles.TouchableuK,
              { borderRadius: theme.borderRadius.global },
            ])}
          >
            <Text
              style={StyleSheet.flatten([
                styles.Textol,
                theme.typography.caption,
                { color: theme.colors.strong },
              ])}
            >
              Export
            </Text>
          </Touchable>

          <Touchable onPress={refreshData} style={styles.Touchablek9}>
            <Icon
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/rotate-right"
            />
          </Touchable>
        </View>
        <Fetch
          value={search_coachId}
          onChangeText={search_coachId => setSearch_coachId(search_coachId)}
          url={`https://server.fitlive.fit/sessionSearch?filter_coachId=${encodeURIComponent(
            filter_coachId
          )}&filter_dayStart=${encodeURIComponent(
            filter_dayStart
          )}&filter_dayEnd=${encodeURIComponent(
            filter_dayEnd
          )}&filter_locationId=${encodeURIComponent(
            filter_locationId
          )}&search=${encodeURIComponent(search)}&userId=${encodeURIComponent(
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
                <Text
                  style={StyleSheet.flatten([
                    styles.TextQA,
                    { color: theme.colors.strong },
                  ])}
                >
                  {lang("Error")}
                </Text>
              );
            }

            if (!data) {
              return (
                <View
                  style={styles.ViewcF}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <ActivityIndicator
                    style={styles.ActivityIndicator_2I}
                    size="small"
                    animating={true}
                    hidesWhenStopped={true}
                  />
                </View>
              );
            }

            return (
              <FlatList
                renderItem={({ item }) => (
                  <Touchable
                    onPress={() => onPressmmSRYgyZ(item)}
                    style={styles.TouchablejM}
                  >
                    <View
                      style={styles.Viewdv}
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <View
                        style={styles.Viewtd}
                        pointerEvents="auto"
                        hitSlop={{}}
                        importantForAccessibility="auto"
                        accessible={true}
                      >
                        <View
                          style={styles.ViewB7}
                          pointerEvents="auto"
                          hitSlop={{}}
                          importantForAccessibility="auto"
                          accessible={true}
                        >
                          <View
                            style={StyleSheet.flatten([
                              styles.ViewNa,
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
                              {item && item['date']}
                            </Text>

                            <View
                              style={styles.Viewsa}
                              accessible={true}
                              importantForAccessibility="auto"
                              hitSlop={{}}
                              pointerEvents="auto"
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
                                -
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
                          </View>

                          <View
                            style={styles.ViewPN}
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
                              style={styles.Viewb9}
                              pointerEvents="auto"
                              hitSlop={{}}
                              importantForAccessibility="auto"
                              accessible={true}
                            >
                              <View
                                style={styles.Viewj7}
                                pointerEvents="auto"
                                hitSlop={{}}
                                importantForAccessibility="auto"
                                accessible={true}
                              >
                                <View
                                  style={styles.Viewwa}
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

                                  <Text
                                    style={StyleSheet.flatten([
                                      theme.typography.caption,
                                      { color: theme.colors.light },
                                    ])}
                                  >
                                    &nbsp;|&nbsp;
                                  </Text>

                                  <Text
                                    style={StyleSheet.flatten([
                                      theme.typography.caption,
                                      { color: theme.colors.light },
                                    ])}
                                  >
                                    {item && item['coachName']}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>

                        <View
                          style={styles.ViewPT}
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
                    </View>
                  </Touchable>
                )}
                contentContainerStyle={styles.FlatListvM}
                data={data}
              />
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputXH}
        value={update}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={update => setUpdate(update)}
        defaultValue="0"
      />
      <Touchable onPress={onPressT6SpePCe} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewNa: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 78,
    maxHeight: 48,
    marginRight: 14,
    paddingLeft: 3,
    paddingRight: 3,
  },
  Viewwa: {
    marginRight: 6,
    flexDirection: 'row',
  },
  Viewj7: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewB7: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  Viewtd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  Viewdv: {
    width: '100%',
  },
  TouchablejM: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  FlatListvM: {
    paddingBottom: 12,
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 12,
  },
  View_1S: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
  },
  KeyboardAvoidingViewrM: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerB3: {
    alignItems: 'center',
  },
  TextField_2w: {
    marginBottom: 5,
  },
  TouchableuK: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    marginTop: 5,
    paddingLeft: 10,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Containerep: {
    width: '100%',
    height: '100%',
    minHeight: 60,
  },
  ContaineruC: {
    width: '100%',
    height: '100%',
    minHeight: 60,
  },
  Viewhd: {
    width: '50%',
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  ViewAb: {
    flexDirection: 'row',
  },
  View_4E: {
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    width: '50%',
  },
  ActivityIndicator_2I: {
    width: 36,
    height: 36,
  },
  ViewcF: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textol: {
    textTransform: 'uppercase',
  },
  TextQA: {
    textAlign: 'center',
  },
  Viewb9: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewPN: {
    alignSelf: 'stretch',
  },
  ViewPT: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Touchablek9: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  Divider_97: {
    height: 1,
    marginTop: 14,
  },
  TextInputXH: {
    opacity: 0,
  },
  Viewsa: {
    flexDirection: 'row',
  },
  Viewb4: {
    width: '50%',
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  ViewEg: {
    flexDirection: 'row',
    width: '100%',
  },
  ViewfL: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    alignItems: 'flex-start',
    width: '50%',
  },
  View_1H: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  Dividerc9: {
    height: 1,
    marginTop: 14,
  },
  Viewbv: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    paddingRight: 32,
    paddingLeft: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
});

export default withTheme(ListofSessionAdminScreen);