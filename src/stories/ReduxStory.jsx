import React from 'react';
import { storiesOf } from '@storybook/react';

import ReduxApp from '../07/ReduxApp';
import AdvReduxApp from '../07/AdvReduxApp';

storiesOf('ReduxApp', module)
  .addWithJSX('기본 설정', () => <ReduxApp />)
  .addWithJSX('다중 리듀서 설정', () => <AdvReduxApp />);
