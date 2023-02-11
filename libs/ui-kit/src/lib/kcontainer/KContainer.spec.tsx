import React from 'react';
import { render } from '@testing-library/react-native';

import KContainer from './KContainer';
import { Text } from 'react-native-ui-lib';

describe('KContainer', () => {
  it('should render successfully', () => {
    const { container } = render(
      <KContainer children={<Text>Container</Text>} />
    );
    expect(container).toBeTruthy();
  });
});
