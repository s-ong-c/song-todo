import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { ThemeType, useThemeContext } from '../../providers/ThemeProvider';
import Intro from '../screen/Intro';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Temp from '../screen/Temp';
import MainNavigator from './MainStackNavigator';

export type RootStackParamList = {
  default: undefined;
  Intro: undefined;
  Main: undefined;
  Temp: { param: string };
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator(): React.ReactElement {
  const { theme, themeType } = useThemeContext();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTitleStyle: { color: theme.fontColor },
          headerTintColor: theme.tintColor,
        }}
        headerMode={themeType === ThemeType.DARK ? 'screen' : 'float'}
      >
        {/* ROUTER CHANGE  */}
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Temp" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;