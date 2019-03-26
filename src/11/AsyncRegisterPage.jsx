import React from 'react';
import AsyncComponent from './AsyncComponent';

export default () => (
  <AsyncComponent loader={() => import('../08/containers/signup/RegisterPageContainer')} />
);
