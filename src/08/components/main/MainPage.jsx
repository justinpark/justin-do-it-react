import React, { PureComponent } from 'react';
import CoinOverview from './CoinOverview';
// import TransactionList from './TransactionList';
import TransactionListContainer from '../../containers/main/TransactionListContainer';

class MainPage extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <CoinOverview />
        <TransactionListContainer />
      </React.Fragment>
    );
  }
}

export default MainPage;
