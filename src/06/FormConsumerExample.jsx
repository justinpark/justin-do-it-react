import React, { PureComponent } from 'react';

import Input from '../04/InputWithStyle';
import Form from './Form';

class FormConsumerExample extends PureComponent {
  render() {
    const { name, ...otherProps } = this.props;
    return (
      <Form.Consumer>
        {({ values, errors, onChange }) => (
          <Input
            {...otherProps}
            name={name}
            onChange={onChange}
            value={values[name]}
            errorMessage={errors[name]}
          />
        )}
      </Form.Consumer>
    );
  }
}

export default FormConsumerExample;
