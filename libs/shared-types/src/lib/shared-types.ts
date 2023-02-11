import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// start RootStack types
export type RootStackParamList = {
  HomeScreen: undefined;
  QuizScreen: undefined;
};

export type RootStackParamProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
// end RootStack types
