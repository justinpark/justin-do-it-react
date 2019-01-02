import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import withStyles, { css } from './withStyles';

class Text extends PureComponent {
  render() {
    const {
      children,
      styles,
      large,
      xlarge,
      small,
      xsmall,
      primary,
      secondary,
    } = this.props;
    return (
      <span
        {...css(
          styles.default,
          xsmall && styles.xsmall,
          small && styles.small,
          large && styles.large,
          xlarge && styles.xlarge,
          secondary && styles.secondary,
          primary && styles.primary,
        )}
      >
        {children}
      </span>
    );
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
};

export default withStyles(({ color, size, responsive }) => ({
  default: {
    color: color.default,
    fontSize: size.md,
    [responsive.small]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
  },
  xsmall: {
    fontSize: size.xs,
  },
  primary: {
    color: color.primary,
  },
  secondary: {
    color: color.secondary,
  },
}))(Text);
