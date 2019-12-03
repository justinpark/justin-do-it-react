import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import BooleanComponent from '../03/BooleanComponent';
class TodoList extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    return (
      <div>
        {todoList.map((todo, i) => (
          <div key={`tl_${i}`}>{todo.taskName}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;

storiesOf('BooleanComponent', module)
  .add('기본 설정', () => <BooleanComponent />)
  .add('bored 설정', () => <BooleanComponent bored />)
  .add('App test', () => <TodoList />);
