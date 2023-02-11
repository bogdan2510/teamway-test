import React from 'react';
import { render } from '@testing-library/react-native';

import KSubtitle from './KSubtitle';

describe('KSubtitle', () => {
  it('should render successfully', () => {
    const { container } = render(< KSubtitle />);
    expect(container).toBeTruthy();
  });
});
