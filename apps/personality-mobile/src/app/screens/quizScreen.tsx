import React from 'react';
import { KContainer, KSpacer, KTitle } from '@teamway-test/ui-kit';
import { Button, View } from 'react-native-ui-lib';

const QuizScreen = () => {
  return (
    <KContainer center={false}>
      <View padding-20>
        <KTitle
          title="You’re really busy at work and a colleague is telling you their life
          story and personal woes. You:"
        />
        <KSpacer height={20} />
        <Button
          outline={true}
          label="Don’t dare to interrupt them"
          borderRadius={10}
        />
      </View>
    </KContainer>
  );
};

export default QuizScreen;
