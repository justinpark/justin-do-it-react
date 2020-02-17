import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
// import { requestTransactionList } from '../../actions/transactionPackActions';
import { setFilter } from '../../actions/searchFilterActions';

import { requestTransactionList } from '../../actions/transactionActions';
import { transactionListLoadingStateSelector } from '../../selectors/transactionSelectors';

const mapStateToProps = state => {
  const { pagination, loading, ids } = state.transactions;
  const { number, size } = pagination;

  return {
    // searchParams: state.searchFilter.params,
    hasNext: ids.length === size,
    loading: transactionListLoadingStateSelector(state),
    pageNumber: number || 1,
  };
};
const mapDispatchToProps = {
  setFilter,
  requestTransactionList,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);
