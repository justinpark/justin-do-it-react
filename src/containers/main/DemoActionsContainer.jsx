import { connect } from 'react-redux';

// import { requestTransactionList, resetTransactionList } from '../../actions/transactionPackActions';
import { requestTransactionList, setTransactionList } from '../../actions/transactionActions';

import { showMessage, hideMessage } from '../../actions/notificationActions';
import DemoActions from '../../components/main/DemoActions';

export default connect(null, {
  requestTransactionList,
  setTransactionList,
  showMessage,
  hideMessage,
})(DemoActions);
