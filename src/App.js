import React, { Component } from 'react';
import './materialize.scss';
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
