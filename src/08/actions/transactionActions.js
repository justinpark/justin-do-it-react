import Api from '../Api';
import { showMessage } from './notificationActions';

export const LOADING_TRANSACTION_LIST = 'transaction/LOADING_TRANSACTION_LIST';
export const SET_TRANSACTION_LIST = 'transaction/SET_TRANSACTION_LIST';
export const SET_ERROR = 'transaction/SET_ERROR';

export function loading() {
  return {
    type: LOADING_TRANSACTION_LIST,
  };
}

export function setError(errorMessage) {
  return {
    type: SET_ERROR,
    payload: { errorMessage },
  }
}

export function setTransactionList(transactions) {
  return {
    type: SET_TRANSACTION_LIST,
    payload: transactions
  };
}

export function requestTransactionList(params) {
  return dispatch => {
    dispatch(loading());
    Api.get('/transactions', { params }).then(
      ({ data }) => dispatch(setTransactionList(data)),
      error => {
        dispatch(setError(error.response.data.errorMessage));
        // dispatch(showMessage(error.response.data.errorMessage, true));
      },
    );
  }
}

export function createTransaction(data) {
  return dispatch =>
    Api.post('/transactions', data).then(
      ({ data }) => {
        dispatch(setError('거래 중 문제가 발생하였습니다.'))
        // dispatch(showMessage('거래가 성공적으로 처리되었습니다.'))
      },
      error => dispatch(setError(error)),
    );
}
