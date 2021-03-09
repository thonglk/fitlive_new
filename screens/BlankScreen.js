import React from 'react';
import { Picker, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const BlankScreen = props => {
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={styles.Viewab}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Picker
          placeholder="Select an option"
          leftIconMode="inset"
          type="underline"
          value={pickerValue}
          onChange={pickerValue => setPickerValue(pickerValue)}
          options={[
            { value:'ASD', icon: '', label: 'a' },
            { value:'FGH', icon: '', label: 'b' },
            { value:'HJK', icon: '', label: 'c' },
          ]}
        />
        <Text style={{ color: theme.colors.strong }}>{pickerValue}</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewab: {
    alignItems: 'center',
  },
});

export default withTheme(BlankScreen);