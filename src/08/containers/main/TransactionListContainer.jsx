import { connect } from 'react-redux';
import TransactionList from '../../components/main/TransactionList';
// import { setTransactionList } from '../../actions/transactionActions';
import { requestTransactionList } from '../../actions/transactionActions';

const mapStateToProps = state => {
  const { ids, entities, loading } = state.transactions;
  const transactions = ids.map(id => entities[id]);

  return { transactions, loading };
};
const mapDispatchToProps = {
  requestTransactionList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionList);
