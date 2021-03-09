import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SettingScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPresspGWKDBoe = item => {
    const data = item;
    navigation.navigate('ChangePasswordScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPressAt7CaQbb = item => {
    const data = item;
    navigation.navigate('SettingLanguageScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPressaVu4tCB5 = item => {
    const data = item;
    navigation.navigate('LogOutScreen', {});
  };
  const onPressWBdJTO2N = item => {
    const data = item;
    navigation.navigate('NotificationPermissionsScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPressTpy22713 = item => {
    const data = item;
    navigation.navigate('CheckUpdateScreen', {
      userId: props.route.params['userId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerx3}
      scrollable={false}
      hasSafeArea={true}
    >
      <View
        style={styles.ViewB7}
        hitSlop={{}}
        importantForAccessibility="auto"
        accessible={true}
        pointerEvents="auto"
      >
        <View
          style={styles.ViewuJ}
          accessible={true}
          hitSlop={{}}
          pointerEvents="auto"
          importantForAccessibility="auto"
        >
          <Touchable onPress={onPresspGWKDBoe}>
            <View
              style={styles.ViewSm}
              pointerEvents="auto"
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.ViewXb}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
                hitSlop={{}}
              >
                <View
                  style={styles.ViewGb}
                  hitSlop={{}}
                  pointerEvents="auto"
                  accessible={true}
                  importantForAccessibility="auto"
                >
                  <Icon
                    style={styles.Iconpz}
                    color={theme.colors.strong}
                    size={34}
                    name="FontAwesome/lock"
                  />
                </View>

                <View
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                  >
                    {'[@ChangePassword@]'}
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.IcondD}
                size={24}
                name="FontAwesome/chevron-right"
                color={theme.colors.strong}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.DividerN1}
            height={1}
            color={theme.colors.divider}
          />
          <Touchable onPress={onPressAt7CaQbb}>
            <View
              style={styles.ViewaU}
              pointerEvents="auto"
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.ViewVa}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
                hitSlop={{}}
              >
                <View
                  style={styles.ViewpB}
                  hitSlop={{}}
                  pointerEvents="auto"
                  accessible={true}
                  importantForAccessibility="auto"
                >
                  <Icon
                    style={styles.Iconuc}
                    color={theme.colors.strong}
                    size={34}
                    name="FontAwesome/globe"
                  />
                </View>

                <View
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                  >
                    {'[@Language@]'}
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.IconzE}
                size={24}
                name="FontAwesome/chevron-right"
                color={theme.colors.strong}
              />
            </View>
          </Touchable>
          <Divider
            style={styles.Divider_0U}
            height={1}
            color={theme.colors.divider}
          />
          <Touchable onPress={onPressWBdJTO2N} style={styles.Touchable_0T}>
            <View
              style={styles.ViewYK}
              pointerEvents="auto"
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.View_1u}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
                hitSlop={{}}
              >
                <View
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                  >
                    {'[@Notification@]'}
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.Iconva}
                size={24}
                name="FontAwesome/chevron-right"
                color={theme.colors.strong}
              />
            </View>
          </Touchable>

          <Touchable onPress={onPressTpy22713} style={styles.Touchablen0}>
            <View
              style={styles.ViewsH}
              pointerEvents="auto"
              hitSlop={{}}
              accessible={true}
              importantForAccessibility="auto"
            >
              <View
                style={styles.ViewAq}
                pointerEvents="auto"
                importantForAccessibility="auto"
                accessible={true}
                hitSlop={{}}
              >
                <View
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  accessible={true}
                  pointerEvents="auto"
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline6,
                      { color: theme.colors.strong },
                    ])}
                    ellipsizeMode="tail"
                    accessible={true}
                    textBreakStrategy="highQuality"
                    allowFontScaling={true}
                  >
                    {'[@AppUpdate@]'}
                  </Text>
                </View>
              </View>
              <Icon
                style={styles.Iconao}
                size={24}
                name="FontAwesome/chevron-right"
                color={theme.colors.strong}
              />
            </View>
          </Touchable>
        </View>

        <View
          style={StyleSheet.flatten([
            styles.ViewV8,
            { backgroundColor: theme.colors.surface },
          ])}
        >
          <Touchable onPress={onPressaVu4tCB5} style={styles.Touchable_7q}>
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.error },
              ])}
            >
              {'[@LogOut@]'}
            </Text>
          </Touchable>
        </View>

        <View
          style={styles.Viewva}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Text
            style={StyleSheet.flatten([
              theme.typography.caption,
              { color: theme.colors.strong },
            ])}
            ellipsizeMode="tail"
            accessible={true}
            textBreakStrategy="highQuality"
            allowFontScaling={true}
          >
            {'Last update: Today'}
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ScreenContainerx3: {
    alignItems: 'center',
  },
  Iconpz: {
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  ViewGb: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewXb: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewSm: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  ViewuJ: {
    paddingLeft: 32,
    paddingBottom: 14,
    paddingTop: 14,
    paddingRight: 32,
  },
  ViewB7: {
    width: '100%',
    maxWidth: 600,
  },
  Iconuc: {
    width: 40,
    height: 40,
    maxWidth: 40,
    maxHeight: 40,
  },
  ViewpB: {
    width: 34,
    height: 34,
    marginRight: 14,
    maxWidth: 34,
    maxHeight: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewVa: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewaU: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  View_1u: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewYK: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  ViewAq: {
    maxWidth: '80%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewsH: {
    paddingTop: 12,
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 12,
  },
  IcondD: {
    width: 24,
    height: 24,
  },
  IconzE: {
    width: 24,
    height: 24,
  },
  Iconva: {
    width: 24,
    height: 24,
  },
  DividerN1: {
    height: 1,
  },
  Iconao: {
    width: 24,
    height: 24,
  },
  ViewV8: {
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    width: '100%',
    maxWidth: 600,
  },
  Viewva: {
    bottom: 0,
    marginLeft: 10,
    marginRight: 10,
  },
  Divider_0U: {
    height: 1,
  },
  Touchable_7q: {
    alignItems: 'center',
  },
  Touchable_0T: {
    opacity: 0,
  },
  Touchablen0: {
    opacity: 0,
  },
});

export default withTheme(SettingScreen);