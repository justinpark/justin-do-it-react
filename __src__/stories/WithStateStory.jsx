import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState, CounterWithCountHandler } from '../05/withState';
import Counter from '../03/Counter';

storiesOf('WithState', module)
  .addWithJSX('CounterWithCountState', () => <CounterWithCountState />)
  .addWithJSX('CounterWithCountHandler', () => <CounterWithCountHandler />)
  .addWithJSX('CounterWithoutHoC', () => <Counter />);
