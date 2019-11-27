import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

const mapDispatchToProps = dispatch => {
  return {
    setAge: (id, age) => dispatch(setAge(id, age)),
  };
};

export default connect(null, mapDispatchToProps)(ActionComponent);
