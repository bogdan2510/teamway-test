import { RootStackParamProps } from '@teamway-test/shared-types';
import React from 'react';
import { View, Text } from 'react-native-ui-lib';

const HomeScreen = (props: RootStackParamProps<'HomeScreen'>) => {
  return (
    <View flex center useSafeArea>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
