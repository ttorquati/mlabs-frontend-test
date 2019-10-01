import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <ModalContainer />
        </Router>
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
