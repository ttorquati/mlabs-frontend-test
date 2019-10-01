import { all } from 'redux-saga/effects';

import channel from './channel/sagas';

export default function* rootSaga() {
  return yield all([channel]);
}
