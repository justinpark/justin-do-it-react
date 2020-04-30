import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, value, name, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          className={`validate ${errorMessage && 'invalid'}`}
          ref={this.setRef}
          type={type}
          onChange={this.handleChange}
          value={value}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  autoFocus: false,
};

export default Input;
