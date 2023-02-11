import React from 'react';
import { Text, View } from 'react-native-ui-lib';

/* eslint-disable-next-line */
export interface KSubtitleProps {
  text: string;
}

export function KSubtitle(props: KSubtitleProps) {
  return (
    <View>
      <Text text80T purple1>
        {props.text}
      </Text>
    </View>
  );
}

export default KSubtitle;
