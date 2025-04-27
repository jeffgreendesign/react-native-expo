import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * LoginScreen provides a simple login form (mocked, no backend).
 * On submit, navigates to the Dashboard screen.
 */
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Mock login logic
    navigation.reset({ index: 0, routes: [{ name: 'Dashboard' }] });
  };

  return (
    <View className="flex-1 justify-center px-8 bg-background">
      <Text className="text-2xl font-bold mb-8 text-foreground">Welcome</Text>
      <TextInput
        className="border rounded px-4 py-2 mb-4 text-foreground border-border bg-card"
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        className="border rounded px-4 py-2 mb-6 text-foreground border-border bg-card"
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-primary rounded py-3 items-center"
        onPress={handleLogin}
      >
        <Text className="text-white font-semibold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
