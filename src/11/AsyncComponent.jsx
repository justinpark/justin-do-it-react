import React, { PureComponent } from 'react';
import Text from '../doit-ui/Text';

export default class AsyncComponent extends PureComponent {
  componentDidMount() {
    const { loader } = this.props;

    loader().then(({ default: Component }) => {
      this.Component = Component;
      this.forceUpdate();
    });
  }

  render() {
    const { loader, ...otherProps } = this.props;
    const Component = this.Component;
    if (Component) {
      return <Component {...otherProps} />;
    }

    return (
      <Text secondary large>로딩중...</Text>
    );
  }
}
