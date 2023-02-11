import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// start RootStack types
export type RootStackParamList = {
  HomeScreen: undefined;
  QuizScreen: undefined;
  ResultsScreen: { score: number };
};

export type RootStackParamProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
// end RootStack types
