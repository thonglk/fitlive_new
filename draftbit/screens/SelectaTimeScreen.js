import React from 'react';
import {
  Button,
  Container,
  DatePicker,
  Divider,
  ScreenContainer,
  Stepper,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const SelectaTimeScreen = props => {
  const [date, setDate] = React.useState(undefined);
  const [time, setTime] = React.useState(undefined);
  const [number_session, setNumber_session] = React.useState(undefined);
  const [total_member, setTotal_member] = React.useState(undefined);
  const [sessionType, setSessionType] = React.useState(undefined);
  const [loader, setLoader] = React.useState(undefined);
  const { theme } = props;

  const submitBooking = async () => {
    const url = `https://fitlive.glitch.me/bookSession`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      clientId: props.route.params['clientId'],
      date: date,
      locationId: props.route.params['locationId'],
      start_hour: time,
      number_session: number_session,
      total_member: total_member,
      sessionType: sessionType,
      coachId: props.route.params['userId'],
      userId: props.route.params['userId'],
    });

    try {
      if (loader) return console.log(loader);
      setLoader('Loading...');
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      setLoader(undefined);

      if (result.error) throw new Error(result.error);
      alert(result.msg);
      props.navigation.navigate('HomepageAdminScreen', {
        userId: props.route.params['userId'],
      });
    } catch (error) {
      setLoader(undefined);

      alert(error);
    }
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerbe}
      hasSafeArea={true}
      scrollable={true}
    >
      <View
        style={styles.Viewrj}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <View style={styles.Viewfq}>
          <Text
            style={StyleSheet.flatten([
              styles.TextnR,
              theme.typography.caption,
              { color: theme.colors.strong },
            ])}
          >
            [@SelectTime@]
          </Text>
        </View>

        <View
          style={styles.ViewJ7}
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
            <View
              style={styles.ViewXW}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <DatePicker
                style={styles.DatePickerfq}
                label="Date"
                mode="date"
                leftIconMode="inset"
                type="solid"
                date={date}
                onDateChange={date => setDate(date)}
                disabled={false}
                error={false}
                options={[]}
                timeZoneOffsetInMinutes={420}
              />
              <DatePicker
                label="Time"
                mode="time"
                leftIconMode="inset"
                type="solid"
                date={time}
                onDateChange={time => setTime(time)}
                timeZoneOffsetInMinutes={420}
                locale=""
                minuteInterval="15"
              />
            </View>
          </View>
        </View>

        <View
          style={styles.ViewNP}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
          accessible={true}
        >
          <View
            style={styles.ViewTJ}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              style={styles.View_7B}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.Text_6o,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@HowManySession@]
              </Text>

              <Text
                style={StyleSheet.flatten([
                  styles.TextBb,
                  theme.typography.custom53,
                  { color: theme.colors.light },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
                onChangeText={number_session =>
                  setNumber_session(number_session)
                }
                value={number_session}
                onChange={number_session => setNumber_session(number_session)}
              >
                1 session = 60 minutes
              </Text>
            </View>
            <Stepper
              iconSize={24}
              iconColor={theme.colors.strong}
              value={number_session}
              onChange={number_session => setNumber_session(number_session)}
              onChangeText={number_session => setNumber_session(number_session)}
            />
          </View>

          <View
            style={styles.ViewhU}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              style={styles.ViewLb}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.TextgN,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@HowManyMember@]
              </Text>
            </View>
            <Stepper
              iconSize={24}
              iconColor={theme.colors.strong}
              value={total_member}
              onChange={total_member => setTotal_member(total_member)}
              onChangeText={total_member => setTotal_member(total_member)}
            />
          </View>

          <View
            style={styles.View_6V}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              style={styles.ViewrH}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <Text
                style={StyleSheet.flatten([
                  styles.TextIc,
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@SessionType@]
              </Text>
            </View>

            <Container style={styles.ContaineriM} useThemeGutterPadding={true}>
              <TextInput
                style={StyleSheet.flatten([
                  styles.TextInputMj,
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
                onChangeText={sessionType => setSessionType(sessionType)}
                value={sessionType}
                placeholderTextColor={theme.colors.medium}
                clearButtonMode="while-editing"
                enablesReturnKeyAutomatically={true}
                spellcheck={true}
                returnKeyType="done"
                textContentType="none"
                placeholder="PT/Stretching/Kickfit..."
                defaultValue=""
              />
            </Container>
          </View>

          <View
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              style={styles.ViewP9}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            />
          </View>
        </View>
        <Divider
          style={styles.DivideroT}
          color={theme.colors.divider}
          height={1}
        />
        <View
          style={styles.ViewKt}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button onPress={submitBooking} type="solid">
            {loader || '[@Submit@]'}
          </Button>
        </View>
      </View>
      <TextInput
        style={styles.TextInputKR}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={loader}
        onChangeText={loader => setLoader(loader)}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  DatePickerfq: {
    marginBottom: 5,
  },
  ViewXW: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Text_6o: {
    textTransform: 'uppercase',
  },
  ScreenContainerbe: {
    alignItems: 'center',
  },
  View_7B: {
    paddingBottom: 12,
  },
  ViewTJ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  TextgN: {
    textTransform: 'uppercase',
  },
  TextInputMj: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextIc: {
    textTransform: 'uppercase',
  },
  ViewP9: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewLb: {
    paddingBottom: 12,
  },
  ViewrH: {
    paddingBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  Viewrj: {
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  TextnR: {
    textTransform: 'uppercase',
  },
  Viewfq: {
    paddingTop: 10,
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ViewJ7: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  TextBb: {
    textTransform: 'capitalize',
  },
  ViewhU: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  ContaineriM: {
    alignItems: 'flex-start',
  },
  TextInputKR: {
    opacity: 0,
  },
  ViewNP: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  View_6V: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
    marginTop: 12,
  },
  DivideroT: {
    height: 1,
  },
  ViewKt: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
});

export default withTheme(SelectaTimeScreen);