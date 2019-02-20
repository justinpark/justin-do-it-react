import React from 'react';
import PropTypes from 'prop-types';
import Button from '../04/Button';
import withLoadingContextAndKey, { loadingPropTypes } from './withLoadingContextAndKey';

function ButtonWithLoadingContext({ label, loading, setLoading }) {
  return (
    <Button onPress={() => setLoading(!loading)}>
      {loading ? '로딩중' : label}
    </Button>
  );
}

ButtonWithLoadingContext.propTypes = {
  ...loadingPropTypes,
  label: PropTypes.string,
};

export const ButtonWithDefaultLoadingContext = withLoadingContextAndKey()(ButtonWithLoadingContext);
export const ButtonWithLoading2Context = withLoadingContextAndKey('loading2')(ButtonWithLoadingContext);

