// @flow

import { SwitchNavigator } from 'react-navigation';
import { CounterScreen, MovieScreen } from '../features';

export const AppNavigator = SwitchNavigator(
  {
    counter: { screen: CounterScreen },
    movie: { screen: MovieScreen }
  },
  {
    initialRouteName: 'movie'
  }
);
