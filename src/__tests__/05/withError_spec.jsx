import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../04/InputWithStyle';
import withError from '../../05/withError';

const errorMessage = '문제 발생';
const InputWithError = withError(errorMessage)(Input);

describe('withError', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<InputWithError name="name" />).dive();
    }).not.toThrow();
  });

  it('displays displayName withError', () => {
    expect(InputWithError.displayName).toEqual(`withStyles(withError(${Input.name}))`);
  });

  it('renders default error message with hasError', () => {
    const wrapper = shallow(<InputWithError name="name" hasError />).dive();
    expect(wrapper.text()).toContain(errorMessage);
    expect(wrapper.find(Input)).toHaveLength(1);
  });

  it('renders custom errorMessage with hasError', () => {
    const customErrorMessage = '필수입력 항목입니다';
    const wrapper = shallow(
      <InputWithError errorMessage={customErrorMessage} name="name" hasError />,
    ).dive();
    expect(wrapper.text()).toContain(customErrorMessage);
  });
});
