import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../doit-ui/Heading';
import Button from '../../../doit-ui/Button';
import Card from '../../../doit-ui/Card';
import InlineList from '../../../doit-ui/InlineList';
import Text from '../../../doit-ui/Text';
import { Consumer as Modal } from '../../../doit-ui/Modal/context';
import { TRADE_COIN_MODAL } from '../../constants/modals';

class CoinDashlet extends PureComponent {
  render() {
    const { name, priceLabel } = this.props;
    return (
      <Modal>
        {({ openModal }) => (
          <Card vertical={4} horizontal={4}>
            <Heading level={4}>
              {name}
              <Text>{priceLabel}</Text>
            </Heading>
            <InlineList spacingBetween={1}>
              <Button
                primary
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'buy', name, price: priceLabel })
                }
              >
                매도
              </Button>
              <Button
                small
                onPress={() =>
                  openModal(TRADE_COIN_MODAL, { type: 'sell', name, price: priceLabel })
                }
              >
                매수
              </Button>
            </InlineList>
          </Card>
        )}
      </Modal>
    );
  }
}
CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};
export default CoinDashlet;
