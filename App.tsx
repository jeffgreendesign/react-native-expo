import React from 'react';
import { ThemeProvider } from './src/theme/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';

/**
 * App is the root component of the application.
 * It wraps the navigation stack with ThemeProvider for theming support.
 */
export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}
