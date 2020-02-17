import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';
import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
