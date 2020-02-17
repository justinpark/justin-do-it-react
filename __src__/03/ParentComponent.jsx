// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={[1,2,3]}
        objValue={{ name: '제목', age: 30}}
        nodeValue={<h1>노드</h1>}
        funcValue={() => { console.log('메세지'); }}
      />
    );
  }
}

export default App;
