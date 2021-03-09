import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const SelectLocationScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressJWWv2aaa = item => {
    const data = item;
    navigation.navigate('SelectaTimeScreen', {
      clientId: props.route.params['clientId'],
      clientName: props.route.params['clientName'],
      userId: props.route.params['userId'],
      locationId: item['locationId'],
      location: item['location'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerAu}
      scrollable={true}
      hasSafeArea={true}
    >
      <View style={styles.ViewNH}>
        <Text
          style={StyleSheet.flatten([
            styles.TextWv,
            theme.typography.caption,
            { color: theme.colors.strong },
          ])}
        >
          [@SelectLocation@]
        </Text>
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
              <FlatList
                renderItem={({ item }) => (
                  <Touchable onPress={() => onPressJWWv2aaa(item)}>
                    <View
                      style={StyleSheet.flatten([
                        styles.Viewvz,
                        {
                          borderRadius: theme.borderRadius.global,
                          borderColor: theme.colors.light,
                          backgroundColor: theme.colors.surface,
                        },
                      ])}
                      hitSlop={{}}
                      accessible={true}
                      importantForAccessibility="auto"
                      pointerEvents="auto"
                    >
                      <View style={styles.ViewWz}>
                        <Icon
                          style={styles.IconWO}
                          size={24}
                          color={theme.colors.strong}
                          name="AntDesign/rightcircleo"
                        />
                        <View
                          style={styles.Viewn4}
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
                            {item && item['location']}
                          </Text>

                          <Text
                            style={StyleSheet.flatten([
                              theme.typography.caption,
                              { color: theme.colors.light },
                            ])}
                            allowFontScaling={true}
                          >
                            {item && item['address']}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Touchable>
                )}
                contentContainerStyle={styles.FlatListyd}
                data={data}
              />
            );
          }}
        </Fetch>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconWO: {
    width: 24,
    height: 24,
  },
  Viewvz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
    marginTop: 3,
    marginBottom: 3,
  },
  FlatListyd: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
  },
  ScreenContainerAu: {
    alignItems: 'center',
  },
  ViewWz: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextWv: {
    marginLeft: 32,
    textTransform: 'uppercase',
  },
  ViewNH: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  Viewn4: {
    alignSelf: 'stretch',
    paddingRight: 24,
    paddingLeft: 10,
  },
});

export default withTheme(SelectLocationScreen);