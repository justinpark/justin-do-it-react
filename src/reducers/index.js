import transactions from './transactionsReducer';
import notification from './notificationReducer';
import createReducers from '../api-redux-pack/createReducers';
import searchFilter from './searchFilterReducer';
import router from './routerReducer';

// const apiReducers = createReducers('transactions', 'users');

export default {
  // ...apiReducers,
  notification,
  searchFilter,
  router,
  transactions,
};
