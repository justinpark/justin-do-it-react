import createSelectors from '../../11/api-redux-pack/createSelectors';

export const { createLoadingStateSelector: userCreateLoadingStateSelector } = createSelectors(
  'users',
);
