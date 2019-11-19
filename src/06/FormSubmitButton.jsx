import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './FormContext';
import Button from '../04/Button';

class FormSubmitButton extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Consumer>
        {({ submit }) => (
          <Button primary onPress={submit}>
            {children}
          </Button>
        )}
      </Consumer>
    );
  }
}

FormSubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSubmitButton;
