import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { setUser } from '../actions/userActions';
import { setCollection, setAge } from '../actions/collectionActions';

const mapDispatchToProps = {
  setLoading,
  resetLoading,
  setUser,
  setAge,
  setCollection,
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setLoading: loading => dispatch(setLoading(loading)),
//   };
// };

export default connect(null, mapDispatchToProps)(ActionComponent);
