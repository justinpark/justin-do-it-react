import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from './withStyles';

class TableCell extends PureComponent {
  render() {
    const { align, baseline, styles, children, isHeader } = this.props;
    const Tag = isHeader ? 'th' : 'td';
    return (
      <Tag
        {...css(
          styles.cell,
          isHeader && styles.header,
          !isHeader && baseline && styles.baseline,
          align === 'center' && styles.alignCenter,
          align === 'right' && styles.alignRight,
        )}
      >
        {children}
      </Tag>
    );
  }
}

TableCell.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  baseline: PropTypes.bool,
  children: PropTypes.node,
  isHeader: PropTypes.bool,
};

TableCell.defaultProps = {
  baseline: true,
  isHeader: false,
};

export default withStyles(({ color, unit }) => ({
  cell: {
    paddingTop: unit * 4,
    paddingBottom: unit * 4,
    paddingRight: unit * 8,
    paddingLeft: unit * 8,
    backgroundColor: color.white,
    textAlign: 'left'
  },
  header: {
    backgroundColor: color.primary,
    color: color.white
  },
  baseline: {
    borderBottom: `1px solid ${color.border}`
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
}))(TableCell);
