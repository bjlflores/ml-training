import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React from 'react';

import { LoginScreen } from '../screens/LoginScreen/login.screen';
import { MLHomeScreen } from '../screens/MLHomeScreen/ml-home.screen';

import { screenOptions } from './screen-options';
import { Screens } from './screens.enum';

const PublicStack = createStackNavigator<PublicStackParams>();

export type PublicStackParams = {
  [Screens.LOGIN]: undefined;
  [Screens.ML_HOME]: undefined;
};

export type PublicScreenProps<T extends keyof PublicStackParams> = StackScreenProps<
  PublicStackParams,
  T
>;

export default function PublicRoutes(): JSX.Element {
  return (
    <PublicStack.Navigator initialRouteName={Screens.ML_HOME} screenOptions={screenOptions}>
      <PublicStack.Screen component={MLHomeScreen} name={Screens.ML_HOME} />
      <PublicStack.Screen component={LoginScreen} name={Screens.LOGIN} />
    </PublicStack.Navigator>
  );
}
