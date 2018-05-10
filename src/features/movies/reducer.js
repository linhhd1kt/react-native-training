// @flow
import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from './action-type';
const initialState = { currentCount: 0, movies: [], error: '' };

export const movieReducer = (state: Object = initialState, action: any) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.data
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
