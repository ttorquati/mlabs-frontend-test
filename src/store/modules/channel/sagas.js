import { all, takeLatest, put } from 'redux-saga/effects';
import history from '~/services/history';

import { addChannelSuccess } from './actions';

export function* addChannel({ payload }) {
  yield put(addChannelSuccess(payload));
  history.push('/');
}

export function setChannel({ payload }) {
  if (!payload) history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setChannel),
  takeLatest('@channel/ADD_CHANNEL_REQUEST', addChannel),
]);
