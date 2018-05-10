// @flow
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR
} from './action-type';

export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES
  };
};

export const fetchMoviesSuccess = (data: any) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
};

export const fetchMoviesError = (error: string) => {
  return {
    type: FETCH_MOVIES_ERROR,
    error
  };
};

export const fetchMoviesAsyn = () => {
  return (dispatch: any, getState: any) => {
    // dispatch(fetchMovies());
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        dispatch(fetchMoviesSuccess(responseJson.movies));
      })
      .catch(error => {
        dispatch(fetchMoviesError(error));
      });
  };
};
