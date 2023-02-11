import React from 'react';
import { View, Colors } from 'react-native-ui-lib';

export interface KContainerProps {
  children: React.ReactNode;
}

export function KContainer(props: KContainerProps) {
  return (
    <View flex backgroundColor={Colors.purple70} center>
      {props.children}
    </View>
  );
}

export default KContainer;
