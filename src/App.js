import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import history from './utils/history';

import './App.css';
import AppLayout from './component/AppLayout';
import store from './store/Store';
import './styles/css/bootstrap.min.css';
import NavBar from './containers/NavBar';

const _history = history;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={_history}>
          <NavBar/>
          <div className="page-body">
            <AppLayout history={history} />
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
