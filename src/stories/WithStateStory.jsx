import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState, CounterWithCountHandler } from '../05/withState';

storiesOf('WithState', module)
  .addWithJSX('CounterWithCountState', () => <CounterWithCountState />)
  .addWithJSX('CounterWithCountHandler', () => <CounterWithCountHandler />);
