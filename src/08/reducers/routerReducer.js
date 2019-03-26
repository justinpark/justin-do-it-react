import { SET_LOCATION } from '../actions/routerActions';

const initState = {
  location: {},
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOCATION: {
      const { location } = payload;
      return { ...state, location };
    }
    default:
      return state;
  }
};
