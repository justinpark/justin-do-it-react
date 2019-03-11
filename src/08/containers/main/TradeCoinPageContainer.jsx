import { connect } from 'react-redux';
import TradeCoinPage from '../../components/main/TradeCoinPage';
import { createTransaction } from '../../actions/transactionActions';

export default connect(null, { createTransaction })(TradeCoinPage);
