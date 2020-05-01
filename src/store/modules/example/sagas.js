import { all, put, call, takeLatest } from 'redux-saga/effects';

// import api from '~/services/api';

import { successEequestExample } from './actions';
import types from './types';

export function* getExample({ payload }) {
  const { id } = payload;
  try {
    const response = yield call('API', `/url/${id}`);
    yield put(successEequestExample(response.data));
  } catch (err) {
    console.tron.log(err);
  }
}
export default all([takeLatest(types.requestExample, getExample)]);
