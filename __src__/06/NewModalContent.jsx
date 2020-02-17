import React from 'react';
import { Consumer } from './ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';

export default function NewModalContent() {
  return (
    <Consumer>
      {({ closeModal }) => (
        <div>
          <div>
            <Text>
              새로운 모달 내용
            </Text>
          </div>
          <Button onPress={closeModal}>닫기</Button>
        </div>
      )}
    </Consumer>
  );
}
