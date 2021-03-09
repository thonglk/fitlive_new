import React from 'react';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import * as AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SettingLanguageScreen = props => {
  const [lang, setLang] = React.useState(undefined);
  const { theme } = props;

  React.useEffect(() => {
    //console.log()
    getLang();
  });
  const setLangVi = async () => {
    styles.TouchableHl = StyleSheet.flatten([
      styles.TouchableHl,
      {
        backgroundColor: theme.colors.background,
      },
    ]);
    styles.TouchableqC = StyleSheet.flatten([
      styles.TouchableqC,
      {
        backgroundColor: theme.colors.secondary,
      },
    ]);
    await AsyncStorage.setItem('language', 'vi');
    setLang('vi');
    if (window && window.location) window.location.reload(false);
  };

  const setLangEn = async () => {
    styles.TouchableHl = StyleSheet.flatten([
      styles.TouchableHl,
      {
        backgroundColor: theme.colors.secondary,
      },
    ]);
    styles.TouchableqC = StyleSheet.flatten([
      styles.TouchableqC,
      {
        backgroundColor: theme.colors.background,
      },
    ]);
    await AsyncStorage.setItem('language', 'en');
    if (window && window.location) window.location.reload(false);

    setLang('en');
  };

  const getLang = async () => {
    const languageString = await AsyncStorage.getItem('language');
    if (languageString == 'en')
      styles.TouchableHl = StyleSheet.flatten([
        styles.TouchableHl,
        {
          backgroundColor: theme.colors.secondary,
        },
      ]);
    else
      styles.TouchableqC = StyleSheet.flatten([
        styles.TouchableqC,
        {
          backgroundColor: theme.colors.secondary,
        },
      ]);
    setLang(languageString);
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerFb}
      scrollable={false}
      hasSafeArea={true}
    >
      <View
        style={StyleSheet.flatten([
          styles.ViewkB,
          { backgroundColor: theme.colors.surface },
        ])}
      >
        <Touchable
          onPress={setLangVi}
          style={StyleSheet.flatten([
            styles.TouchableqC,
            {
              borderRadius: theme.borderRadius.global,
              borderColor: theme.colors.light,
            },
          ])}
        >
          <Text style={{ color: theme.colors.strong }}>Tiếng Việt</Text>
        </Touchable>

        <Touchable
          onPress={setLangEn}
          style={StyleSheet.flatten([
            styles.TouchableHl,
            {
              borderRadius: theme.borderRadius.global,
              borderColor: theme.colors.light,
            },
          ])}
        >
          <Text style={{ color: theme.colors.strong }}>English</Text>
        </Touchable>
      </View>
      <TextInput
        style={styles.TextInputnh}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={lang}
        onChangeText={lang => setLang(lang)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ScreenContainerFb: {
    alignItems: 'center',
  },
  TouchableqC: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
  ViewkB: {
    marginBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
    width: '100%',
    maxWidth: 600,
  },
  TextInputnh: {
    opacity: 0,
  },
  TouchableHl: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
  },
});

export default withTheme(SettingLanguageScreen);