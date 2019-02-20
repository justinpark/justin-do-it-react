import React from 'react';
import PropTypes from 'prop-types';

export const loadingPropTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context
    return (
      <WrappedComponent {...props} loading={loading} setLoading={setLoading} />
    );
  };
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = loadingPropTypes;
  return WithLoadingContext;
};
