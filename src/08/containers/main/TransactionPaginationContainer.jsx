import { connect } from 'react-redux';
import TransactionPagination from '../../components/main/TransactionPagination';
import { requestTransactionList, requestNextTransactionList } from '../../actions/transactionPackActions';
import {
  paginationSelector,
  transactionListLoadingStateSelector,
} from '../../selectors/transactionSelectors';

const mapStateToProps = state => ({
  // params: state.searchFilter.params,
  loading: transactionListLoadingStateSelector(state),
  // pageNumber: paginationSelector(state).number || 1,
});
const mapDispatchToProps = {
  // requestTransactionList
  requestNextTransactionList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionPagination);
