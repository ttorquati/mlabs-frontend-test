import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';
import { isMobile } from 'react-device-detect';

import Home from './pages/Home';
import Channel from './pages/Channel';

export default function Routes() {
  return (
    <>
      {isMobile ? (
        <Switch>
          <Route path="/channel/:channel_key" component={Channel} />
          <Route path="/" exact component={Home} />
        </Switch>
      ) : (
        <>
          <ModalRoute
            path="/channel/:channel_key"
            parentPath="/"
            component={Channel}
          />
          <Route path="/" component={Home} />
        </>
      )}
    </>
  );
}
