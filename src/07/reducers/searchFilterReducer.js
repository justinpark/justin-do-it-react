import { SET_FILTER, RESET_FILTER } from '../actions/searchFilterActions';

const initState = {};

export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_FILTER: {
      const { filterName, value } = payload;
      return {
        ...state,
        [filterName]: value,
      };
    }
    case RESET_FILTER: {
      return initState;
    }
    default:
      return state;
  }
}
