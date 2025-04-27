import React from 'react';
import { render } from '@testing-library/react-native';
import DashboardScreen from '../../src/screens/DashboardScreen';

/**
 * Test to ensure DashboardScreen renders expected content.
 */
describe('DashboardScreen', () => {
  it('renders dashboard text', () => {
    const { getByText } = render(<DashboardScreen />);
    expect(getByText('Dashboard')).toBeTruthy();
    expect(getByText('You are logged in!')).toBeTruthy();
  });
});
