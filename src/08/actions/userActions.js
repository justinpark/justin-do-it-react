import createActions from '../../10/api-redux-pack/createActions';

export const { create } = createActions('users');

export function createUser(data, onSuccess) {
  return create(
    data,
    {},
    {
      notification: { success: '회원 등록이 성공적으로 완료되었습니다.' },
      onSuccess,
    }
  );
}
