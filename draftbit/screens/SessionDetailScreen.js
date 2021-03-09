import React from 'react';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Fetch } from 'react-request';

const SessionDetailScreen = props => {
  const [update, setUpdate] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setUpdate(new Date());
    });
    return unsubscribe;
  });
  const confirmBooking = async () => {
    const url = `https://fitlive.glitch.me/confirmBooking`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      sessionId: props.route.params['sessionId'],
      userId: props.route.params['userId'],
      status: 'Confirmed',
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await response.json();
      if (result.error) throw new Error(result.error);
      else alert(result.msg);
      setUpdate(new Date().getTime());
    } catch (error) {
      alert(error);
    }
  };

  const onPressluhC9TPM = item => {
    const data = item;
    navigation.navigate('CancelBookingScreen', {
      userId: props.route.params['userId'],
      sessionId: props.route.params['sessionId'],
    });
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerP9}
      hasSafeArea={true}
      scrollable={true}
    >
      <View
        style={styles.ViewQu}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Fetch
          url={`https://fitlive.glitch.me/sessionDetail?sessionId=${encodeURIComponent(
            props.route.params['sessionId']
          )}&update=${encodeURIComponent(update)}&userId=${encodeURIComponent(
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
              <ScrollView
                contentContainerStyle={styles.ScrollViewOA}
                showsVerticalScrollIndicator={true}
                bounces={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={StyleSheet.flatten([
                    styles.Viewba,
                    { borderColor: theme.colors.surface },
                  ])}
                >
                  <View
                    style={styles.Viewcn}
                    pointerEvents="auto"
                    hitSlop={{}}
                    importantForAccessibility="auto"
                    accessible={true}
                  >
                    <Text
                      style={StyleSheet.flatten([
                        styles.TextKf,
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ])}
                    >
                      ID:
                    </Text>

                    <Text
                      style={StyleSheet.flatten([
                        styles.TextR9,
                        theme.typography.headline4,
                        { color: theme.colors.strong },
                      ])}
                    >
                      {data && data['sessionId']}
                    </Text>
                  </View>

                  <View
                    style={styles.Viewsd}
                    hitSlop={{}}
                    pointerEvents="auto"
                    accessible={true}
                    importantForAccessibility="auto"
                  >
                    <Text
                      style={StyleSheet.flatten([
                        theme.typography.headline5,
                        { color: theme.colors.strong },
                      ])}
                      allowFontScaling={true}
                      accessible={true}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                    >
                      {data && data['status']}
                    </Text>

                    <Text
                      style={StyleSheet.flatten([
                        theme.typography.body1,
                        { color: theme.colors.strong },
                      ])}
                      allowFontScaling={true}
                      accessible={true}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                    >
                      {data && data['cancelReason']}
                    </Text>
                  </View>

                  <View
                    style={styles.ViewZT}
                    hitSlop={{}}
                    pointerEvents="auto"
                    accessible={true}
                    importantForAccessibility="auto"
                  >
                    <Text
                      style={StyleSheet.flatten([
                        theme.typography.headline5,
                        { color: theme.colors.strong },
                      ])}
                      allowFontScaling={true}
                      accessible={true}
                      textBreakStrategy="highQuality"
                      ellipsizeMode="tail"
                    >
                      {data && data['date']}
                    </Text>

                    <View
                      style={styles.ViewOO}
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.body1,
                          { color: theme.colors.strong },
                        ])}
                        allowFontScaling={true}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        ellipsizeMode="tail"
                      >
                        {data && data['start_hour']}
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.body1,
                          { color: theme.colors.strong },
                        ])}
                        allowFontScaling={true}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        ellipsizeMode="tail"
                      >
                        -
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.body1,
                          { color: theme.colors.strong },
                        ])}
                        allowFontScaling={true}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        ellipsizeMode="tail"
                      >
                        {data && data['end_hour']}
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={StyleSheet.flatten([
                    styles.Viewpf,
                    { backgroundColor: theme.colors.surface },
                  ])}
                  importantForAccessibility="auto"
                  accessible={true}
                  pointerEvents="auto"
                  hitSlop={{}}
                >
                  <Text
                    style={StyleSheet.flatten([
                      theme.typography.headline4,
                      { color: theme.colors.strong },
                    ])}
                    textBreakStrategy="highQuality"
                    accessible={true}
                    ellipsizeMode="tail"
                    allowFontScaling={true}
                  >
                    [@Detail@]
                  </Text>

                  <View
                    style={styles.View_1J}
                    hitSlop={{}}
                    importantForAccessibility="auto"
                    pointerEvents="auto"
                    accessible={true}
                  >
                    <View
                      style={styles.Viewck}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@Client@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['fullName']}
                      </Text>
                    </View>

                    <View
                      style={styles.View_5V}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@Location@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['location']}
                      </Text>
                    </View>

                    <View
                      style={styles.ViewX7}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@CoachAssign@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['coachName']}
                      </Text>
                    </View>

                    <View
                      style={styles.ViewSZ}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@NoOfMember@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['total_member']}
                      </Text>
                    </View>

                    <View
                      style={styles.ViewCi}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@NoOfSession@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['number_session']}
                      </Text>
                    </View>

                    <View
                      style={styles.ViewTb}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom18,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        [@CreatedById@]
                      </Text>

                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.custom22,
                          { color: theme.colors.strong },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['userId']}
                      </Text>
                    </View>

                    <View
                      style={styles.ViewL7}
                      pointerEvents="auto"
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                    >
                      <Text
                        style={StyleSheet.flatten([
                          theme.typography.caption,
                          { color: theme.colors.custom_rgb134_139_145 },
                        ])}
                        accessible={true}
                        textBreakStrategy="highQuality"
                        allowFontScaling={true}
                        ellipsizeMode="tail"
                      >
                        {data && data['rule_note']}
                      </Text>
                    </View>
                  </View>
                </View>

                <View
                  style={styles.ViewVx}
                  pointerEvents="auto"
                  hitSlop={{}}
                  accessible={true}
                  importantForAccessibility="auto"
                >
                  <Button
                    onPress={confirmBooking}
                    style={StyleSheet.flatten([
                      styles.ButtonJl,
                      { borderRadius: theme.borderRadius.global },
                    ])}
                    type="solid"
                    disabled={false}
                  >
                    [@StartSession@]
                  </Button>

                  <Button
                    onPress={() => onPressluhC9TPM(data)}
                    style={StyleSheet.flatten([
                      styles.ButtonfT,
                      { borderRadius: theme.borderRadius.global },
                    ])}
                    type="solid"
                    color={theme.colors.error}
                  >
                    [@CancelSession@]
                  </Button>
                </View>
                <TextInput
                  style={styles.TextInputNb}
                  allowFontScaling={true}
                  autoCapitalize="none"
                  keyboardType="default"
                  value={update}
                  onChangeText={update => setUpdate(update)}
                  defaultValue="0"
                />
              </ScrollView>
            );
          }}
        </Fetch>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewcn: {
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  ButtonJl: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 5,
  },
  ScrollViewOA: {
    flexGrow: 1,
  },
  ScreenContainerP9: {
    alignItems: 'center',
  },
  ViewQu: {
    width: '100%',
    maxWidth: 600,
  },
  Viewck: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  TextKf: {
    marginBottom: 6,
  },
  Viewba: {
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  Viewsd: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 17,
  },
  ButtonfT: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5,
  },
  View_5V: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  View_1J: {
    width: '100%',
  },
  Viewpf: {
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  ViewOO: {
    flexDirection: 'row',
  },
  TextR9: {
    marginBottom: 6,
  },
  ViewVx: {
    paddingBottom: 54,
    paddingLeft: 32,
    paddingTop: 17,
    paddingRight: 32,
  },
  ViewX7: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewZT: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 17,
  },
  TextInputNb: {
    opacity: 0,
  },
  ViewSZ: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewCi: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewTb: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  ViewL7: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default withTheme(SessionDetailScreen);