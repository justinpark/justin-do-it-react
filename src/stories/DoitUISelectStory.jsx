import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select, { Option } from '../doit-ui/Select';

storiesOf('Doit-UI/Select', module)
  .addWithJSX('기본 설정', () => (
    <Select name="name">
      <Option label="한국" value="KR" />
    </Select>
  ))
  .addWithJSX('label 예제', () => (
    <Select name="name" label="이름">
      <Option label="한국" value="KR" />
    </Select>
  ))
  .addWithJSX('onChange 예제', () => (
    <Select name="name" onChange={action('onChange 이벤트 발생')}>
      <Option label="한국" value="KR" />
    </Select>
  ))
  .addWithJSX('value 예제', () => (
    <Select name="name" label="이름" value="두잇">
      <Option label="한국" value="KR" />
    </Select>
  ))
  .addWithJSX('errorMessage 예제', () => (
    <Select name="name" label="이름" errorMessage="이름을 입력해주세요">
      <Option label="한국" value="KR" />
    </Select>
  ))
  .addWithJSX('autoFocus 예제', () => (
    <Select name="name" label="이름" autoFocus>
      <Option label="한국" value="KR" />
    </Select>
  ));
