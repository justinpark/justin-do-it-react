// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import PropComponent from './03/PropComponent';

class App extends React.Component {
  render() {
    return (
      <PropComponent
        name="두잇 리액트"
      />
    );
  }
}

export default App;
