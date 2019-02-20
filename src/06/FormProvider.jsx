import React from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = React.createContext({});

export default class FormProvider extends React.PureComponent {
  static Consumer = Consumer;

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      errors: {},
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(updatedValue = {}) {
    this.validate(updatedValue, this.state.value);
    this.setState(({ value }) => ({
      value: {
        ...value,
        ...updatedValue,
      },
    }));
  }

  submit() {
    this.props.onSubmit(this.state.value);
  }

  reset() {
    this.setState({ value: {} });
  }

  validate(value) {
    const errors = this.props.validate(value, this.props.value);
    this.setState(({ errors: prevErrors }) => ({
      errors: {
        ...prevErrors,
        ...errors,
      },
    }))
  }

  render() {
    const { value, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          value,
          onChange: this.onChange,
          reset: this.reset,
          submit: this.submit,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  validate: () => ({}),
};
