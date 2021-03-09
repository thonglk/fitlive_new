import React from 'react';
import {
  DatePicker,
  FieldSearchBarFull,
  Picker,
  ScreenContainer,
  Stepper,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text } from 'react-native';

const BlankScreen = props => {
  const [pickerValue, setPickerValue] = React.useState(undefined);
  const [stepperValue, setStepperValue] = React.useState(undefined);
  const [date, setDate] = React.useState(undefined);
  const [searchBarValue, setSearchBarValue] = React.useState(undefined);
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Picker
        placeholder="Select an option"
        leftIconMode="inset"
        type="solid"
        value={pickerValue}
        onChange={pickerValue => setPickerValue(pickerValue)}
        options={[
          { icon: '', label: 's' },
          { icon: '', label: 'n' },
        ]}
      />
      <Stepper
        iconSize={24}
        iconColor={theme.colors.strong}
        value={stepperValue}
        onChange={stepperValue => setStepperValue(stepperValue)}
      />
      <Text
        style={{ color: theme.colors.strong }}
        onChange={stepperValue => setStepperValue(stepperValue)}
        value={stepperValue}
      >
        {stepperValue}
      </Text>
      <DatePicker
        label="Date"
        mode="date"
        leftIconMode="inset"
        type="solid"
        date={date}
        onDateChange={date => setDate(date)}
      />
      <FieldSearchBarFull
        placeholder="Search for..."
        value={searchBarValue}
        onChange={searchBarValue => setSearchBarValue(searchBarValue)}
      />
      <Text style={{ color: theme.colors.strong }}>Hello World!</Text>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
