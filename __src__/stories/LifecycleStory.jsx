import React from 'react';
import { storiesOf } from '@storybook/react';

import { PageWithLoadData, PageWithLoadDataAndLoading } from '../05/lifecycle';

storiesOf('Lifecycle', module)
  .addWithJSX('loadData 예제', () => (
    <PageWithLoadData loadData={() => fetch('/').then(() => 'hello')} />
  ))
  .addWithJSX('로딩 메시지 예제', () => (
    <PageWithLoadDataAndLoading loadData={() => fetch('/').then(() => 'hello')} />
  ));
