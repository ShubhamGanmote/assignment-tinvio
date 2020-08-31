import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/:provider/:messageType/chat/:id' component={Layout} />
        <Route exact path='/' render={() => <Redirect to='/messenger/unread/chat/3' />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
