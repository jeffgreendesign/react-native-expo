import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

/**
 * Basic smoke test to ensure the App renders without crashing.
 */
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
