import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Option extends PureComponent {
  render() {
    const { value, label, disabled } = this.props;

    return (
      <option value={value} disabled={disabled}>
        {label || value}
      </option>
    );
  }
}

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Option;
