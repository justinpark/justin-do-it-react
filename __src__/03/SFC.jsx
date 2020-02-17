import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  // 클래스 컴포넌트의 this.props값과 동일합니다.
  const { somePropValue } = props;
  // 클래스 컴포넌트의 this.context와 동일합니다.
  // context는 차후에 자세히 다룰 예정입니다.
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
