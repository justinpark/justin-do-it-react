import React, { PureComponent } from 'react';
import Modal from './Modal';
import Button from '../04/Button';
import Text from '../04/Text';

const { Provider, Consumer } = React.createContext({});

export { Consumer };

class ModalProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { showModal: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen(contentId, modalProps) {
    this.contentId = contentId;
    this.modalProps = modalProps;
    this.setState({ showModal: true });
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  render() {
    const { children } = this.props;
    const { showModal } = this.state;

    return (
      <Provider
        value={{
          openModal: this.handleOpen,
          closeModal: this.handleClose,
        }}
      >
        {children}
        {showModal && (
          <Modal>
            <div>
              <Text>정말로 삭제 하시겠습니까?</Text>
            </div>
            <Button primary>예</Button>
            <Button onPress={() => this.setState({ showModal: false })}>닫기</Button>
          </Modal>
        )}
      </Provider>
    );
  }
}

export default ModalProvider;
