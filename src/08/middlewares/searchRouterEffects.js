import { SET_LOCATION } from '../actions/routerActions';
import { setFilter } from '../actions/searchFilterActions';

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => chunk.split('='))
    .reduce((result, [ key, value ]) => ({
      ...result,
      [key]: value,
    }), {});
}

export default store => nextRunner => action => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === SET_LOCATION) {
    const { pathname, search } = payload.location;
    if (pathname === '/') {
      store.dispatch(setFilter(parse(search)));
    }
  }
  return result;
}
