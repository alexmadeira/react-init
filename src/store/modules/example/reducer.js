import produce from 'immer';

import types from './types';

const INITIAL_STATE = {
  examples: [],
};

export default function banner(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.successRequestExample: {
        draft.examples = action.payload.data;
        break;
      }

      default:
    }
  });
}
