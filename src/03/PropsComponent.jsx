import React from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
  render() {
    return (
     <div className="message-container">
       {this.props.name}
     </div>
    );
  }
}

// 자료형을 선언하는 예제
PropsComponent.propTypes = {
  name: PropTypes.string,
};

export default PropsComponent;
