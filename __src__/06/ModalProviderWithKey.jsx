import createModalProvider from './createModalProvider';
import DeleteModalContent from './DeleteModalContent';
import CreateMemberModalContent from './CreateMemberModalContent';

export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal';
export const CREATE_MEMBER_MODAL = 'create_member_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [CREATE_MEMBER_MODAL]: CreateMemberModalContent,
};

export default createModalProvider(CONTENT_MAP);
