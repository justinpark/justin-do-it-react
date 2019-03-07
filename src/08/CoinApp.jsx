import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';
import TransactionListContainer from './containers/main/TransactionListContainer';
import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';

class CoinApp extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <CoinOverview />
            <TransactionListContainer />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default CoinApp;
