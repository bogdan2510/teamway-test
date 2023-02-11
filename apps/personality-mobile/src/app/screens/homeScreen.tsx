import { RootStackParamProps } from '@teamway-test/shared-types';
import { KSpacer, KSubtitle, KTitle } from '@teamway-test/ui-kit';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Colors, Button } from 'react-native-ui-lib';

const HomeScreen = (props: RootStackParamProps<'HomeScreen'>) => {
  const { height } = useWindowDimensions();
  return (
    <View flex backgroundColor={Colors.purple70} center>
      <View height={height * 0.2} paddingT-60 paddingH-20>
        <KTitle title="Discover your" customTitle="personality :)" />
        <KSubtitle
          text="Discover Your True Self: Take our Personality Quiz and uncover the unique
      traits that define you."
        />
        <KSpacer />
        <Button
          label={'Start quiz'}
          size={Button.sizes.large}
          onPress={() => console.log('start quiz')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
