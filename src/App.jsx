import React, { Component } from 'react';
// 아래 머터리얼 스타일 설정을 삭제합니다.
// import './materialize.scss';
import './App.css';

import InputWithStyle from './04/InputWithStyle';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <div>두잇! 리액트 시작하기</div>
          </div>
        </nav>
        <h1>머터리얼 CSS</h1>
        <InputWithStyle name="name" label="이름" />
      </div>
    );
  }
}

export default App;
