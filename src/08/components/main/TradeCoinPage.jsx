import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import { Modal } from '../../ModalProvider';

class TradeCoinPage extends PureComponent {
  render() {
    const { name, price, type } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return (
      <Modal>
        {({ closeModal }) => (
          <Spacing horizontal={4} vertical={8}>
            <Text xlarge bold>
              {name} {typeName}
            </Text>
            <Spacing bottom={2}>
              <Input name="price" label="금액" value={price} />
            </Spacing>
            <Spacing bottom={2}>
              <Input name="amount" label="수량" />
            </Spacing>
            <InlineList spacingBetween={1}>
              <Button primary>{typeName}</Button>
              <Button onPress={closeModal}>취소</Button>
            </InlineList>
          </Spacing>
        )}
      </Modal>
    );
  }
}

TradeCoinPage.propTypes = {
  onBuyPress: PropTypes.func,
  onSellPress: PropTypes.func,
};

export default TradeCoinPage;
