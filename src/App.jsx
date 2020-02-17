import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/main/MainPage';
import configureStore from './store/configureStore';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <MainPage />
        </Router>
      </Provider>
    );
  }
}

export default CoinApp;
