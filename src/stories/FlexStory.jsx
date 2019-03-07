import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Doit-UI/Flex', module)
  .addWithJSX('Flex Box Layout 예제', () => (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px red solid', padding: 30, height: 30 }}>
        Box 1
      </div>
      <div style={{ border: '1px red solid', padding: 30, height: 20 }}>
        Box 2
      </div>
      <div style={{ border: '1px red solid', padding: 30, height: 25 }}>
        Box 3
      </div>
    </div>
  ))
  .addWithJSX('flexDirection 예제', () => (
    <div>
      flexDirection: 'row'
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
      flexDirection: 'column'
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
    </div>
  ))
  .addWithJSX('flex 예제', () => (
    <div>
      flex의 비율이 1:1:1 로 동일하게 정의된 예제
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
      flex의 비율이 1:2:3 으로 분할된 예제
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ flex: 2, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ flex: 3, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
      flex의 비율이 1:100px:1로 분할된 예제
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ width: 100, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ flex: 1, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
    </div>
  ))
  .addWithJSX('justifyContent 예제', () => (
    <div>
      flex-start
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
        center
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
        space-between
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
        space-evenly
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
    </div>
  ))
  .addWithJSX('alignItems 예제', () => (
    <div>
      flex-start
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <div style={{ height: 80, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ height: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ height: 100, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
      flex-end
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ height: 80, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ height: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ height: 100, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
      center
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ height: 80, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ height: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ height: 100, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
        </div>
    </div>
  ))
  .addWithJSX('flexWrap 예제', () => (
    <div>
      nowrap
        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <div style={{ width: 180, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 4
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 5
          </div>
        </div>
      wrap
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ width: 180, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 4
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 5
          </div>
        </div>
      wrap-reverse
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
          <div style={{ width: 180, border: '1px red solid', padding: 30 }}>
            Box 1
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 2
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 3
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 4
          </div>
          <div style={{ width: 50, border: '1px red solid', padding: 30 }}>
            Box 5
          </div>
        </div>
    </div>
  ));

