import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';

/**
 * ThemeMode defines the available theme options for the app.
 * - 'auto': Follows the system color scheme.
 * - 'light': Forces light mode.
 * - 'dark': Forces dark mode.
 */
export type ThemeMode = 'auto' | 'light' | 'dark';

interface ThemeContextProps {
  colorScheme: NonNullable<ColorSchemeName>;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

// Create a React context for theme management
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

/**
 * ThemeProvider wraps the app and provides theme state and logic.
 * It listens to system color scheme changes if mode is 'auto'.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const [systemScheme, setSystemScheme] = useState<NonNullable<ColorSchemeName>>(
    Appearance.getColorScheme() || 'light'
  );

  useEffect(() => {
    if (mode === 'auto') {
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setSystemScheme(colorScheme || 'light');
      });
      return () => listener.remove();
    }
  }, [mode]);

  // Determine the active color scheme
  const colorScheme = useMemo(() => {
    if (mode === 'auto') return systemScheme;
    return mode;
  }, [mode, systemScheme]);

  return (
    <ThemeContext.Provider value={{ colorScheme, mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * useTheme is a custom hook to access theme context.
 */
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
