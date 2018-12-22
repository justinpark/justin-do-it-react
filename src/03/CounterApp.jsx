// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import Counter from './03/Counter2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    // this 오류를 확인한 후에 아래 주석을 삭제해 주세요.
    // this.increateCount = this.increateCount.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1}));
  }
  render() {
    return (
      <Counter count={this.state.count} onAdd={this.increateCount} />
    );
  }
}

export default App;
