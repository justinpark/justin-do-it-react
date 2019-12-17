// import Api from '../Api';
import selectorAction from 'selector-action';
import createActions from '../../11/api-redux-pack/createActions';
import { paginationSelector } from '../selectors/transactionSelectors';

const { collection, create, reset: resetTransactionList } = createActions('transactions');

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';
export const FETCH_TRANSACTION = 'transaction/FETCH_TRANSACTION';
export const UPDATE_TRANSACTION = 'transaction/UPDATE_TRANSACTION';
export const CREATE_TRANSACTION = 'transaction/CREATE_TRANSACTION';

// export function _requestTransactionList(params) {
//   return {
//     type: FETCH_TRANSACTION_LIST,
//     promise: Api.get('/transactions', { params }),
//     meta: {
//       notification: {
//         success: '거래 목록을 최신 정보로 업데이트하였습니다.',
//         error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
//       },
//     },
//   };
// }

// const PAGE_SIZE = 10;

// export function requestTransactionList(params, _page = 1) {
//   return {
//     type: FETCH_TRANSACTION_LIST,
//     promise: Api.get('/transactions', {
//       params: {
//         ...params,
//         _page,
//         _limit: PAGE_SIZE,
//       },
//     }),
//     meta: {
//       pageNumber: _page,
//       pageSize: PAGE_SIZE,
//       notification: {
//         success: '거래 목록을 최신 정보로 업데이트하였습니다.',
//         error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
//       },
//     },
//   };
// }

// export function createTransaction(data, closeModal) {
//   return {
//     type: CREATE_TRANSACTION,
//     promise: Api.post('/transactions', data),
//     meta: {
//       onSuccess: closeModal,
//     },
//   };
// }

const PAGE_SIZE = 10;
// export function requestTransactionList(params, _page = 1) {
//   const meta = {
//     pageNumber: _page,
//     pageSize: PAGE_SIZE,
//     notification: {
//       success: '거래 목록을 최신 정보로 업데이트하였습니다.',
//       error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
//     },
//   };
//   return collection({
//     ...params,
//     _page,
//     _limit: PAGE_SIZE,
//   }, meta);
// }

export function requestTransactionList(_page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트하였습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
    },
  };
  return selectorAction(
    state => state.searchFilter.params,
    params =>
      collection(
        {
          ...params,
          _page,
          _limit: PAGE_SIZE,
        },
        meta,
      ),
  );
}

export function requestNextTransactionList() {
  const meta = {
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트하였습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
    },
  };
  return selectorAction(
    state => state.searchFilter.params,
    paginationSelector,
    (params, pagination) =>
      collection(
        {
          ...params,
          _page: pagination.number + 1,
          _limit: PAGE_SIZE,
        },
        {
          ...meta,
          pageNumber: pagination.number + 1,
        },
      ),
  );
}

export function createTransaction(data, closeModal) {
  return create(data, {}, { onSuccess: closeModal });
}
export { resetTransactionList };
