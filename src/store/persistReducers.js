import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'mlabs',
      storage,
      whitelist: ['channel'],
    },
    reducers
  );

  return persistedReducer;
};
