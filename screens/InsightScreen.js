import React from 'react';
import { Picker } from '@react-native-picker/picker';
import {lang} from '../config/config';

import {
  Container,
  DatePicker,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const InsightScreen = props => {
  const [filter_dayStart, setFilter_dayStart] = React.useState(undefined);
  const [filter_dayEnd, setFilter_dayEnd] = React.useState(undefined);
  const [filter_locationId, setFilter_locationId] = React.useState(undefined);
  const [filter_coachId, setFilter_coachId] = React.useState(undefined);
  const [search_coachId, setSearch_coachId] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;

  const onPressjdu1kxyN = async () => {
    await WebBrowser.openBrowserAsync('https://a.b');
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerhW}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewrG}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View
          style={styles.View_0j}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <View
            style={styles.ViewBU}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.Viewrk}
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
              style={styles.View_5m}
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
            style={styles.View_8j}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <View
              style={styles.ViewHW}
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
              style={styles.ViewFX}
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
        <Fetch
          value={search_coachId}
          onChangeText={search_coachId => setSearch_coachId(search_coachId)}
          url={`https://server.fitlive.fit/report?userId=${encodeURIComponent(
            props.route.params['userId']
          )}&filter_locationId=${encodeURIComponent(
            filter_locationId
          )}&filter_dayEnd=${encodeURIComponent(
            filter_dayEnd
          )}&filter_dayStart=${encodeURIComponent(
            filter_dayStart
          )}&filter_coachId=${encodeURIComponent(filter_coachId)}`}
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
                  style={styles.Viewd5}
                  needsOffscreenAlphaCompositing={false}
                >
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewse,
                      {
                        borderRadius: theme.borderRadius.global,
                        borderColor: theme.colors.divider,
                        backgroundColor: theme.colors.background,
                      },
                    ])}
                  >
                    <View
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <Text
                        style={StyleSheet.flatten([
                          styles.TextsO,
                          theme.typography.headline6,
                          { color: theme.colors.strong },
                        ])}
                        allowFontScaling={true}
                      >
                        {lang("TotalSession")}
                      </Text>
                    </View>

                    <View
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <Text
                        style={StyleSheet.flatten([
                          styles.TextPi,
                          theme.typography.headline4,
                          { color: theme.colors.medium },
                        ])}
                        allowFontScaling={true}
                      >
                        {data && data['total_session']}
                      </Text>

                      <View
                        style={styles.View_5b}
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                        pointerEvents="auto"
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextT3,
                            theme.typography.subtitle1,
                            { color: theme.colors.medium },
                          ])}
                          allowFontScaling={true}
                        >
                          {data && data['diff_total_session']}
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            styles.Text_6x,
                            theme.typography.subtitle1,
                            { color: theme.colors.medium },
                          ])}
                          allowFontScaling={true}
                        >
                          %
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View
                    style={styles.ViewIF}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.ViewW2,
                        {
                          borderRadius: theme.borderRadius.global,
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                        },
                      ])}
                    >
                      <View
                        style={styles.Viewn8}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextN5,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {lang("SessionConfirmed")}
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            styles.TextB2,
                            theme.typography.headline4,
                            { color: theme.colors.medium },
                          ])}
                          allowFontScaling={true}
                        >
                          {data && data['num_session_Confirmed']}
                        </Text>

                        <View
                          style={styles.Viewj6}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text
                            style={StyleSheet.flatten([
                              styles.Text_2g,
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ])}
                            allowFontScaling={true}
                          >
                            {data && data['diff_num_session_Confirmed']}
                          </Text>

                          <Text
                            style={StyleSheet.flatten([
                              styles.TextrA,
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ])}
                            allowFontScaling={true}
                          >
                            %
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={StyleSheet.flatten([
                        styles.Viewl2,
                        {
                          borderRadius: theme.borderRadius.global,
                          borderColor: theme.colors.divider,
                          backgroundColor: theme.colors.background,
                        },
                      ])}
                    >
                      <View
                        style={styles.View_4W}
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.Text_9S,
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ])}
                          allowFontScaling={true}
                        >
                          {lang("SessionCancelled")}
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            styles.Text_1N,
                            theme.typography.headline4,
                            { color: theme.colors.medium },
                          ])}
                          allowFontScaling={true}
                        >
                          {data && data['num_session_Cancelled']}
                        </Text>

                        <View
                          style={styles.ViewsN}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Text
                            style={StyleSheet.flatten([
                              styles.Text_0H,
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ])}
                            allowFontScaling={true}
                          >
                            {data && data['diff_num_session_Cancelled']}
                          </Text>

                          <Text
                            style={StyleSheet.flatten([
                              styles.TextNa,
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ])}
                            allowFontScaling={true}
                          >
                            %
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={StyleSheet.flatten([
                      styles.ViewIs,
                      {
                        borderRadius: theme.borderRadius.global,
                        borderColor: theme.colors.divider,
                        backgroundColor: theme.colors.background,
                      },
                    ])}
                  >
                    <View
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <Text
                        style={StyleSheet.flatten([
                          styles.TextuX,
                          theme.typography.headline6,
                          { color: theme.colors.strong },
                        ])}
                        allowFontScaling={true}
                      >
                        {lang("TopCancelByReason")}
                      </Text>
                    </View>

                    <View
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <FlatList
                        renderItem={({ item }) => (
                          <View
                            style={styles.ViewAD}
                            accessible={true}
                            importantForAccessibility="auto"
                            hitSlop={{}}
                            pointerEvents="auto"
                          >
                            <Text style={{ color: theme.colors.strong }}>
                              {item && item['cancelReason']}
                            </Text>

                            <Text style={{ color: theme.colors.strong }}>
                              (
                            </Text>

                            <Text style={{ color: theme.colors.strong }}>
                              {item && item['count']}
                            </Text>

                            <Text style={{ color: theme.colors.strong }}>
                              )
                            </Text>
                          </View>
                        )}
                        numColumns={1}
                        data={data['list_cancelByReason']}
                      />
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInput_0z}
        value={update}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={update => setUpdate(update)}
        defaultValue="0"
      />
      <Touchable onPress={onPressjdu1kxyN} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ContainerT5: {
    width: '100%',
    height: 60,
  },
  ContainerQj: {
    width: '100%',
    height: 60,
  },
  Viewrk: {
    width: '50%',
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  ViewBU: {
    flexDirection: 'row',
  },
  ViewHW: {
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    width: '50%',
  },
  View_0j: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  KeyboardAvoidingViewrG: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerhW: {
    alignItems: 'center',
  },
  TextsO: {
    textAlign: 'left',
  },
  TextPi: {
    textAlign: 'left',
  },
  Viewd5: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    alignItems: 'flex-start',
    paddingRight: 32,
    flexWrap: 'wrap',
    paddingBottom: 72,
  },
  TextT3: {
    textAlign: 'left',
  },
  TextN5: {
    textAlign: 'left',
  },
  Text_2g: {
    textAlign: 'left',
  },
  Viewn8: {
    marginBottom: 24,
  },
  Text_9S: {
    textAlign: 'left',
  },
  Text_0H: {
    textAlign: 'left',
  },
  View_4W: {
    marginBottom: 24,
  },
  TextuX: {
    textAlign: 'left',
  },
  ViewAD: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
  },
  Viewse: {
    width: '100%',
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
  ViewW2: {
    width: '48%',
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
    marginRight: '2%',
  },
  View_5m: {
    width: '50%',
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  TextInput_0z: {
    opacity: 0,
  },
  ViewFX: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    alignItems: 'flex-start',
    width: '50%',
  },
  View_8j: {
    flexDirection: 'row',
    width: '100%',
  },
  View_5b: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  Text_6x: {
    textAlign: 'left',
  },
  TextB2: {
    textAlign: 'left',
  },
  TextrA: {
    textAlign: 'left',
  },
  Text_1N: {
    textAlign: 'left',
  },
  TextNa: {
    textAlign: 'left',
  },
  ViewIF: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
  Viewl2: {
    width: '48%',
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
    marginLeft: '2%',
  },
  Viewj6: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ViewsN: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ViewIs: {
    width: '100%',
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 14,
    paddingTop: 14,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default withTheme(InsightScreen);