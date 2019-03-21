export const SET_FILTER = 'searchFilter/SET_FILTER';
export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export function setFilter(params) {
  return {
    type: SET_FILTER,
    payload: { params },
  }
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  }
}
