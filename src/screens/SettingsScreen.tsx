import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme, ThemeMode } from '../theme/ThemeProvider';

/**
 * SettingsScreen allows the user to toggle between Auto, Light, and Dark theme modes.
 * Uses the ThemeProvider context to update the app's theme.
 */
const themeLabels: Record<ThemeMode, string> = {
  auto: 'Auto (System)',
  light: 'Light',
  dark: 'Dark',
};

const SettingsScreen = () => {
  const { mode, setMode } = useTheme();

  return (
    <View className="flex-1 items-center justify-center bg-background px-8">
      <Text className="text-2xl font-bold mb-8 text-foreground">Settings</Text>
      <Text className="mb-4 text-foreground">Theme</Text>
      <View className="flex-row mb-8">
        {(['auto', 'light', 'dark'] as ThemeMode[]).map((m) => (
          <TouchableOpacity
            key={m}
            className={`px-4 py-2 mx-2 rounded ${mode === m ? 'bg-primary' : 'bg-card border border-border'}`}
            onPress={() => setMode(m)}
          >
            <Text className={mode === m ? 'text-white font-semibold' : 'text-foreground'}>
              {themeLabels[m]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text className="text-foreground">More settings coming soon...</Text>
    </View>
  );
};

export default SettingsScreen;
