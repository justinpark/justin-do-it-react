import { connect } from 'react-redux';
import PresentationComponent from '../PresentationComponent';

const mapStateToProps = (state, props) => {
  return {
    userName: state.user.name,
    entity: state.collection.entities[props.id],
  };
};

export default connect(mapStateToProps)(PresentationComponent);
