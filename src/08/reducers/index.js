// import transactions from './transactionsReducer';
import notification from './notificationReducer';
import createReducers from '../../10/api-redux-pack/createReducers';
import searchFilter from './searchFilterReducer';

const apiReducers = createReducers('transactions');

export default {
  ...apiReducers,
  notification,
  searchFilter,
  // transactions,
};
