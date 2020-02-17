import React from 'react';
import shallowEqual from 'shallow-equal';

export class PureComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps) ||
           !shallowEqual(this.state, nextState)
  }
}
