import Api from '../Api';
import { showMessage } from './notificationActions';

export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';
export const TRADE_COMPLETE = 'transaction/TRADE_COMPLETE';

const PAGE_SIZE = 10;

export function loading() {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  };
}

export function setTransactionList(transactions, meta) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions,
    meta,
  };
}

export const FETCH_TRANSACTION_LIST = 'transaction/FETCH_TRANSACTION_LIST';

export function requestTransactionList(params, _page = 1) {
  return {
    type: FETCH_TRANSACTION_LIST,
    promise: Api.get('/transactions', {
      params: {
        _page,
        _limit: 10,
        ...params,
      },
    }),
    meta: {
      notification: {
        success: '데모 완료',
      },
    },
  };
}
