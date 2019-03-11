import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Text from '../../../doit-ui/Text';
import Spacing from '../../../doit-ui/Spacing';
import Input from '../../../doit-ui/Input';
import Button from '../../../doit-ui/Button';
import InlineList from '../../../doit-ui/InlineList';
import { Modal } from '../../ModalProvider';
import Form from '../../../doit-ui/Form';

class TradeCoinPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    const { name, createTransaction } = this.props;
    const formValues = {
      ...values,
      name,
    };
    createTransaction(formValues);
  }
  render() {
    const { name, price, type } = this.props;
    const typeName = type === 'sell' ? '판매' : '구매';
    return (
      <Form onSubmit={this.handleSubmit} initValues={{ currentPrice: price }}>
        <Form.Consumer>
          {({ onChange, values }) => (
            <Modal>
              {({ closeModal }) => (
                <Spacing horizontal={4} vertical={8}>
                  <Text xlarge bold>
                    {name} {typeName}
                  </Text>
                  <Spacing bottom={2}>
                    <Input
                      name="currentPrice"
                      label="금액"
                      value={values['currentPrice']}
                      onChange={onChange}
                    />
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
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default TradeCoinPage;
