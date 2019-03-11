import React, { PureComponent } from 'react';
// import axios from 'axios';
// import Api from '../../Api';
import Heading from '../../../doit-ui/Heading';
import Card from '../../../doit-ui/Card';

// import TransactionSearchFilter from './TransactionSearchFilter';
import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer';
import TransactionTable from './TransactionTable';

class TransactionList extends PureComponent {
  // state = {
  //   transactions: [
  //     {
  //       id: 'btx_01',
  //       name: '비트코인(BTX)',
  //       totalPrice: '123,123,000,000원',
  //       currentPrice: '4,200,000원',
  //       datetime: '2019/01/20 08:23:22',
  //     }
  //   ],
  // }

  componentDidMount() {
    // Api.get('/transactions', { params: { code: 'BTX' } })
      // .then(({ data }) => this.setState({ transactions: data }))
    // fetch('http://localhost:4000/transactions')
    //   .then(response => response.json())
      // .then(transactions => this.props.setTransactionList(transactions));
      // .then(({ data }) => this.setState({ transactions: data }));
    // Api.get('/transactions').then(({ data }) => this.props.setTransactionList(data));
    this.props.requestTransactionList();
  }

  render() {
    // const { transactions } = this.state;
    const { transactions, loading } = this.props;
    return (
      <div>
        <Heading level={3}>거래 현황</Heading>
        <Card vertical={4} horizontal={4}>
          <TransactionSearchFilterContainer />
        </Card>
        <Card>
          <TransactionTable transactions={transactions} isLoading={loading} />
        </Card>
      </div>
    );
  }
}

TransactionList.defaultProps = {
  transactions: [],
  requestTransactionList: () => {},
};

export default TransactionList;
