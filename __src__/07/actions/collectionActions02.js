export const SET_AGE = 'collection/SET_AGE';

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});
