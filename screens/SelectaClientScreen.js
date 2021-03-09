import React from 'react';
                     import {lang} from '../config/config';

import {
  Divider,
  FieldSearchBarFull,
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

const SelectaClientScreen = props => {
  const [searchValue, setSearchValue] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });

  const onPress2efLII1N = item => {
    const data = item;
    navigation.navigate('SelectLocationScreen', {
      userId: props.route.params['userId'],
      clientName: item['firstName'],
      clientId: item['clientId'],
    });
  };
  const onPressQHn0zUkb = item => {
    const data = item;
    navigation.navigate('AddClientScreen', {
      userId: props.route.params['userId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerfv}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewaB}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View
          style={styles.Viewvh}
          value={searchValue}
          onChangeText={searchValue => setSearchValue(searchValue)}
          onChange={searchValue => setSearchValue(searchValue)}
        >
          <Text
            style={StyleSheet.flatten([
              styles.Textcm,
              theme.typography.caption,
              { color: theme.colors.strong },
            ])}
          >
            {lang("SelectAClient")}
          </Text>
          <Divider
            style={styles.DividerUS}
            color={theme.colors.medium}
            height={2}
          />
          <FieldSearchBarFull
            style={styles.FieldSearchBarFullq1}
            placeholder={lang("SearchClientInCompany")}
            value={searchValue}
            onChange={searchValue => setSearchValue(searchValue)}
            icon="FontAwesome/search"
          />
        </View>
        <Fetch
          url={`https://server.fitlive.fit/getClient?page=${encodeURIComponent(
            1
          )}&search=${encodeURIComponent(
            searchValue
          )}&update=${encodeURIComponent(update)}&userId=${encodeURIComponent(
            props.route.params['userId']
          )}&apiVersion=${encodeURIComponent('v1')}`}
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
              return (
                <View
                  style={styles.Viewmd}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <ActivityIndicator
                    style={styles.ActivityIndicatoraL}
                    size="small"
                    animating={true}
                    hidesWhenStopped={true}
                  />
                </View>
              );
            }

            return (
              <View
                accessible={true}
                importantForAccessibility="auto"
                hitSlop={{}}
                pointerEvents="auto"
              >
                <FlatList
                  renderItem={({ item }) => (
                    <Touchable onPress={() => onPress2efLII1N(item)}>
                      <View
                        style={StyleSheet.flatten([
                          styles.ViewW8,
                          {
                            backgroundColor: theme.colors.surface,
                            borderRadius: theme.borderRadius.global,
                            borderColor: theme.colors.light,
                          },
                        ])}
                        hitSlop={{}}
                        accessible={true}
                        importantForAccessibility="auto"
                        pointerEvents="auto"
                      >
                        <View style={styles.View_9z}>
                          <Icon
                            style={styles.Iconkp}
                            size={24}
                            color={theme.colors.strong}
                            name="AntDesign/rightcircleo"
                          />
                          <View
                            style={styles.Viewio}
                            hitSlop={{}}
                            accessible={true}
                            pointerEvents="auto"
                          >
                            <Text
                              style={StyleSheet.flatten([
                                theme.typography.subtitle1,
                                { color: theme.colors.medium },
                              ])}
                              allowFontScaling={true}
                            >
                              {item && item['fullName']}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Touchable>
                  )}
                  contentContainerStyle={styles.FlatListRV}
                  data={data['item']}
                />
                <View
                  style={styles.ViewtN}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <Text style={{ color: theme.colors.strong }}>
                    {data && data['total_item']}
                  </Text>

                  <Text style={{ color: theme.colors.strong }}>
                    &nbsp;{lang("Client")}
                  </Text>

                  <Touchable
                    onPress={() => onPressQHn0zUkb(data)}
                    style={styles.TouchableXg}
                  >
                    <Text style={{ color: theme.colors.primary }}>
                      {lang("AddClient")}
                    </Text>
                  </Touchable>
                </View>
              </View>
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputLO}
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
  Iconkp: {
    width: 24,
    height: 24,
  },
  ViewW8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 3,
    marginTop: 3,
  },
  FlatListRV: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 44,
  },
  KeyboardAvoidingViewaB: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerfv: {
    alignItems: 'center',
  },
  Viewvh: {
    alignItems: 'flex-start',
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ActivityIndicatoraL: {
    width: 36,
    height: 36,
  },
  Viewmd: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  View_9z: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  Textcm: {
    textTransform: 'uppercase',
  },
  Viewio: {
    alignSelf: 'stretch',
    paddingRight: 24,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  TextInputLO: {
    opacity: 0,
  },
  DividerUS: {
    height: 1,
  },
  ViewtN: {
    marginLeft: 32,
    marginRight: 32,
    flexDirection: 'row',
  },
  FieldSearchBarFullq1: {
    width: '100%',
  },
  TouchableXg: {
    marginLeft: 3,
  },
});

export default withTheme(SelectaClientScreen);