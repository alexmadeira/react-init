import types from './types';

export function requestExample(id) {
  return {
    type: types.requestExample,
    payload: { id },
  };
}

export function successEequestExample(data) {
  return {
    type: types.successRequestExample,
    payload: { data },
  };
}
