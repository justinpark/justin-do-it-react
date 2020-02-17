export const SET_LOCATION = 'router/SET_LOCATION';

export function setLocation(location) {
  return {
    type: SET_LOCATION,
    payload: { location },
  }
}
