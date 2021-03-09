import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

const ClientDetailScreen = props => {
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Touchable
          onPress={() =>
            props.navigation.navigate('ClientEditScreen', {
              userId: props.route.params['userId'],
              businessId: props.route.params['businessId'],

              clientId: props.route.params['clientId'],
            })
          }
          style={{
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <Text>Edit</Text>
        </Touchable>
      ),
    });

    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });

  const onPressqLaaWuW1 = item => {
    const data = item;
    navigation.navigate('SelectLocationScreen', {
      clientId: data && data['clientId'],
      clientName: data && data['firstName'],
      userId: props.route.params['userId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerfJ}
      hasSafeArea={true}
      scrollable={true}
    >
      <View
        style={styles.ViewqV}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Fetch
          url={`https://fitlive.glitch.me/clientDetail?userId=${encodeURIComponent(
            props.route.params['userId']
          )}&clientId=${encodeURIComponent(
            props.route.params['clientId']
          )}&update=${encodeURIComponent(update)}`}
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
              <ScrollView
                contentContainerStyle={styles.ScrollViewVp}
                showsVerticalScrollIndicator={true}
                bounces={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.View_4x}>
                  <View
                    style={styles.Viewo0}
                    pointerEvents="auto"
                    hitSlop={{}}
                    importantForAccessibility="auto"
                    accessible={true}
                  >
                    <Text
                      style={StyleSheet.flatten([
                        styles.Textot,
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['firstName']}
                    </Text>

                    <Text
                      style={StyleSheet.flatten([
                        styles.Textit,
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ])}
                    >
                      &nbsp;
                    </Text>

                    <Text
                      style={StyleSheet.flatten([
                        styles.TextSy,
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['lastName']}
                    </Text>
                  </View>

                  <View
                    style={styles.ViewVu}
                    hitSlop={{}}
                    pointerEvents="auto"
                    accessible={true}
                    importantForAccessibility="auto"
                  >
                    <Touchable style={styles.Touchablen0}>
                      <View
                        style={styles.Viewcg}
                        pointerEvents="auto"
                        accessible={true}
                        hitSlop={{}}
                        importantForAccessibility="auto"
                      >
                        <Icon
                          style={styles.Icon_3X}
                          size={20}
                          name="FontAwesome/phone-square"
                          color={theme.colors.primary}
                        />
                        <Text
                          style={StyleSheet.flatten([
                            styles.TextC2,
                            theme.typography.subtitle2,
                            { color: theme.colors.primary },
                          ])}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                          accessible={true}
                        >
                          {data && data['phone']}
                        </Text>
                      </View>
                    </Touchable>

                    <Touchable style={styles.TouchableC9}>
                      <View
                        style={styles.ViewxK}
                        pointerEvents="auto"
                        accessible={true}
                        hitSlop={{}}
                        importantForAccessibility="auto"
                      >
                        <Icon
                          style={styles.IconHw}
                          size={20}
                          name="MaterialIcons/email"
                          color={theme.colors.primary}
                        />
                        <Text
                          style={StyleSheet.flatten([
                            styles.Textt9,
                            theme.typography.subtitle2,
                            { color: theme.colors.primary },
                          ])}
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          ellipsizeMode="tail"
                          accessible={true}
                        >
                          {data && data['email']}
                        </Text>
                      </View>
                    </Touchable>
                  </View>
                </View>

                <View
                  style={styles.Viewaj}
                  pointerEvents="auto"
                  importantForAccessibility="auto"
                  accessible={true}
                  hitSlop={{}}
                >
                  <View
                    style={styles.View_1t}
                    accessible={true}
                    pointerEvents="auto"
                    importantForAccessibility="auto"
                    hitSlop={{}}
                  >
                    <View
                      style={styles.ViewmU}
                      hitSlop={{}}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                    >
                      <View
                        pointerEvents="auto"
                        hitSlop={{}}
                        accessible={true}
                        importantForAccessibility="auto"
                      >
                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.caption,
                            { color: theme.colors.medium },
                          ])}
                          allowFontScaling={true}
                          textBreakStrategy="highQuality"
                          accessible={true}
                          ellipsizeMode="tail"
                        >
                          Coached By
                        </Text>

                        <Text
                          style={StyleSheet.flatten([
                            theme.typography.headline4,
                            { color: theme.colors.strong },
                          ])}
                          ellipsizeMode="tail"
                          textBreakStrategy="highQuality"
                          allowFontScaling={true}
                          accessible={true}
                        >
                          {data && data['coachName']}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={styles.ViewGt}
                  pointerEvents="auto"
                  hitSlop={{}}
                  accessible={true}
                  importantForAccessibility="auto"
                >
                  <Button
                    onPress={() => onPressqLaaWuW1(data)}
                    style={StyleSheet.flatten([
                      styles.ButtonJT,
                      { borderRadius: theme.borderRadius.global },
                    ])}
                    type="solid"
                  >
                    Book Session
                  </Button>
                </View>
              </ScrollView>
            );
          }}
        </Fetch>
      </View>
      <TextInput
        style={styles.TextInputL1}
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
  Viewo0: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  Icon_3X: {
    alignSelf: 'flex-start',
    width: 24,
    height: 24,
  },
  Viewcg: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewmU: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  View_1t: {
    marginTop: 12,
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  ButtonJT: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  ScreenContainerfJ: {
    alignItems: 'center',
  },
  IconHw: {
    alignSelf: 'flex-start',
    width: 24,
    height: 24,
  },
  ViewxK: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewqV: {
    width: '100%',
    maxWidth: 600,
  },
  Textot: {
    marginBottom: 6,
  },
  View_4x: {
    paddingBottom: 14,
    paddingTop: 14,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'flex-start',
  },
  Touchablen0: {
    flexWrap: 'wrap',
  },
  TextC2: {
    marginLeft: 8,
  },
  ViewVu: {
    marginTop: 24,
  },
  Viewaj: {
    paddingBottom: 17,
    paddingTop: 17,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ScrollViewVp: {
    flexGrow: 1,
  },
  Textt9: {
    marginLeft: 8,
  },
  TextInputL1: {
    opacity: 0,
  },
  TouchableC9: {
    flexWrap: 'wrap',
  },
  Textit: {
    marginBottom: 6,
  },
  ViewGt: {
    paddingBottom: 54,
    paddingLeft: 32,
    paddingTop: 17,
    paddingRight: 32,
  },
  TextSy: {
    marginBottom: 6,
  },
});

export default withTheme(ClientDetailScreen);