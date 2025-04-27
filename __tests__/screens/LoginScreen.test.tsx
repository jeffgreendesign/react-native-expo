import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../../src/screens/LoginScreen';

/**
 * Test to ensure LoginScreen renders and allows input.
 */
describe('LoginScreen', () => {
  it('renders login form', () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);
    expect(getByPlaceholderText('Username')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });
});
