import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../../src/screens/SettingsScreen';

/**
 * Test to ensure SettingsScreen renders theme toggle buttons.
 */
describe('SettingsScreen', () => {
  it('renders theme toggle buttons', () => {
    const { getByText } = render(<SettingsScreen />);
    expect(getByText('Auto (System)')).toBeTruthy();
    expect(getByText('Light')).toBeTruthy();
    expect(getByText('Dark')).toBeTruthy();
  });
});
