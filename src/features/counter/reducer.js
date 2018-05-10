// @flow
import { INCREMENT } from './action-types';

const initialState = { currentCount: 0 };

export const counterReducer = (
  state: Object = initialState,
  action: Object
) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        currentCount: state.currentCount + action.number
      };
    default:
      return state;
  }
};
