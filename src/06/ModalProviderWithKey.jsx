import createModalProvider from './createModalProvider';
import DeleteModalContent from './DeleteModalContent';
import SomeNewModalContent from './NewModalContent';

export const CONFIRM_DELETE_MODAL = 'confirm_delete_modal';
export const SOME_NEW_MODAL = 'new_modal';

const CONTENT_MAP = {
  [CONFIRM_DELETE_MODAL]: DeleteModalContent,
  [SOME_NEW_MODAL]: SomeNewModalContent,
};

export default createModalProvider(CONTENT_MAP);
