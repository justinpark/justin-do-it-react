import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../04/Button';
import withLoading from '../../05/withLoading';

const ButtonWithLoading = withLoading()(Button);

describe('withLoading', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<ButtonWithLoading>테스트</ButtonWithLoading>);
    }).not.toThrow();
  });

  it('displays displayName withLoading', () => {
    expect(ButtonWithLoading.displayName).toEqual(`withLoading(${Button.displayName})`);
  });

  it('renders default loading message with isLoading', () => {
    const wrapper = shallow(<ButtonWithLoading isLoading>테스트</ButtonWithLoading>);
    expect(wrapper.text()).toEqual('로딩중');
    expect(wrapper.find(Button)).toHaveLength(0);
  });

  it('renders loadingMessage with isLoading', () => {
    const customLoadingMessage = '기다려주세요...';
    const ButtonWithLoadingMessage = withLoading(customLoadingMessage)(Button);
    const wrapper = shallow(<ButtonWithLoadingMessage isLoading>테스트</ButtonWithLoadingMessage>);
    expect(wrapper.text()).toEqual(customLoadingMessage);
  });
});
