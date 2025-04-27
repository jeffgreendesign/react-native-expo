import React from 'react';
import { View } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { useTheme } from '../theme/ThemeProvider';

/**
 * LoadingIndicator is a reusable animated spinner component.
 * Uses react-native-svg for smooth, scalable animation.
 */
const LoadingIndicator = () => {
  const { colorScheme } = useTheme();
  // Color adapts to theme
  const color = colorScheme === 'dark' ? '#fff' : '#222';
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Svg height="48" width="48" viewBox="0 0 48 48">
        <Circle
          cx="24"
          cy="24"
          r="20"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset="60"
        />
      </Svg>
    </View>
  );
};

export default LoadingIndicator;
