import { SET_ERROR } from '../actions/transactionActions';
import { SHOW_NOTIFICATION, showMessage, hideMessage } from '../actions/notificationActions';

let prevHideCaller;
export default store => nextRunner => action => {
  const { type, payload } = action;
  if (type === SET_ERROR) {
    const { errorMessage } = payload;
    store.dispatch(showMessage(errorMessage, true));
  } else if (type === SHOW_NOTIFICATION) {
    const hide = () => store.dispatch(hideMessage());
    if (prevHideCaller) {
      clearTimeout(prevHideCaller);
    }
    prevHideCaller = setTimeout(hide, 4000);
  }
  return nextRunner(action);
}
