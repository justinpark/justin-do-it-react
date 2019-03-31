import React, { PureComponent } from 'react';
import { withStyles, css, withStylesPropTypes } from '../../doit-ui/withStyles';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Heading from '../../doit-ui/Heading';
import Button from '../../doit-ui/Button';

import { Modal } from '../ModalProvider';
import { REGISTER_USER_MODAL } from '../constants/modals';

export const HEIGHT = 64;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <Heading level={3} inverse>
            <Link href="/">두잇 코인 거래소</Link>
          </Heading>
          <Link href="/register">회원가입</Link>
          {false && (<Modal>
            {({ openModal }) => (
              <Button inverse bold large onPress={() => openModal(REGISTER_USER_MODAL)}>
                회원 가입
              </Button>
            )}
          </Modal>)}
        </div>
      </div>
    );
  }
}

AppNav.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => ({
  wrapper: {
    ...depth.level1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: HEIGHT - 4,
    backgroundColor: color.primary,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unit * 2,
    paddingRight: unit * 2,
  },
}))(AppNav);
