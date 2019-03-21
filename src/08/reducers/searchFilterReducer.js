import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {
  params: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTER: {
      const { params } = payload;
      return { ...state, params };
    }
    case RESET_FILTER: {
      return { ...initState };
    }
    default:
      return state;
  }
};
