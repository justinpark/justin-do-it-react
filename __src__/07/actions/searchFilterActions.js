export const SET_FILTER = 'searchFilter/SET_FILTER';

export const setFilter = (filterName, value) => ({
  type: SET_FILTER,
  payload: {
    filterName,
    value,
  },
});

export const RESET_FILTER = 'searchFilter/RESET_FILTER';

export const resetFilter = () => ({
  type: RESET_FILTER,
});

export const setNameFilter = name => setFilter('name', name);
export const setAgeFilter = age => setFilter('age', age);
export const setIdFilter = id => setFilter('id', id);
