import { createSelector } from 'reselect';
import { CREATE, UPDATE, FETCH_LIST, FETCH } from './actionTypes';

export default function createSelectors(resourceName) {
  const resourceSelector = state => state[resourceName];
  const entitiesSelector = state => resourceSelector(state).entities;
  const pagesSelector = state => resourceSelector(state).pages;
  const idSelector = state => resourceSelector(state).id;
  const entitySelector = createSelector(
    idSelector,
    entitiesSelector,
    (id, entities) => entities[id],
  );
  const collectionSelector = createSelector(
    entitiesSelector,
    pagesSelector,
    (entities, pages) =>
      [].concat(...Object.values(pages)).map(id => entities[id])
  );
  const loadingStateSelector = state => resourceSelector(state).loadingState;
  const errorStateSelector = state => resourceSelector(state).errorState;

  const collectionLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createLoadingStateSelector = state =>
    loadingStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateLoadingStateSelector = state =>
    loadingStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberLoadingStateSelector = state =>
    loadingStateSelector(state)[`${FETCH}/${resourceName}`];

  const collectionErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH_LIST}/${resourceName}`];
  const createErrorStateSelector = state =>
    errorStateSelector(state)[`${CREATE}/${resourceName}`];
  const updateErrorStateSelector = state =>
    errorStateSelector(state)[`${UPDATE}/${resourceName}`];
  const memberErrorStateSelector = state =>
    errorStateSelector(state)[`${FETCH}/${resourceName}`];

  const paginationSelector = createSelector(
    resourceSelector,
    ({ pagination }) => ({
      number: pagination.number || 0,
      size: pagination.size
    })
  );
  return {
    entitySelector,
    entitiesSelector,
    pagesSelector,
    collectionSelector,
    collectionLoadingStateSelector,
    collectionErrorStateSelector,
    createLoadingStateSelector,
    createErrorStateSelector,
    updateLoadingStateSelector,
    updateErrorStateSelector,
    memberLoadingStateSelector,
    memberErrorStateSelector,
    paginationSelector,
  };
}
