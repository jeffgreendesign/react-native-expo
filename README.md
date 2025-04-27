# React Native Expo Ultramodern Template

A base template for Expo React Native projects with ultramodern UI, Tailwind (nativewind), shadcn/ui, light/dark/auto theming, navigation, and Jest testing.

## Features
- Expo + React Native core
- Tailwind CSS (via nativewind) for utility-first styling
- shadcn/ui component tokens and design system
- Light, dark, and auto (system) theme modes
- Animated screen transitions (React Navigation)
- Startup, Login, Dashboard, and Settings screens
- Theme toggle in Settings (Auto/Light/Dark)
- Reusable loading indicator
- Jest + jest-expo for testing
- Well-documented, extensible codebase

## Getting Started

### Prerequisites
- Node.js (18+ recommended)
- npm (v9+ recommended)
- Expo CLI: `npm install -g expo-cli`

### Installation
1. Clone the repo:
   ```sh
   git clone <your-repo-url>
   cd react-native-expo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Expo development server:
   ```sh
   npm start
   ```

### Running on Device/Simulator
- iOS: `npm run ios`
- Android: `npm run android`
- Web: `npm run web`

## Theming
- The app supports light, dark, and auto (system) modes.
- Theme is managed in `src/theme/ThemeProvider.tsx` using Expo's Appearance API.
- Toggle theme in the Settings screen.

#### Example: Using Theme Colors in Components
```tsx
<View className="bg-background">
  <Text className="text-foreground">Hello, world!</Text>
</View>
```

## Folder Structure
```
src/
  App.tsx                # App root, wraps with ThemeProvider and navigation
  components/            # Shared UI components (e.g., LoadingIndicator)
  navigation/            # AppNavigator with React Navigation
  screens/               # App screens (Startup, Login, Dashboard, Settings)
  theme/                 # ThemeProvider for light/dark/auto mode
```

## Testing
- Tests are in the `__tests__/` directory.
- Run all tests:
  ```sh
  npx jest
  ```
- Example test (DashboardScreen):
  ```tsx
  import { render } from '@testing-library/react-native';
  import DashboardScreen from '../../src/screens/DashboardScreen';
  test('renders dashboard', () => {
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Dashboard')).toBeTruthy();
  });
  ```

## Customization
- Add new screens to `src/screens/` and register them in `src/navigation/AppNavigator.tsx`.
- Use Tailwind utility classes for styling. See [nativewind docs](https://www.nativewind.dev/).
- Use shadcn/ui tokens for consistent design.

## References
- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs/functions-and-directives)
- [nativewind](https://www.nativewind.dev/)
- [shadcn/ui](https://ui.shadcn.com/docs)
- [Jest](https://jestjs.io/docs/getting-started)

---

### License
MIT
