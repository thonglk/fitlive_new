import React from 'react';
import { Icon, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const BusinessSettingScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const onPressPMDA8bJP = item => {
    const data = item;
    navigation.navigate('ListofColleagesScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPress7UXqCPYa = item => {
    const data = item;
    navigation.navigate('AddLocationScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPressbma99dOH = item => {
    const data = item;
    navigation.navigate('InsightScreen', {
      userId: props.route.params['userId'],
    });
  };
  const onPresseISiuElt = item => {
    const data = item;
    navigation.navigate('OrderCreateScreen', {
      userId: props.route.params['userId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerlM}
      scrollable={false}
      hasSafeArea={true}
    >
      <View
        style={StyleSheet.flatten([
          styles.ViewL6,
          { backgroundColor: theme.colors.surface },
        ])}
      >
        <Text
          style={StyleSheet.flatten([
            theme.typography.headline6,
            { color: theme.colors.strong },
          ])}
        >
          [@BusinessSetting@]
        </Text>

        <Touchable onPress={onPressPMDA8bJP} style={styles.TouchableNj}>
          <View style={styles.ViewAB}>
            <Icon
              style={styles.IconJZ}
              color={theme.colors.strong}
              name="FontAwesome/user"
              size={24}
            />
            <Text
              style={StyleSheet.flatten([
                styles.Textf1,
                { color: theme.colors.strong },
              ])}
            >
              [@Coach@]
            </Text>
          </View>
        </Touchable>

        <Touchable onPress={onPress7UXqCPYa} style={styles.TouchableST}>
          <View style={styles.ViewSN}>
            <Icon
              style={styles.Iconw6}
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/location-arrow"
            />
            <Text
              style={StyleSheet.flatten([
                styles.TextXT,
                { color: theme.colors.strong },
              ])}
            >
              [@Location@]
            </Text>
          </View>
        </Touchable>

        <Touchable onPress={onPressbma99dOH} style={styles.Touchablelv}>
          <View style={styles.ViewwB}>
            <Icon
              style={styles.IconD9}
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/bar-chart-o"
            />
            <Text
              style={StyleSheet.flatten([
                styles.Texthn,
                { color: theme.colors.strong },
              ])}
            >
              [@Insight@]
            </Text>
          </View>
        </Touchable>

        <Touchable onPress={onPresseISiuElt} style={styles.Touchablevs}>
          <View style={styles.ViewgS}>
            <Icon
              style={styles.Iconbn}
              color={theme.colors.strong}
              size={24}
              name="FontAwesome/shopping-cart"
            />
            <Text
              style={StyleSheet.flatten([
                styles.TextNm,
                { color: theme.colors.strong },
              ])}
            >
              [@CreateOrder@]
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  IconJZ: {
    width: 24,
    height: 24,
  },
  ScreenContainerlM: {
    alignItems: 'center',
  },
  Iconw6: {
    width: 24,
    height: 24,
  },
  IconD9: {
    width: 24,
    height: 24,
  },
  Iconbn: {
    width: 24,
    height: 24,
  },
  ViewAB: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewL6: {
    marginBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
    width: '100%',
    maxWidth: 600,
  },
  ViewSN: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewwB: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewgS: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TouchableNj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    width: '100%',
  },
  Textf1: {
    marginLeft: 8,
  },
  TextXT: {
    marginLeft: 8,
  },
  Texthn: {
    marginLeft: 8,
  },
  TextNm: {
    marginLeft: 8,
  },
  TouchableST: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
  },
  Touchablelv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
  },
  Touchablevs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default withTheme(BusinessSettingScreen);