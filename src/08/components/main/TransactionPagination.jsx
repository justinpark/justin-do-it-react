import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';

class TransactionPagination extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.handleNextPress = this.handleNextPress.bind(this);
  //   this.handlePrevPress = this.handlePrevPress.bind(this);
  // }
  // handleNextPress() {
  //   const { requestTransactionList, pageNumber, params } = this.props;
  //   requestTransactionList(params, pageNumber + 1);
  //   requestTransactionList(pageNumber + 1);
  // }
  // handlePrevPress() {
  //   const { requestTransactionList, pageNumber, params } = this.props;
  //   requestTransactionList(params, pageNumber - 1);
  //   requestTransactionList(pageNumber - 1);
  // }
  render() {
    // const { loading, pageNumber } = this.props;
    const { loading, requestNextTransactionList } = this.props;
    // const prevDisabled = loading || pageNumber <= 1;
    const nextDisabled = loading;
    return (
      <Button disabled={nextDisabled} onPress={requestNextTransactionList}>
        {loading ? '로딩중' : '다음 결과 더 보기'}
      </Button>
    );
  }
}

TransactionPagination.propTypes = {
  // pageNumber: PropTypes.number,
  // loading: PropTypes.bool,
  // requestTransactionList: PropTypes.func.isRequired
  requestNextTransactionList: PropTypes.func.isRequired
};

export default TransactionPagination;
