import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useTheme } from '../theme/ThemeProvider';
import StartupScreen from '../screens/StartupScreen'; // Ensure this file exists at the specified path
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

/**
 * RootStackParamList defines the available routes and their params.
 */
type RootStackParamList = {
  Startup: undefined;
  Login: undefined;
  Dashboard: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

/**
 * AppNavigator sets up the navigation stack and applies animated transitions.
 * It also applies the current theme to navigation components.
 */
const AppNavigator = () => {
  const { colorScheme } = useTheme();
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Startup"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS, // Smooth screen transitions
        }}
      >
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
