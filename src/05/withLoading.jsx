import React from 'react';

export default (loadingMessage = '로딩중') => WrappedComponent => {
  const { displayName, name: componentName } = WrappedComponent;
  const wrappedComponentName = displayName || componentName;

  function WithLoading({ isLoading, ...props }) {
    if (isLoading) {
      return loadingMessage;
    }

    return <WrappedComponent {...props} />;
  }
  WithLoading.displayName = `withLoading(${wrappedComponentName})`;
  return WithLoading;
};
