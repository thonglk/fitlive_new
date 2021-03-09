import React from 'react';
                     import {lang} from '../config/config';

import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const LocationListScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressdwEP25Vj = item => {
    const data = item;
    navigation.navigate('AddLocationScreen', {
      userId: props.route.params['userId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_2Q}
      scrollable={true}
      hasSafeArea={true}
    >
      <View style={styles.ViewsL}>
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
              <FlatList
                renderItem={({ item }) => (
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewaf,
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
                    <View style={styles.ViewAG}>
                      <View
                        style={styles.ViewHn}
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
                )}
                contentContainerStyle={styles.FlatListjv}
                data={data}
              />
            );
          }}
        </Fetch>
        <Button
          onPress={onPressdwEP25Vj}
          style={{ borderRadius: theme.borderRadius.global }}
          type="outline"
        >
          {lang("AddLocation")}
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewHn: {
    alignSelf: 'stretch',
    paddingRight: 24,
    paddingLeft: 10,
  },
  Viewaf: {
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
  FlatListjv: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
  },
  ScreenContainer_2Q: {
    alignItems: 'center',
  },
  ViewAG: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewsL: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
    paddingLeft: 32,
    paddingRight: 32,
  },
});

export default withTheme(LocationListScreen);