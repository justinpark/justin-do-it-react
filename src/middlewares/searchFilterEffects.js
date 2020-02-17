import { SET_FILTER } from '../actions/searchFilterActions';
// import { requestTransactionList, resetTransactionList } from '../actions/transactionPackActions';
import { requestTransactionList } from '../actions/transactionActions';

export default store => nextRunner => action => {
  const { type } = action;
  const result = nextRunner(action);
  if (type === SET_FILTER) {
    const { params } = store.getState().searchFilter || {};
    // store.dispatch(resetTransactionList());
    store.dispatch(requestTransactionList(params));
  }
  return result;
};
