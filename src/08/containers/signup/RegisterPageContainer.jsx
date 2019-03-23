import { connect } from 'react-redux';
import RegisterPage from '../../components/signup/RegisterPage';
import { createUser } from '../../actions/userActions';

export default connect(null, { createUser })(RegisterPage);
