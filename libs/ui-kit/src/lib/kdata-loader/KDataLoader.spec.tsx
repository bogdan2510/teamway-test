import React from 'react';
import { render } from '@testing-library/react-native';

import KDataLoader from './KDataLoader';
import { Text } from 'react-native-ui-lib';

describe('KDataLoader', () => {
  it('should render successfully', () => {
    const { container } = render(
      <KDataLoader
        isLoading={false}
        isError={false}
        children={<Text>Data loader</Text>}
      />
    );
    expect(container).toBeTruthy();
  });
});
