import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AddLocationScreen = props => {
  const [location, setLocation] = React.useState(undefined);
  const [address, setAddress] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  const addLocation = async () => {
    const url = `https://server.fitlive.fit/addLocation`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      location: location,
      address: address,
      userId: props.route.params['userId'],
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressK9iSjSBb = () => navigation.goBack();

  return (
    <ScreenContainer
      style={styles.ScreenContainergK}
      hasSafeArea={true}
      scrollable={true}
    >
      <View
        style={styles.Viewjt}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Touchable onPress={onPressK9iSjSBb} style={styles.Touchablesw}>
          <Icon
            color={theme.colors.strong}
            size={30}
            name="AntDesign/arrowleft"
          />
        </Touchable>

        <Text
          style={StyleSheet.flatten([
            theme.typography.headline3,
            { color: theme.colors.strong },
          ])}
        >
          Add Location
        </Text>
      </View>

      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewar}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollView_8i}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewqZ}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.TextRV,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                Name of Location
              </Text>

              <View
                style={styles.ViewWx}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInput_2D,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="default"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={location => setLocation(location)}
                  value={location}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.Viewzv}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
              accessible={true}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.Text_3v,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                Address
              </Text>

              <View
                style={styles.ViewRi}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputjP,
                    {
                      backgroundColor: theme.colors.background,
                      borderColor: theme.colors.divider,
                      borderRadius: theme.borderRadius.global,
                      color: theme.colors.strong,
                    },
                  ])}
                  keyboardType="default"
                  autoCapitalize="none"
                  allowFontScaling={true}
                  onChangeText={address => setAddress(address)}
                  value={address}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="creditcardnumber"
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.Viewz6}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={addLocation}
            style={StyleSheet.flatten([
              styles.ButtonLv,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            Add
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextRV: {
    textTransform: 'uppercase',
  },
  TextInput_2D: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewqZ: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ScrollView_8i: {
    flexGrow: 1,
  },
  ButtonLv: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenContainergK: {
    alignItems: 'center',
  },
  Text_3v: {
    textTransform: 'uppercase',
  },
  TextInputjP: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Touchablesw: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  Viewjt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
    width: '100%',
  },
  ViewWx: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  KeyboardAvoidingViewar: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
  },
  Viewz6: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  ViewRi: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewzv: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(AddLocationScreen);
