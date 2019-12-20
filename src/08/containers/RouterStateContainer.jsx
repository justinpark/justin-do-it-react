import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLocation } from '../actions/routerActions';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';

class RouterState extends React.PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  componentDidUpdate() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }
  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
  location: PropTypes.object,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);
