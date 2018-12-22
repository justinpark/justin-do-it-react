import React from 'react';

class TodoList extends React.PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    const todos = todoList.map((todo, i) => <div key={`tl_${i}`}>{todo.taskName}</div>);
    return (
      <div>
        {todos}
      </div>
    );
  }
}

export default TodoList;
