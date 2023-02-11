import React from 'react';
import { render } from '@testing-library/react-native';

import KContainer from './KContainer';

describe('KContainer', () => {
  it('should render successfully', () => {
    const { container } = render(< KContainer />);
    expect(container).toBeTruthy();
  });
});
