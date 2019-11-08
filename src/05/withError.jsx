import React from 'react';
import withStyles, { css } from '../04/withStyles';

// TODO: withError HoC만들기
// hasError, errorMessage
// hasError true => errorMessage 페인트
// 만약 errorMessage가 없으면 defaultMessage를 뿌려주기 (defaultProps)
// 컴포넌트 원래대로 그리고 대신 그 밑에 에러메세지를 찍어주기

export default function(defaultMessage) {
  return WrappedComponent => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
        </React.Fragment>
      );
    }
    ComponentWithError.defaultProps = {
      errorMessage: defaultMessage,
    };

    ComponentWithError.displayName = `withError(${wrappedComponentName})`;
    return withStyles(({ color }) => ({
      error: {
        color: color.error,
      },
    }))(ComponentWithError);
  };
}
