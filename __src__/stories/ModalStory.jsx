import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../06/Modal';
import ModalProvider, { Consumer } from '../06/ModalProvider';
import ModalProviderWithKey, {
  CONFIRM_DELETE_MODAL,
  CREATE_MEMBER_MODAL,
} from '../06/ModalProviderWithKey';
// import { Consumer as ModalConsumer } from '../06/createModalProvider';
import { Consumer as ModalConsumer } from '../06/ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';
import ButtonWithModal from '../06/ButtonWithModal';

storiesOf('Modal', module)
  .addWithJSX('기본 설정', () => (
    <Modal>
      <div>
        <Text>정말로 삭제 하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .addWithJSX('ButtonWithModal', () => <ButtonWithModal />)
  .addWithJSX('ModalProvider', () => (
    <ModalProvider>
      <div>
        <Text>다음 버튼 눌러 모달을 실행합니다.</Text>
        <Consumer>{({ openModal }) => <Button onPress={() => openModal()}>삭제</Button>}</Consumer>
      </div>
    </ModalProvider>
  ))
  .addWithJSX('ModalProviderWithKey', () => (
    <ModalProviderWithKey>
      <div>
        <Text>다음 버튼 눌러 모달을 실행합니다.</Text>
        <ModalConsumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CONFIRM_DELETE_MODAL, { id: 1, name: '상품1' })}>
              모달 열기
            </Button>
          )}
        </ModalConsumer>
        <ModalConsumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>회원 가입</Button>
          )}
        </ModalConsumer>
      </div>
    </ModalProviderWithKey>
  ));
