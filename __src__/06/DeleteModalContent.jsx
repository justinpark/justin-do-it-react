import React from 'react';
import { Consumer } from './ModalContext';
import Button from '../04/Button';
import Text from '../04/Text';

export default function DeleteModalContent({ id, name }) {
  return (
    <Consumer>
      {({ closeModal }) => (
        <div>
          <div>
            <Text>
              {name}을 정말로 삭제 하시겠습니까?
            </Text>
          </div>
          <Button primary>예</Button>
          <Button onPress={closeModal}>닫기</Button>
        </div>
      )}
    </Consumer>
  );
}
