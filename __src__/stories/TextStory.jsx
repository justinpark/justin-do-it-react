import React from 'react';
import { storiesOf } from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
  .addWithJSX('기본 설정', () => <Text>안녕하세요</Text>)
  .addWithJSX('large 예제', () => <Text large>안녕하세요</Text>)
  .addWithJSX('xlarge 예제', () => <Text xlarge>안녕하세요</Text>)
  .addWithJSX('small 예제', () => <Text small>안녕하세요</Text>)
  .addWithJSX('xsmall 예제', () => <Text xsmall>안녕하세요</Text>)
  .addWithJSX('primary 예제', () => <Text primary>안녕하세요</Text>)
  .addWithJSX('secondary 예제', () => <Text secondary>안녕하세요</Text>)
  .addWithJSX('primary와 large 함께 쓰는 예제', () => <Text primary large>안녕하세요</Text>);
