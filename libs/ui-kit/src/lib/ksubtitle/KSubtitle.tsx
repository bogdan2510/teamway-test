import React from 'react';
import { Text } from 'react-native-ui-lib';

/* eslint-disable-next-line */
export interface KSubtitleProps {
  text: string;
}

export function KSubtitle(props: KSubtitleProps) {
  return (
    <Text text80T purple1>
      {props.text}
    </Text>
  );
}

export default KSubtitle;
