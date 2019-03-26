import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
// import TransactionList from './TransactionList';
import TransactionList from '../../containers/main/TransactionListContainer';

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
