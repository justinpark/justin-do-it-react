import React from 'react';
import { storiesOf } from '@storybook/react';

import Modal from '../06/Modal';
import ModalProvider from '../06/ModalProvider';
import ModalProviderWithKey, {
  CONFIRM_DELETE_MODAL,
  SOME_NEW_MODAL,
} from '../06/ModalProviderWithKey';
import { Consumer } from '../06/createModalProvider';
import Button from '../04/Button';
import Text from '../04/Text';

storiesOf('Modal', module)
  .addWithJSX('기본 설정', () => (
    <Modal>
      <div>
        <Text>
          정말로 삭제 하시겠습니까?
        </Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </Modal>
  ))
  .addWithJSX('ModalProvider', () => (
    <ModalProvider>
      <div>
        <Text>
          다음 버튼 눌러 모달을 실행합니다.
        </Text>
        <ModalProvider.Consumer>
          {({ openModal }) => (
            <Button onPress={() => openModal()}>모달 열기</Button>
          )}
        </ModalProvider.Consumer>
      </div>
    </ModalProvider>
  ))
  .addWithJSX('ModalProviderWithKey', () => (
    <ModalProviderWithKey>
      <div>
        <Text>
          다음 버튼 눌러 모달을 실행합니다.
        </Text>
        <Consumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(CONFIRM_DELETE_MODAL, { id: 1, name: '상품1' })}>
              모달 열기
            </Button>
          )}
        </Consumer>
        <Consumer>
          {({ openModal }) => (
            <Button onPress={() => openModal(SOME_NEW_MODAL)}>새로운 모달 열기</Button>
          )}
        </Consumer>
      </div>
    </ModalProviderWithKey>
  ));
