import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from '../doit-ui/Input';

storiesOf('Doit-UI/Input', module)
  .addWithJSX('기본 설정', () => <Input name="name" />)
  .addWithJSX('label 예제', () => <Input name="name" label="이름" />)
  .addWithJSX('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />)
  .addWithJSX('value 예제', () => <Input name="name" label="이름" value="두잇"/>)
  .addWithJSX('errorMessage 예제', () => <Input name="name" label="이름" errorMessage="이름을 입력해주세요" />)
  .addWithJSX('autoFocus 예제', () => <Input name="name" label="이름" autoFocus />);
