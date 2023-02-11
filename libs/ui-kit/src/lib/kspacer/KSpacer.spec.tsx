import React from 'react';
import { render } from '@testing-library/react-native';

import KSpacer from './KSpacer';

describe('KSpacer', () => {
  it('should render successfully', () => {
    const { container } = render(< KSpacer />);
    expect(container).toBeTruthy();
  });
});
