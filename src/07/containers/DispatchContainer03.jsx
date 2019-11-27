import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent02';
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

export default connect(null, mapDispatchToProps)(ActionComponent);
