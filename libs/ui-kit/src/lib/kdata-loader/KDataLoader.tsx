import React from 'react';
import { Colors, View, Text } from 'react-native-ui-lib';

import { ActivityIndicator } from 'react-native';

export interface KDataLoaderProps {
  isLoading: boolean;
  isError: boolean;
  children: React.ReactNode;
}

/** HOC component to handle loading & error states  */
export function KDataLoader(props: KDataLoaderProps) {
  const { children, isError, isLoading } = props;

  const DefaultOnLoading = (
    <View flex center>
      <ActivityIndicator size="large" color={Colors.purple1} />
    </View>
  );

  const DefaultOnError = (
    <View flex center>
      <Text>Something went wrong</Text>
    </View>
  );

  if (isLoading) return DefaultOnLoading;
  if (isError) return DefaultOnError;

  return <View flex>{children}</View>;
}

export default KDataLoader;
