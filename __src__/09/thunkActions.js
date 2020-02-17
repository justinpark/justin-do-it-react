function pureAction(somePayload) {
  return {
    type: 'SOME_ACTION_TYPE',
    payload: somePayload,
  };
}

function thunkAction(somePayload) {
  return function(dispatch, getState) {
    dispatch({
      type: 'SOME_ACTION_TYPE',
      payload: somePayload,
    });
    dispatch({
      type: 'SOME_EXTRA_ACTION_TYPE',
      payload: {
        ...getState().resource,
        somePayload,
      }
    });
  }
}
