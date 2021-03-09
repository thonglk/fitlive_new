import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Switch,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const PermissionScreen = props => {
  const [per_locCre, setPer_locCre] = React.useState(undefined);
  const [per_colCre, setPer_colCre] = React.useState(undefined);
  const [per_cliCre, setPer_cliCre] = React.useState(undefined);
  const [per_sesCre, setPer_sesCre] = React.useState(undefined);
  const [per_sesCf, setPer_sesCf] = React.useState(undefined);
  const [
    permission_session_viewCompany,
    setPermission_session_viewCompany,
  ] = React.useState(undefined);
  const [fullName, setFullName] = React.useState(undefined);
  const { theme } = props;
  const { navigation } = props;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  });
  const updateCoach = async () => {
    const url = `https://server.fitlive.fit/addCoach`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({
      permission_location_create: per_locCre,
      permission_colleage_create: per_colCre,
      permission_client_create: per_cliCre,
      permission_session_create: per_sesCre,
      permission_session_confirm: per_sesCf,
      permission_session_viewCompany,
      coachId: props.route.params['coachId'],
      userId: props.route.params['userId'],
      updatedAt: new Date(),
    });

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
      const result = await res.json();
      if (result.error) throw new Error(result.error);
      alert(result.msg);
      props.navigation.navigate('ListofColleagesScreen', {
        userId: props.route.params['userId'],
      });
    } catch (error) {
      alert(error);
    }
  };

  const fetchData = async () => {
    const url = `https://server.fitlive.fit/coachDetail?coachId=${props.route.params['coachId']}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    const res = await fetch(url, {
      method: 'GET',
      headers,
    });
    const result = await res.json();
    if (result.error) throw new Error(result.error);
    setFullName(result.fullName);
    setPer_locCre(result.permission_location_create || false);
    setPer_colCre(result.permission_colleage_create || false);
    setPer_cliCre(result.permission_client_create || false);
    setPer_sesCre(result.permission_session_create || false);
    setPer_sesCf(result.permission_session_confirm || false);
    setPermission_session_viewCompany(
      result.permission_session_viewCompany || false
    );
  };

  const onPressfKWTcZeZ = () => navigation.goBack();

  const onPressDvTPaoW3 = item => {
    const data = item;
    navigation.navigate('LoginWithEmailScreen', {});
  };

  return (
    <ScreenContainer
      style={styles.ScreenContainerKd}
      hasSafeArea={true}
      scrollable={true}
    >
      <View
        style={styles.View_2Y}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <Touchable onPress={onPressfKWTcZeZ} style={styles.TouchableFo}>
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
          Set Permission
        </Text>
      </View>

      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewAZ}
        behavior="height"
        enabled={false}
        keyboardVerticalOffset={44}
      >
        <View
          style={styles.View_1L}
          accessible={true}
          importantForAccessibility="auto"
          hitSlop={{}}
          pointerEvents="auto"
        >
          <Text
            style={StyleSheet.flatten([
              theme.typography.headline4,
              { color: theme.colors.strong },
            ])}
          >
            {fullName}
          </Text>

          <View
            style={styles.View_7S}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              Add Location
            </Text>
            <Switch
              value={per_locCre}
              onValueChange={per_locCre => setPer_locCre(per_locCre)}
              color={theme.colors.primary}
            />
          </View>

          <View
            style={styles.ViewoG}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              Add Colleages
            </Text>
            <Switch
              value={per_colCre}
              onValueChange={per_colCre => setPer_colCre(per_colCre)}
              color={theme.colors.primary}
            />
          </View>

          <View
            style={styles.Viewrr}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              Add Client
            </Text>
            <Switch
              value={per_cliCre}
              onValueChange={per_cliCre => setPer_cliCre(per_cliCre)}
              color={theme.colors.primary}
            />
          </View>

          <View
            style={styles.ViewK9}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              Book Session
            </Text>
            <Switch
              value={per_sesCre}
              onValueChange={per_sesCre => setPer_sesCre(per_sesCre)}
              color={theme.colors.primary}
            />
          </View>

          <View
            style={styles.ViewlL}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              Confirm Session
            </Text>
            <Switch
              value={per_sesCf}
              onValueChange={per_sesCf => setPer_sesCf(per_sesCf)}
              color={theme.colors.primary}
            />
          </View>

          <View
            style={styles.View_0j}
            accessible={true}
            importantForAccessibility="auto"
            hitSlop={{}}
            pointerEvents="auto"
          >
            <Text
              style={StyleSheet.flatten([
                theme.typography.headline6,
                { color: theme.colors.strong },
              ])}
            >
              See all company session
            </Text>
            <Switch
              value={permission_session_viewCompany}
              onValueChange={permission_session_viewCompany =>
                setPermission_session_viewCompany(
                  permission_session_viewCompany
                )
              }
              color={theme.colors.primary}
            />
          </View>
        </View>

        <View
          style={styles.View_2O}
          hitSlop={{}}
          importantForAccessibility="auto"
          pointerEvents="auto"
          accessible={true}
        >
          <Button
            onPress={updateCoach}
            style={StyleSheet.flatten([
              styles.ButtonCS,
              { borderRadius: theme.borderRadius.global },
            ])}
            type="solid"
          >
            Update
          </Button>
          <Touchable onPress={onPressDvTPaoW3} />
        </View>
      </KeyboardAvoidingView>
      <TextInput
        style={styles.TextInputbs}
        allowFontScaling={true}
        autoCapitalize="none"
        keyboardType="default"
        value={fullName}
        onChangeText={fullName => setFullName(fullName)}
        defaultValue=""
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TouchableFo: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  View_2Y: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
    width: '100%',
  },
  View_1L: {
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 20,
  },
  ButtonCS: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScreenContainerKd: {
    alignItems: 'center',
  },
  View_7S: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  View_2O: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 14,
  },
  KeyboardAvoidingViewAZ: {
    flexGrow: 1,
    justifyContent: 'space-around',
    maxWidth: 600,
    width: '100%',
  },
  ViewoG: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  TextInputbs: {
    opacity: 0,
  },
  Viewrr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewK9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewlL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  View_0j: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default withTheme(PermissionScreen);
