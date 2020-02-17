import React from 'react';
import { DEFAULT_KEY, contextPropTypes } from './LoadingProviderWithKey';

export const loadingPropTypes = contextPropTypes;

export default (contextKey = DEFAULT_KEY) => WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoadingContext(props, context) {
    const { loading, setLoading } = context[contextKey];
    console.log('c', context);
    return <WrappedComponent {...props} loading={loading} setLoading={setLoading} />;
  }
  WithLoadingContext.displayName = `withLoadingContext(${wrappedComponentName})`;
  WithLoadingContext.contextTypes = {
    [contextKey]: contextPropTypes,
  };
  return WithLoadingContext;
};
