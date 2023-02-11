import React from 'react';
import { Spacings, View } from 'react-native-ui-lib';

export interface KSpacerProps {
  height?: number | string;
  color?: string;
  width?: number | string;
}

function KSpacer({
  height = Spacings.s4,
  color = 'transparent',
  width = Spacings.s4,
}: KSpacerProps) {
  return (
    <View height={height} width={width} style={{ backgroundColor: color }} />
  );
}

export default KSpacer;
