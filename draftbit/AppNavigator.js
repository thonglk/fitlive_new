import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import ClientEditScreen from './screens/ClientEditScreen';
import ListofClientScreen from './screens/ListofClientScreen';
import CancelBookingScreen from './screens/CancelBookingScreen';
import LoginWithEmailScreen from './screens/LoginWithEmailScreen';
import BlankScreen from './screens/BlankScreen';
import AddClientScreen from './screens/AddClientScreen';
import ClientDetailScreen from './screens/ClientDetailScreen';
import ListofSessionScreen from './screens/ListofSessionScreen';
import SelectaTimeScreen from './screens/SelectaTimeScreen';
import HomepageAdminScreen from './screens/HomepageAdminScreen';
import ListofSessionAdminScreen from './screens/ListofSessionAdminScreen';
import ListofColleagesScreen from './screens/ListofColleagesScreen';
import SessionDetailScreen from './screens/SessionDetailScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AddCoachScreen from './screens/AddCoachScreen';
import PermissionScreen from './screens/PermissionScreen';
import SelectaClientScreen from './screens/SelectaClientScreen';
import SettingScreen from './screens/SettingScreen';
import MyCalendarScreen from './screens/MyCalendarScreen';
import EditCoachScreen from './screens/EditCoachScreen';
import AddLocationScreen from './screens/AddLocationScreen';
import SelectLocationScreen from './screens/SelectLocationScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import LogOutScreen from './screens/LogOutScreen';
import BusinessSettingScreen from './screens/BusinessSettingScreen';
import OrderCreateScreen from './screens/OrderCreateScreen';
import SettingLanguageScreen from './screens/SettingLanguageScreen';
import InsightScreen from './screens/InsightScreen';
import LocationListScreen from './screens/LocationListScreen';
import NotificationScreen from './screens/notification';
import CheckUpdateScreen from './screens/CheckUpdateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginWithEmailScreen"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="EditCoachScreen"
          component={EditCoachScreen}
          options={{
            
            title: 'Edit Colleages',
          }}
        />
        <Stack.Screen
          name="ClientEditScreen"
          component={ClientEditScreen}
          options={{ headerTitle: 'Edit Client', title: 'Client Edit' }}
        />
        <Stack.Screen
          name="ListofClientScreen"
          component={ListofClientScreen}
          options={{ headerTitle: 'Clients', title: 'List of Client' }}
        />
        <Stack.Screen
          name="PermissionScreen"
          component={PermissionScreen}
          options={{ headerShown: false, title: 'Permission' }}
        />
        <Stack.Screen
          name="BlankScreen"
          component={BlankScreen}
          options={{ title: 'Blank' }}
        />
        <Stack.Screen
          name="MyCalendarScreen"
          component={MyCalendarScreen}
          options={{  title: 'My Calendar' }}
        />
        <Stack.Screen
          name="ListofColleagesScreen"
          component={ListofColleagesScreen}
          options={{  title: 'Colleages' }}
        />
        <Stack.Screen
          name="ClientDetailScreen"
          component={ClientDetailScreen}
          options={{ title: 'Client Detail' }}
        />
        <Stack.Screen
          name="SessionDetailScreen"
          component={SessionDetailScreen}
          options={{  title: 'Session Detail' }}
        />
        <Stack.Screen
          name="ListofSessionScreen"
          component={ListofSessionScreen}
          options={{  title: 'List of Session' }}
        />
        <Stack.Screen
          name="SelectaTimeScreen"
          component={SelectaTimeScreen}
          options={{ title: 'Book Session' }}
        />
        <Stack.Screen
          name="ListofSessionAdminScreen"
          component={ListofSessionAdminScreen}
          options={{  title: 'Sessions' }}
        />
        <Stack.Screen
          name="SelectaClientScreen"
          component={SelectaClientScreen}
          options={{ headerTitle: 'Book Session', title: 'Book Session' }}
        />
        <Stack.Screen
          name="AddClientScreen"
          component={AddClientScreen}
          options={{ headerTitle: 'Add Client', title: 'Add Client' }}
        />
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen
          name="AddCoachScreen"
          component={AddCoachScreen}
          options={{ title: 'Add Colleage' }}
        />
        <Stack.Screen
          name="AddLocationScreen"
          component={AddLocationScreen}
          options={{ headerShown: false, title: 'Add Location' }}
        />
        <Stack.Screen
          name="SelectLocationScreen"
          component={SelectLocationScreen}
          options={{ title: 'Book Session' }}
        />
        <Stack.Screen
          name="LogOutScreen"
          component={LogOutScreen}
          options={{ title: 'Log Out' }}
        />
        <Stack.Screen
          name="CancelBookingScreen"
          component={CancelBookingScreen}
          options={{ title: 'Cancel Booking' }}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={{ title: 'Set password' }}
        />
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ title: 'Setting' }}
        />
          <Stack.Screen
          name="BusinessSettingScreen"
          component={BusinessSettingScreen}
          options={{ title: 'Business Setting' }}
        />
        <Stack.Screen
          name="HomepageAdminScreen"
          component={HomepageAdminScreen}
          options={{ headerShown: false, title: 'Home' }}
        />
        <Stack.Screen
          name="LoginWithEmailScreen"
          component={LoginWithEmailScreen}
          options={{ headerShown: false, title: 'Login' }}
        />
        <Stack.Screen
          name="OrderCreateScreen"
          component={OrderCreateScreen}
          options={{ title: 'Create Order' }}
        />
         <Stack.Screen
          name="SettingLanguageScreen"
          component={SettingLanguageScreen}
          options={{ title: 'Set Language' }}
        />
        <Stack.Screen
          name="InsightScreen"
          component={InsightScreen}
          options={{ title: 'Insight' }}
        />
         <Stack.Screen
          name="LocationListScreen"
          component={LocationListScreen}
          options={{ title: 'Location List' }}
        />
        <Stack.Screen
          name="NotificationPermissionsScreen"
          component={NotificationScreen}
          options={{ title: 'Notification' }}
        />
        <Stack.Screen
          name="CheckUpdateScreen"
          component={CheckUpdateScreen}
          options={{ title: 'App Update' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
