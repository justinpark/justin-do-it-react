import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';

function ButtonWithContext({ children }, context) {
  const { loading, setLoading } = context;

  return <Button onPress={() => setLoading(!loading)}>{loading ? '로딩중' : children}</Button>;
}

ButtonWithContext.contextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default ButtonWithContext;
