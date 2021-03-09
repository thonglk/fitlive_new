import React from 'react';
import {
  Button,
  Container,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const CancelBookingScreen = props => {
  const [cancelReason, setCancelReason] = React.useState(undefined);
  const { theme } = props;

  const cancelBooking = async () => {
    const url = `https://server.fitlive.fit/confirmBooking`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      sessionId: props.route.params['sessionId'],
      userId: props.route.params['userId'],
      status: 'Cancelled',
      cancelReason,
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) alert(result.error);
      else alert(result.msg);
      props.navigation.navigate('SessionDetailScreen', {
        userId: props.route.params['userId'],
        sessionId: props.route.params['sessionId'],
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainer_5I}
      scrollable={true}
      hasSafeArea={true}
    >
      <Fetch
        url={`https://server.fitlive.fit/pass?p2=${encodeURIComponent(
          props.route.params['sessionId']
        )}&p1=${encodeURIComponent(props.route.params['userId'])}`}
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
              style={styles.ViewVb}
              accessible={true}
              importantForAccessibility="auto"
              hitSlop={{}}
              pointerEvents="auto"
            >
              <Text
                style={StyleSheet.flatten([
                  styles.TextkF,
                  theme.typography.headline4,
                  { color: theme.colors.strong },
                ])}
              >
                {data && data['p2']}
              </Text>

              <Text
                style={StyleSheet.flatten([
                  styles.TextJK,
                  theme.typography.body1,
                  { color: theme.colors.strong },
                ])}
              >
                Enter cancel reason
              </Text>
              <TextField
                allowFontScaling={true}
                autoCapitalize="none"
                keyboardAppearance="default"
                keyboardType="default"
                leftIconMode="inset"
                type="underline"
                multiline={true}
                value={cancelReason}
                onChangeText={cancelReason => setCancelReason(cancelReason)}
                placeholder="type here"
              />
              <Container
                style={styles.ContaineraJ}
                elevation={0}
                useThemeGutterPadding={true}
              >
                <Button
                  onPress={cancelBooking}
                  style={styles.ButtonCY}
                  type="solid"
                  color={theme.colors.error}
                >
                  Confirm Cancel
                </Button>
              </Container>
            </View>
          );
        }}
      </Fetch>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonCY: {
    width: 343,
    height: 48,
  },
  ScreenContainer_5I: {
    alignItems: 'center',
  },
  ViewVb: {
    marginTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
    maxWidth: 600,
    width: '100%',
  },
  TextkF: {
    textAlign: 'center',
  },
  TextJK: {
    marginTop: 20,
    textAlign: 'center',
  },
  ContaineraJ: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default withTheme(CancelBookingScreen);
