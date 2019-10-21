// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import BooleanComponent from './03/BooleanComponent';

class App extends React.Component {
  render() {
    return (
      <div>
        <div><b>지루할 때:</b><BooleanComponent bored /></div>
        <div><b>즐거울 때:</b><BooleanComponent /></div>
      </div>
    );
  }
}

export default App;
