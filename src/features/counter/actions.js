// @flow
import { INCREMENT } from './action-types';
export const increment = (number: number) => {
  return {
    type: INCREMENT,
    number
  };
};
