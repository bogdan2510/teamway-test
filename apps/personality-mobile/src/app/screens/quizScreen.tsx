import React, { useCallback, useRef, useState } from 'react';
import { KContainer, KDataLoader, KSpacer, KTitle } from '@teamway-test/ui-kit';
import { Button, View, Colors } from 'react-native-ui-lib';
import { FlatList, SafeAreaView, useWindowDimensions } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import { RootStackParamProps } from '@teamway-test/shared-types';
import Ionicons from '@expo/vector-icons/Ionicons';

const apiUrl = 'https://mocki.io/v1/0ea90288-9bef-481c-9dc4-28464ff0c1a4';

interface QuizData {
  id: number;
  question: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  value: string;
  score: number;
}

const QuizScreen = ({ navigation }: RootStackParamProps<'QuizScreen'>) => {
  const { width, height } = useWindowDimensions();
  const getQuizData = async () => {
    const { data }: { data: QuizData[] } = await axios.get(apiUrl);
    return data;
  };
  const { data, isLoading, isError } = useQuery('quizData', getQuizData);
  const [score, setScore] = useState(0);
  const flatListRef = useRef<FlatList<QuizData>>(null);

  const handleNext = useCallback(
    (answer: Answer, index: number) => {
      if (data && index === data.length - 1) {
        navigation.navigate('ResultsScreen', { score });
        return;
      } else {
        setScore((oldState) => oldState + answer.score);
        flatListRef.current?.scrollToOffset({
          offset: width * (index + 1),
        });
      }
    },
    [data, navigation, score, width]
  );

  const BackButton = useCallback(
    () => (
      <View absL absT>
        <SafeAreaView>
          <View marginL-18>
            <Ionicons
              suppressHighlighting
              name="arrow-back"
              size={32}
              color={Colors.purple1}
              onPress={() => navigation.goBack()}
            />
          </View>
        </SafeAreaView>
      </View>
    ),
    [navigation]
  );

  return (
    <KDataLoader isLoading={isLoading} isError={isError}>
      <KContainer>
        <BackButton />
        <View height={height * 0.5}>
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            scrollEnabled={false}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View width={width} paddingH-20>
                <KTitle title={item.question} text30M />

                <KSpacer />
                {item.answers.map((answer) => (
                  <React.Fragment key={answer.id}>
                    <Button
                      label={answer.value}
                      size={Button.sizes.large}
                      borderRadius={10}
                      onPress={() => handleNext(answer, index)}
                    />
                    <KSpacer />
                  </React.Fragment>
                ))}
              </View>
            )}
            keyExtractor={({ id }) => id.toString()}
          />
        </View>
      </KContainer>
    </KDataLoader>
  );
};

export default QuizScreen;
