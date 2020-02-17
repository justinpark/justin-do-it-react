import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PresentationComponent extends PureComponent {
  render() {
    const { userName, entity } = this.props;
    return (
      <div>
        이름: {userName}
        선택된 항목: {entity && `name: ${entity.name}, age: ${entity.age}`}
      </div>
    );
  }
}

PresentationComponent.propTypes = {
  userName: PropTypes.string,
  entity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.number,
  })
};

export default PresentationComponent;
