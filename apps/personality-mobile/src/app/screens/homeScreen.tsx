import { RootStackParamProps } from '@teamway-test/shared-types';
import { KContainer, KSpacer, KSubtitle, KTitle } from '@teamway-test/ui-kit';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Button } from 'react-native-ui-lib';

const HomeScreen = ({ navigation }: RootStackParamProps<'HomeScreen'>) => {
  const { height } = useWindowDimensions();

  return (
    <KContainer>
      <View height={height * 0.2} paddingT-60 paddingH-20>
        <KTitle title="Discover your" customTitle="personality :)" />
        <KSubtitle
          text="Discover Your True Self: Take our Personality Quiz and uncover the unique
          traits that define you."
        />
        <KSpacer />
        <Button
          borderRadius={10}
          label={'Start quiz'}
          size={Button.sizes.large}
          onPress={() => navigation.navigate('QuizScreen')}
        />
      </View>
    </KContainer>
  );
};

export default HomeScreen;
