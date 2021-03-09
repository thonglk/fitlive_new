import React from 'react';
import {
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

const ListofClientScreen = props => {
  const [searchValue, setSearchValue] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const [page, setPage] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Touchable
          onPress={() =>
            props.navigation.navigate('AddClientScreen', {
              userId: props.route.params['userId'],
            })
          }
          style={{
            paddingLeft: 5,
            paddingRight: 24,
          }}
        >
          <Text>[@AddClient@]</Text>
        </Touchable>
      ),
    });

    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
      setPage(1);
    });

    return unsubscribe;
  });
  const backPage = () => {
    if (page) setPage(page - 1);
    else setPage(1);
  };

  const nextPage = () => {
    if (page) setPage(page + 1);
    else setPage(2);
  };

  const refreshData = () => {
    setUpdate(new Date());
  };

  const onPressFkgMQjT0 = item => {
    const data = item;
    navigation.navigate('ClientDetailScreen', {
      userId: props.route.params['userId'],
      clientId: item['clientId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerkg}
      scrollable={true}
      hasSafeArea={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_0I}
        behavior="position"
        keyboardVerticalOffset={44}
        enabled={false}
      >
        <View style={styles.ViewVG}>
          <FieldSearchBarFull
            style={StyleSheet.flatten([
              styles.FieldSearchBarFullIJ,
              {
                borderRadius: theme.borderRadius.global,
                borderColor: theme.colors.divider,
              },
            ])}
            onChange={searchValue => setSearchValue(searchValue)}
            placeholder="Search"
            value={searchValue}
          />
        </View>
        <Fetch
          onChangeText={update => setUpdate(update)}
          value={update}
          url={`https://fitlive.glitch.me/getClient?page=${encodeURIComponent(
            page
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
              return (
                <Text
                  style={StyleSheet.flatten([
                    styles.Text_2C,
                    { color: theme.colors.strong },
                  ])}
                >
                  Error :(
                </Text>
              );
            }

            if (!data) {
              return (
                <View
                  style={styles.Viewqy}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <ActivityIndicator
                    style={styles.ActivityIndicatorZH}
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
                <View
                  style={styles.ViewkP}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    style={styles.Viewhq}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strong }}>
                      {data && data['fromItem']}
                    </Text>

                    <Text style={{ color: theme.colors.strong }}>-</Text>

                    <Text style={{ color: theme.colors.strong }}>
                      {data && data['toItem']}
                    </Text>

                    <Text style={{ color: theme.colors.strong }}>/</Text>

                    <Text style={{ color: theme.colors.strong }}>
                      {data && data['total_item']}
                    </Text>
                  </View>

                  <View
                    style={styles.Views8}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Touchable
                      onPress={backPage}
                      style={StyleSheet.flatten([
                        styles.TouchableFb,
                        { borderRadius: theme.borderRadius.global },
                      ])}
                    >
                      <Icon
                        color={theme.colors.strong}
                        size={24}
                        name="FontAwesome/caret-left"
                      />
                    </Touchable>

                    <Text style={{ color: theme.colors.strong }}>{page}</Text>

                    <Text style={{ color: theme.colors.strong }}>/</Text>

                    <Text style={{ color: theme.colors.strong }}>
                      {data && data['total_pages']}
                    </Text>

                    <Touchable
                      onPress={nextPage}
                      style={StyleSheet.flatten([
                        styles.TouchableGV,
                        { borderRadius: theme.borderRadius.global },
                      ])}
                    >
                      <Icon
                        color={theme.colors.strong}
                        size={24}
                        name="FontAwesome/caret-right"
                      />
                    </Touchable>
                  </View>
                </View>
                <FlatList
                  renderItem={({ item }) => (
                    <Touchable
                      onPress={() => onPressFkgMQjT0(item)}
                      style={StyleSheet.flatten([
                        styles.Touchablel1,
                        {
                          borderColor: theme.colors.light,
                          borderRadius: theme.borderRadius.global,
                        },
                      ])}
                    >
                      <View
                        style={styles.ViewrP}
                        hitSlop={{}}
                        accessible={true}
                        importantForAccessibility="auto"
                        pointerEvents="auto"
                      >
                        <View style={styles.ViewQp}>
                          <View
                            style={styles.View_1I}
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

                          <View
                            accessible={true}
                            importantForAccessibility="auto"
                            hitSlop={{}}
                            pointerEvents="auto"
                          >
                            <Text
                              style={StyleSheet.flatten([
                                theme.typography.caption,
                                { color: theme.colors.light },
                              ])}
                              allowFontScaling={true}
                            >
                              {item && item['clientCode']}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Touchable>
                  )}
                  contentContainerStyle={styles.FlatListZq}
                  data={data['item']}
                />
              </View>
            );
          }}
        </Fetch>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInput_8O}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={page}
        onChangeText={page => setPage(page)}
      />
      <TextInput
        style={styles.TextInputp9}
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
  View_1I: {
    alignSelf: 'stretch',
    paddingRight: 24,
    flexDirection: 'row',
  },
  ViewrP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  KeyboardAvoidingView_0I: {
    maxWidth: 600,
    width: '100%',
  },
  ScreenContainerkg: {
    alignItems: 'center',
  },
  Touchablel1: {
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  FieldSearchBarFullIJ: {
    width: '100%',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  ViewkP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 32,
    alignItems: 'center',
  },
  Viewhq: {
    flexDirection: 'row',
  },
  TouchableFb: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  Viewqy: {
    alignItems: 'center',
  },
  ActivityIndicatorZH: {
    width: 36,
    height: 36,
  },
  ViewQp: {
    alignItems: 'flex-start',
  },
  ViewVG: {
    paddingTop: 10,
    alignItems: 'flex-start',
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 10,
  },
  Text_2C: {
    textAlign: 'center',
  },
  FlatListZq: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 44,
  },
  TextInput_8O: {
    opacity: 0,
  },
  Views8: {
    flexDirection: 'row',
  },
  TextInputp9: {
    opacity: 0,
  },
  TouchableGV: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5,
    paddingRight: 5,
    marginLeft: 5,
  },
});

export default withTheme(ListofClientScreen);