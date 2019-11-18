import React, { PureComponent } from 'react';
import Button from '../04/Button';
import Text from '../04/Text';
import Modal from './Modal';

class ButtonWithModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  render() {
    return (
      <React.Fragment>
        <Button onPress={() => this.setState({ showModal: true })}>삭제</Button>
        {this.state.showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제 하시겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

export default ButtonWithModal;
