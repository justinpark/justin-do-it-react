import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
import TransactionList from './TransactionList';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionList />
      </React.Fragment>
    );
  }
}

export default MainPage;
