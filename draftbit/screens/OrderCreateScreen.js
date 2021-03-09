import React from 'react';
import { Button, Container, ScreenContainer, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const OrderCreateScreen = props => {
  const [clientAssign, setClientAssign] = React.useState(undefined);
  const [coachAssign, setCoachAssign] = React.useState(undefined);
  const [orderId, setOrderId] = React.useState(undefined);
  const [location, setLocation] = React.useState(undefined);
  const [productName, setProductName] = React.useState(undefined);
  const [unitPrice, setUnitPrice] = React.useState(undefined);
  const [quantity, setQuantity] = React.useState(undefined);
  const [commissionRate, setCommissionRate] = React.useState(undefined);
  const [orderNote, setOrderNote] = React.useState(undefined);
  const [loader, setLoader] = React.useState(undefined);
  const { theme } = props;

  const submitData = async () => {
    const url = `https://fitlive.glitch.me/createOrder`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      orderId,
      clientAssign,
      productName,
      unitPrice,
      quantity,
      coachAssign,
      commissionRate,
      orderNote,
      createdBy: props.route.params['userId'],
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
      style={styles.ScreenContainerJI}
      hasSafeArea={true}
      scrollable={true}
    >
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewjo}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <ScrollView
          contentContainerStyle={styles.ScrollViewpw}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          showsVerticalScrollIndicator={true}
        >
          <View
            style={styles.ViewkG}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@ClientAssign@]
              </Text>

              <View
                style={styles.Viewjn}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <Fetch
                  url={`https://fitlive.glitch.me/getClient?userId=${encodeURIComponent(
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
                      <Container useThemeGutterPadding={true}>
                        <TextInput
                          style={StyleSheet.flatten([
                            styles.TextInputQr,
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
                          onChangeText={clientAssign =>
                            setClientAssign(clientAssign)
                          }
                          value={clientAssign}
                          placeholderTextColor={theme.colors.medium}
                          placeholder=""
                          clearButtonMode="while-editing"
                          enablesReturnKeyAutomatically={true}
                          spellcheck={true}
                          returnKeyType="next"
                          textContentType="none"
                          defaultValue=""
                        />
                      </Container>
                    );
                  }}
                </Fetch>
              </View>
            </View>
          </View>

          <View
            style={styles.Viewdd}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@CoachAssign@]
              </Text>

              <View
                style={styles.ViewTL}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <Fetch
                  url={`https://fitlive.glitch.me/getCoach?userId=${encodeURIComponent(
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
                      <Container useThemeGutterPadding={true}>
                        <TextInput
                          allowFontScaling={true}
                          autoCapitalize="none"
                          keyboardType="default"
                          value={coachAssign}
                          onChangeText={coachAssign =>
                            setCoachAssign(coachAssign)
                          }
                        />
                      </Container>
                    );
                  }}
                </Fetch>
              </View>
            </View>
          </View>

          <View
            style={styles.ViewSu}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@OrderId@]
              </Text>

              <View
                style={styles.Views8}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputEJ,
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
                  onChangeText={orderId => setOrderId(orderId)}
                  value={orderId}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="name"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewWc}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@ProductName@]
              </Text>

              <View
                style={styles.ViewI1}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
                onChangeText={location => setLocation(location)}
                value={location}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputsb,
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
                  onChangeText={productName => setProductName(productName)}
                  value={productName}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="name"
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewDx}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@UnitPrice@]
              </Text>

              <View
                style={styles.ViewQP}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputPs,
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
                  onChangeText={unitPrice => setUnitPrice(unitPrice)}
                  value={unitPrice}
                  placeholderTextColor={theme.colors.light}
                  placeholder="VND"
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="telephonenumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewDK}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@Quantity@]
              </Text>

              <View
                style={styles.ViewXe}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputEm,
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
                  onChangeText={quantity => setQuantity(quantity)}
                  value={quantity}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="telephonenumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>

          <View
            style={styles.ViewcL}
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
                  theme.typography.caption,
                  { color: theme.colors.strong },
                ])}
                allowFontScaling={true}
                accessible={true}
                textBreakStrategy="highQuality"
                ellipsizeMode="tail"
              >
                [@CommissionRate@]
              </Text>

              <View
                style={styles.Viewf2}
                importantForAccessibility="auto"
                accessible={true}
                pointerEvents="auto"
                hitSlop={{}}
              >
                <TextInput
                  style={StyleSheet.flatten([
                    styles.TextInputZc,
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
                  onChangeText={commissionRate =>
                    setCommissionRate(commissionRate)
                  }
                  value={commissionRate}
                  placeholderTextColor={theme.colors.medium}
                  placeholder=""
                  clearButtonMode="while-editing"
                  enablesReturnKeyAutomatically={true}
                  spellcheck={true}
                  returnKeyType="next"
                  textContentType="telephonenumber"
                  defaultValue=""
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          style={styles.Viewul}
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
                theme.typography.caption,
                { color: theme.colors.strong },
              ])}
              allowFontScaling={true}
              accessible={true}
              textBreakStrategy="highQuality"
              ellipsizeMode="tail"
            >
              [@OrderNote@]
            </Text>

            <View
              style={styles.ViewZS}
              importantForAccessibility="auto"
              accessible={true}
              pointerEvents="auto"
              hitSlop={{}}
              onChangeText={location => setLocation(location)}
              value={location}
            >
              <TextInput
                style={StyleSheet.flatten([
                  styles.TextInput_6x,
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
                onChangeText={orderNote => setOrderNote(orderNote)}
                value={orderNote}
                placeholderTextColor={theme.colors.medium}
                placeholder=""
                clearButtonMode="while-editing"
                enablesReturnKeyAutomatically={true}
                spellcheck={true}
                returnKeyType="next"
                textContentType="name"
              />
            </View>
          </View>
        </View>

        <View
          style={styles.Viewf7}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={submitData}
            style={StyleSheet.flatten([
              styles.ButtonzX,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            {loader || '[@Create@]'}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <TextInput
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
  TextInputQr: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextInputEJ: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextInputEm: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  ViewkG: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ScrollViewpw: {
    flexGrow: 1,
  },
  ButtonzX: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  KeyboardAvoidingViewjo: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
    marginTop: 20,
  },
  ScreenContainerJI: {
    alignItems: 'center',
  },
  TextInputPs: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextInputZc: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextInput_6x: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  TextInputsb: {
    height: 54,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingLeft: 14,
    paddingRight: 14,
  },
  Views8: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewXe: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewjn: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewQP: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewTL: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewdd: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewf2: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewZS: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  Viewul: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewI1: {
    paddingTop: 12,
    marginBottom: 12,
    paddingBottom: 12,
  },
  ViewSu: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Viewf7: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  ViewWc: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewDx: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewDK: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
  ViewcL: {
    paddingBottom: 14,
    paddingRight: 32,
    paddingLeft: 32,
  },
});

export default withTheme(OrderCreateScreen);