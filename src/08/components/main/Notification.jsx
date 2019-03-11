import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../../doit-ui/Toast';

class Notification extends PureComponent {
  render() {
    const { hasError, errorMessage } = this.props;
    return hasError && (
      <Toast message={errorMessage} warning />
    );
  }
}

Notification.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Notification;
