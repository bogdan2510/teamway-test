import React, { useEffect, useState } from 'react';
import { KContainer, KSpacer, KSubtitle, KTitle } from '@teamway-test/ui-kit';
import { Button, View } from 'react-native-ui-lib';
import { RootStackParamProps } from '@teamway-test/shared-types';

const extrovertDefinition = `An extrovert is a person who is sociable, energetic, and seeks interaction with others. They tend to be outgoing, confident, and enjoy being in social situations and around people. Extroverts tend to get their energy from being around others, as opposed to introverts who tend to be more reserved and recharge by being alone. Extroversion is one of the primary dimensions of personality and is often used to describe an individual's general tendencies in social situations.`;

const introvertDefinition = `An introvert is a person who tends to be more reserved, introspective, and focused on their own thoughts and feelings. They may prefer solitary activities and have a smaller group of close friends. Introverts tend to be drained by excessive social stimulation and may feel overwhelmed in large groups or noisy environments. They recharge their batteries by spending time alone and engaging in solitary activities. Introversion is one of the primary dimensions of personality and is often used to describe an individual's general tendencies in social situations. It's important to note that introversion and extroversion exist on a spectrum, and most people fall somewhere in between, with some tendencies towards one side or the other.`;

const ResultsScreen = ({
  navigation,
  route,
}: RootStackParamProps<'ResultsScreen'>) => {
  const { score } = route.params;
  const [result, setResult] = useState<'Extrovert' | 'Introvert' | ''>('');
  useEffect(() => {
    if (score > 0) {
      setResult('Extrovert');
    } else {
      setResult('Introvert');
    }
  }, [score]);

  return (
    <KContainer>
      <View padding-20>
        <KTitle text40 title="You are" customTitle={result} />
        <KSpacer height={20} />
        <KSubtitle
          text={
            result === 'Extrovert' ? extrovertDefinition : introvertDefinition
          }
        />
        <KSpacer height={20} />

        <Button
          label="Restart"
          borderRadius={10}
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    </KContainer>
  );
};

export default ResultsScreen;
