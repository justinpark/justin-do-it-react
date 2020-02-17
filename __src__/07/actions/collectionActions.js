export const SET_COLLECTION = 'collection/SET_COLLECTION';
export const SET_AGE = 'collection/SET_AGE';

export const setCollection = collection => ({
  type: SET_COLLECTION,
  payload: collection,
});

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});
