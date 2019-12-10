import { SET_ERROR, TRADE_COMPLETE, requestTransactionList } from '../actions/transactionActions';
import { showMessage } from '../actions/notificationActions';

export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === TRADE_COMPLETE) {
    const message = '거래 목록을 최신 정보로 업데이트하였습니다.';
    store.dispatch(showMessage(message));
    store.dispatch(requestTransactionList());
  }
  return result;
};
