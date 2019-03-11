import {
  SET_TRANSACTION_LIST,
  LOADING_TRANSACTION_LIST,
  SET_ERROR,
} from '../actions/transactionActions';

const initState = {
  ids: [],
  entities: {},
  loading: false,
  hasError: false,
};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR: {
      const { errorMessage } = payload;
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage,
      }
    }
    case LOADING_TRANSACTION_LIST: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case SET_TRANSACTION_LIST: {
      const ids = payload.map(entity => entity['id']);
      const entities = payload.reduce(
        (finalEntities, entity) => ({
          ...finalEntities,
          [entity['id']]: entity
        }),
        {}
      );
      return {
        ...state,
        ids,
        entities,
        loading: false,
        hasError: false,
      };
    }
    default:
      return state;
  }
};
