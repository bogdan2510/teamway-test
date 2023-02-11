import React from 'react';
import { render } from '@testing-library/react-native';

import KTitle from './KTitle';

describe('KTitle', () => {
  it('should render successfully', () => {
    const { container } = render(
      <KTitle title="Title" customTitle="Custom title" />
    );
    expect(container).toBeTruthy();
  });
});
