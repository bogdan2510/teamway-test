import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@teamway-test/shared-types';
import { HomeScreen, QuizScreen } from './screens';
import { Colors } from 'react-native-ui-lib';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{
            headerTitle: '',
            headerStyle: {
              backgroundColor: Colors.purple70,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
