// import { createSelector } from 'reselect';
import createSelectors from '../../11/api-redux-pack/createSelectors';

export const {
  resourceSelector: transactionsSelector,
  entitiesSelector: transactionEntitiesSelector,
  pagesSelector: transactionPagesSelector,
  collectionSelector: transactionListSelector,
  collectionLoadingStateSelector: transactionListLoadingStateSelector,
  createLoadingStateSelector: transactionCreateLoadingStateSelector,
  paginationSelector,
} = createSelectors('transactions');

// import {
//   FETCH_TRANSACTION_LIST,
//   CREATE_TRANSACTION
// } from '../actions/transactionPackActions';

// export const transactionsSelector = state => state.transactions;
// export const transactionEntitiesSelector = state =>
//   transactionsSelector(state).entities;
// export const transactionPagesSelector = state =>
//   transactionsSelector(state).pages;
// export const transactionListSelector = createSelector(
//   [transactionsSelector],
//   transactions => {
//     const { entities, ids } = transactions;
//     return ids.map(id => entities[id]);
//   }
// );

// export const loadingStateSelector = state =>
//   transactionsSelector(state).loadingState;
// export const errorStateSelector = state =>
//   transactionsSelector(state).errorState;

// export const transactionListLoadingStateSelector = state =>
//   loadingStateSelector(state)[FETCH_TRANSACTION_LIST];
// export const transactionCreateLoadingStateSelector = state =>
//   loadingStateSelector(state)[CREATE_TRANSACTION];

// export const paginationSelector = createSelector(
//   transactionsSelector,
//   transactions => {
//     const { pagination } = transactions;

//     return {
//       number: pagination.number || 0,
//       size: pagination.size
//     };
//   }
// );
// export const firstPageLoadingSelector = createSelector(
//   transactionListLoadingStateSelector,
//   paginationSelector,
//   (loading, { number }) => loading && number === 0,
// );
