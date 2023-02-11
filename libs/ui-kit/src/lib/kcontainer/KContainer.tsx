import React from 'react';
import { View, Colors } from 'react-native-ui-lib';

export interface KContainerProps {
  children: React.ReactNode;
  center?: boolean;
}

export function KContainer(props: KContainerProps) {
  return (
    <View flex backgroundColor={Colors.purple70} center={props.center ?? true}>
      {props.children}
    </View>
  );
}

export default KContainer;
