import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import LoadingIndicator from '../components/LoadingIndicator';
import { useNavigation } from '@react-navigation/native';

/**
 * StartupScreen displays an animated loading indicator while the app initializes.
 * After a short delay, it navigates to the Login screen.
 */
const StartupScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Simulate loading, then navigate to Login
    const timeout = setTimeout(() => {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <LoadingIndicator />
      <Text className="mt-4 text-lg font-semibold text-foreground">Loading...</Text>
    </View>
  );
};

export default StartupScreen;
