import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * DashboardScreen is the main app screen after login.
 * Displays a welcome message and a button to go to Settings.
 */
const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl font-bold mb-4 text-foreground">Dashboard</Text>
      <Text className="mb-8 text-foreground">You are logged in!</Text>
      <TouchableOpacity
        className="bg-primary rounded px-6 py-3"
        onPress={() => navigation.navigate('Settings')}
      >
        <Text className="text-white font-semibold">Go to Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
