import React from 'react';
import {
  FieldSearchBarFull,
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

const ListofColleagesScreen = props => {
  const [searchValue, setSearchValue] = React.useState(undefined);
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Touchable
          onPress={() =>
            props.navigation.navigate('AddCoachScreen', {
              userId: props.route.params['userId'],
            })
          }
          style={{
            paddingLeft: 5,
            paddingRight: 24,
          }}
        >
          <Text>[@AddColleage@]</Text>
        </Touchable>
      ),
    });

    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });

    return unsubscribe;
  });
  const refresh = () => {
    setUpdate(Date.now());
  };

  const onPressXSNkZ5wI = item => {
    const data = item;
    navigation.navigate('EditCoachScreen', {
      userId: props.route.params['userId'],
      coachId: item['coachId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerLr}
      scrollable={true}
      hasSafeArea={true}
    >
      <View style={styles.View_1b}>
        <FieldSearchBarFull
          style={StyleSheet.flatten([
            styles.FieldSearchBarFull_4j,
            {
              borderRadius: theme.borderRadius.global,
              borderColor: theme.colors.divider,
            },
          ])}
          onChange={searchValue => setSearchValue(searchValue)}
          placeholder="Search"
          value={searchValue}
        />
        <Fetch
          onChangeText={update => setUpdate(update)}
          value={update}
          url={`https://fitlive.glitch.me/getCoach?update=${encodeURIComponent(
            update
          )}&search=${encodeURIComponent(
            searchValue
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
              return (
                <Text
                  style={StyleSheet.flatten([
                    styles.Text_4s,
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
                  style={styles.Viewwy}
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <ActivityIndicator
                    style={styles.ActivityIndicatorBN}
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
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewct,
                      { backgroundColor: theme.colors.surface },
                    ])}
                    importantForAccessibility="auto"
                    accessible={true}
                    pointerEvents="auto"
                    hitSlop={{}}
                  >
                    <View
                      style={styles.Viewas}
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
                        textBreakStrategy="highQuality"
                        accessible={true}
                        ellipsizeMode="tail"
                        allowFontScaling={true}
                      >
                        {item && item['fullName']}
                      </Text>

                      <Touchable
                        onPress={() => onPressXSNkZ5wI(item)}
                        style={StyleSheet.flatten([
                          styles.TouchablezY,
                          {
                            borderRadius: theme.borderRadius.global,
                            borderColor: theme.colors.medium,
                          },
                        ])}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.Text_31,
                            theme.typography.custom61,
                            { color: theme.colors.medium },
                          ])}
                        >
                          Edit
                        </Text>
                      </Touchable>
                    </View>

                    <View
                      style={styles.ViewRS}
                      hitSlop={{}}
                      importantForAccessibility="auto"
                      pointerEvents="auto"
                      accessible={true}
                    >
                      <View
                        style={styles.ViewP5}
                        pointerEvents="auto"
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom18,
                            { color: theme.colors.custom_rgb134_139_145 },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          CoachID
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom22,
                            { color: theme.colors.strong },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          {item && item['coachId']}
                        </Text>
                      </View>

                      <View
                        style={styles.View_1n}
                        pointerEvents="auto"
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom18,
                            { color: theme.colors.custom_rgb134_139_145 },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          Email
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom22,
                            { color: theme.colors.strong },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          {item && item['email']}
                        </Text>
                      </View>

                      <View
                        style={styles.ViewOc}
                        pointerEvents="auto"
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom18,
                            { color: theme.colors.custom_rgb134_139_145 },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          Phone
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom22,
                            { color: theme.colors.strong },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          {item && item['phone']}
                        </Text>
                      </View>

                      <View
                        style={styles.Viewj0}
                        pointerEvents="auto"
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                      >
                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom18,
                            { color: theme.colors.custom_rgb134_139_145 },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          Role
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.custom22,
                            { color: theme.colors.strong },
                          ])}
                          accessible={true}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                        >
                          {item && item['role']}
                        </Text>
                      </View>

                      <View
                        style={styles.Viewo7}
                        pointerEvents="auto"
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                      >
                        <Text style={{ color: theme.colors.strong }}>
                          {item && item['permission']}
                        </Text>
                      </View>
                    </View>
                  </View>
                )}
                data={data}
              />
            );
          }}
        </Fetch>
      </View>
      <TextInput
        style={styles.TextInputoV}
        value={update}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={update => setUpdate(update)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  FieldSearchBarFull_4j: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    width: '100%',
  },
  ScreenContainerLr: {
    alignItems: 'center',
  },
  Viewas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ViewP5: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  Viewct: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    flexWrap: 'wrap',
    alignContent: 'stretch',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
  },
  ActivityIndicatorBN: {
    width: 36,
    height: 36,
  },
  Viewwy: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_4s: {
    textAlign: 'center',
  },
  View_1b: {
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 24,
    width: '100%',
    maxWidth: 600,
  },
  Text_31: {
    marginBottom: 4,
  },
  TextInputoV: {
    opacity: 0,
  },
  TouchablezY: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    flexWrap: 'wrap',
    maxWidth: 50,
  },
  ViewRS: {
    width: '100%',
  },
  View_1n: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewOc: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  Viewj0: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  Viewo7: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    maxWidth: 500,
  },
});

export default withTheme(ListofColleagesScreen);