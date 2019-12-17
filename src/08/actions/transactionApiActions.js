import createActions from '../../11/api-redux-pack/createActions';

const { collection, create } = createActions('transactions');
const PAGE_SIZE = 10;

export function requestTransactionList(params, _page = 1) {
  const meta = {
    pageNumber: _page,
    pageSize: PAGE_SIZE,
    notification: {
      success: '거래 목록을 최신 정보로 업데이트하였습니다.',
      error: '거래 목록을 갱신하는 중에 문제가 발생하였습니다.',
    },
  };
  return collection(
    {
      ...params,
      _page,
      _limit: PAGE_SIZE,
    },
    meta,
  );
}

export function createTransaction(data, closeModal) {
  return create(data, {}, { onSuccess: closeModal });
}
