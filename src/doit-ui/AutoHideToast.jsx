import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';
import Spacing from './Spacing';
import Text from './Text';
import { debounce } from '../02/debounce';

class AutoHideToast extends PureComponent {
  static getDerivedStateFromProps({ message }, state) {
    if (message !== state.prevMessage) {
      return {
        message,
        prevMessage: message,
      }
    }
    return state;
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.hideMessage = debounce(this.hideMessage.bind(this), 4000);
  }

  hideMessage() {
    if (!this._unmounted) {
      this.setState({ message: '' });
    }
  }

  componentDidMount() {
    this.hideMessage();
  }

  componentDidUpdate() {
    this.hideMessage();
  }

  componentWillUnmount() {
    this._unmounted = true;
  }

  render() {
    const { styles, warning } = this.props;
    const { message } = this.state;

    return message && (
      <div {...css(styles.overlay)}>
        <div {...css(styles.wrapper, warning && styles.warning)}>
          <Spacing vertical={4} horizontal={8}>
            <Text inverse bold>
              {message}
            </Text>
          </Spacing>
        </div>
      </div>
    );
  }
}

AutoHideToast.propTypes = {
  ...withStylesPropTypes,
  warning: PropTypes.bool,
  message: PropTypes.string,
};

export default withStyles(({ depth, unit, color }) => ({
  overlay: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    margin: unit * 4,
  },
  wrapper: {
    ...depth.level1,
    borderRadius: unit,
    backgroundColor: color.secondary,
    paddingTop: unit * 2,
    paddingBottom: unit * 2,
    paddingRight: unit * 4,
    paddingLeft: unit * 4,
    marginBottom: unit * 4,
  },
  warning: {
    backgroundColor: color.error,
  },
}))(AutoHideToast);
