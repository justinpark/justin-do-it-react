export const SET_COLLECTION = 'collectoin/SET_COLLECTION';
export const SET_AGE = 'collection/SET_AGE';

export const setCollection = collection => ({
  type: SET_COLLECTION,
  payload: collection,
});

// setCollection([{id: 1, name: 'John', age: 20}, { id: 2, ... }, ... ]);

export const setAge = (id, age) => ({
  type: SET_AGE,
  payload: { id, age },
});
