import React from 'react';
import { View, Text, Colors } from 'react-native-ui-lib';

export interface KTitleProps {
  title: string;
  // part of the title that will be purple
  customTitle?: string;
}

export function KTitle(props: KTitleProps) {
  return (
    <View row>
      <Text text40 color={Colors.black}>
        {props.title}{' '}
      </Text>
      {props.customTitle && (
        <Text text40 color={Colors.purple10}>
          {props.customTitle}
        </Text>
      )}
    </View>
  );
}

export default KTitle;
