import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './FormContext';

export default class FormProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
      errors: {},
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(name, updatedValue) {
    this.validate(this.state.values);
    this.setState(({ values }) => ({
      values: {
        ...values,
        [name]: updatedValue,
      },
    }));
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState(({
      errors,
    }));
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
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


/*
const validate = (values) => {
  const errors = {};
  if (!values.name) errors['name'] = '이름을 입력해야합니다.';
  if (values.age && values.age < 18) errors['age'] = '나이는 18세 이상이여야 합니다.';
  return errors;
};
<Form validate={validate}>
  <FormConsumerExample name="name" />
  <FormConsumerExample name="age" />
  <FormConsumerExample name="totalAmount" />
</Form>
*/
