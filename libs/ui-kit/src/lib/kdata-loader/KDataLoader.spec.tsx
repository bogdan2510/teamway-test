import React from 'react';
import { render } from '@testing-library/react-native';

import KDataLoader from './KDataLoader';

describe('KDataLoader', () => {
  it('should render successfully', () => {
    const { container } = render(< KDataLoader />);
    expect(container).toBeTruthy();
  });
});
