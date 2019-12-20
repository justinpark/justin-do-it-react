import { SET_FILTER } from '../actions/searchFilterActions';
import { requestTransactionList, resetTransactionList } from '../actions/transactionPackActions';

export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_FILTER) {
    const { params } = payload || {};
    store.dispatch(resetTransactionList());
    store.dispatch(requestTransactionList(params));
  }
  return result;
};
