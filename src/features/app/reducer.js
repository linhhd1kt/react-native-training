// @flow

import { combineReducers } from 'redux';
import { movieReducer, counterReducer } from '..';

export const appReducer = combineReducers({
  movie: movieReducer,
  counter: counterReducer
});
