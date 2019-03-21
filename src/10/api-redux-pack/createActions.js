import { FETCH_LIST, CREATE, UPDATE, DELETE, FETCH, RESET } from './actionTypes';
import Api from '../../08/Api';

export default (resourceName, key = 'id') => ({
  collection: (params = {}, meta = {}) => ({
    type: FETCH_LIST,
    promise: Api.get(resourceName, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  member: (id, params = {}, meta = {}) => ({
    type: FETCH,
    promise: Api.get(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  create: (data, params = {}, meta = {}) => ({
    type: CREATE,
    promise: Api.post(resourceName, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    }
  }),
  update: (id, data, params = {}, meta = {}) => ({
    type: UPDATE,
    promise: Api.put(`${resourceName}/${id}`, data, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
  }),
  destroy: (id, params = {}, meta = {}) => ({
    type: DELETE,
    promise: Api.delete(`${resourceName}/${id}`, { params }),
    meta: {
      ...meta,
      key,
      resourceName,
    },
    payload: { id },
  }),
  reset: () => ({
    type: RESET,
    meta: { resourceName },
  }),
});
