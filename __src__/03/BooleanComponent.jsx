import React from 'react';
import PropTypes from 'prop-types';

class BooleanComponent extends React.Component {
  render() {
    // 불리언 타입을 조건문에 적용한 예제
    const message = this.props.bored ? '놀러 가자' : '하던 일 열심히 마무리하기';
    return <div className="message-container">{message}</div>;
  }
}

// 자료형을 선언하는 예제
BooleanComponent.propTypes = {
  bored: PropTypes.bool,
};

export default BooleanComponent;
