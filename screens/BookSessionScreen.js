import React from 'react';
import {
  Button,
  DatePicker,
  Divider,
  Icon,
  ProgressBar,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

const BookSessionScreen = props => {
  const [date, setDate] = React.useState(undefined);
  const [time, setTime] = React.useState(undefined);
  const [how_long, setHow_long] = React.useState(undefined);
  const [note, setNote] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  const submitFunc = () => {
    async () => {
      const url = `https://server.fitlive.fit/bookSession`;
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const body = JSON.stringify({
        clientId: clientId,
        location: location,
        date: date,
        start_hour: start_hour,
        how_long: how_long,
        note: note,
        coachId: props.route.params['userId'],
        userId: props.route.params['userId'],
      });

      try {
        await fetch(url, {
          method: 'POST',
          headers,
          body,
        });
      } catch (error) {
        alert(error);
      }
    };
  };

  const handleButtonhsDcp5xHPress = async () => {
      const url = `https://server.fitlive.fit/bookSession`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      clientId: null,
      location: null,
      date: null,
      start_hour: null,
      how_long: null,
      note: note,
      coachId: props.route.params['userId'],
      userId: props.route.params['userId'],
    });

    try {
      await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onPressxkWgix1c = () => navigation.goBack();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <View
        style={styles.Viewbl}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Touchable onPress={onPressxkWgix1c} style={styles.TouchableAa}>
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
          Book Session
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewsi}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={styles.ViewV9}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
          accessible={true}
        >
          <Text
            style={StyleSheet.flatten([
              styles.TextCS,
              theme.typography.caption,
              { color: theme.colors.strong },
            ])}
            allowFontScaling={true}
            accessible={true}
            textBreakStrategy="highQuality"
            ellipsizeMode="tail"
          >
            Session time
          </Text>
          <ProgressBar
            style={styles.ProgressBarmH}
            progress={1}
            borderRadius={0}
            borderWidth={1}
            animationType="spring"
          />
          <View
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
            accessible={true}
          >
            <View
              style={styles.ViewxQ}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <DatePicker
                style={styles.DatePickeraj}
                label="Date"
                mode="date"
                leftIconMode="inset"
                type="solid"
                date={date}
                onDateChange={date => setDate(date)}
                locale=""
                disabled={false}
                error={false}
                options={[]}
              />
              <DatePicker
                label="Time"
                mode="time"
                leftIconMode="inset"
                type="solid"
                date={time}
                onDateChange={time => setTime(time)}
              />
            </View>
          </View>
        </View>

        <View
          style={styles.Viewd1}
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
                styles.Text_13,
                theme.typography.caption,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
              accessible={true}
              textBreakStrategy="highQuality"
              ellipsizeMode="tail"
            >
              How Long Is This Session? (minutes)
            </Text>

            <View
              style={styles.Viewr2}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <TextInput
                style={StyleSheet.flatten([
                  styles.TextInput_52,
                  {
                    backgroundColor: theme.colors.background,
                    borderColor: theme.colors.divider,
                    borderRadius: theme.borderRadius.global,
                    color: theme.colors.strong,
                  },
                ])}
                keyboardType="numeric"
                autoCapitalize="none"
                allowFontScaling={true}
                onChangeText={how_long => setHow_long(how_long)}
                value={how_long}
                placeholderTextColor={theme.colors.medium}
                placeholder=""
                clearButtonMode="while-editing"
                enablesReturnKeyAutomatically={true}
                spellcheck={true}
                returnKeyType="next"
                defaultValue=""
                returnKeyLabel=""
              />
            </View>
          </View>
        </View>

        <View
          style={styles.ViewMQ}
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
                styles.TextzQ,
                theme.typography.caption,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
              accessible={true}
              textBreakStrategy="highQuality"
              ellipsizeMode="tail"
            >
              Note
            </Text>

            <View
              style={styles.ViewGU}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
            >
              <TextInput
                style={StyleSheet.flatten([
                  styles.TextInputdd,
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
                onChangeText={note => setNote(note)}
                value={note}
                placeholderTextColor={theme.colors.medium}
                placeholder=""
                clearButtonMode="while-editing"
                enablesReturnKeyAutomatically={true}
                spellcheck={true}
                returnKeyType="next"
                defaultValue=""
              />
            </View>
          </View>
        </View>
        <Divider
          style={styles.Dividerxj}
          color={theme.colors.divider}
          height={1}
        />
        <View style={styles.Viewnh}>
          <Fetch
            url={`https://server.fitlive.fit/pass?p1=${encodeURIComponent(
              props.route.params['clientId']
            )}&p2=${encodeURIComponent(props.route.params['clientName'])}`}
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
                <View
                  accessible={true}
                  importantForAccessibility="auto"
                  hitSlop={{}}
                  pointerEvents="auto"
                >
                  <View
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strong }}>Client</Text>

                    <Text
                      style={StyleSheet.flatten([
                        styles.Texta7,
                        theme.typography.headline3,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['p2']}
                    </Text>
                  </View>

                  <View
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <Text style={{ color: theme.colors.strong }}>Client</Text>

                    <Text
                      style={StyleSheet.flatten([
                        styles.Textgx,
                        theme.typography.headline3,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['p4']}
                    </Text>
                  </View>
                </View>
              );
            }}
          </Fetch>
        </View>
      </ScrollView>

      <View
        style={styles.ViewFA}
        hitSlop={{}}
        importantForAccessibility="auto"
        pointerEvents="auto"
        accessible={true}
      >
        <Button
          onPress={async () => {
            try {
              await submitFunc();
              await handleButtonhsDcp5xHPress();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.flatten([
            styles.Buttonsz,
            { borderRadius: theme.borderRadius.global },
          ])}
          type="solid"
        >
          Add
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextzQ: {
    textTransform: 'uppercase',
  },
  TextInputdd: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewxQ: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewV9: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Buttonsz: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCS: {
    textTransform: 'uppercase',
  },
  Text_13: {
    textTransform: 'uppercase',
  },
  TextInput_52: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  DatePickeraj: {
    marginBottom: 5,
  },
  TouchableAa: {
    marginLeft: 5,
    marginRight: 5,
  },
  Viewbl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  ViewGU: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ScrollViewsi: {
    flexGrow: 1,
  },
  Viewr2: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewd1: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ProgressBarmH: {
    width: 300,
    height: 20,
  },
  Texta7: {
    marginBottom: 24,
  },
  Textgx: {
    marginBottom: 24,
  },
  ViewMQ: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewFA: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  Dividerxj: {
    height: 1,
  },
  Viewnh: {
    paddingTop: 32,
    alignItems: 'flex-start',
    paddingBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
});

export default withTheme(BookSessionScreen);
