// src폴더안에 App.js을 연 다음 기존 내용을 모두 지우고 아래의 내용으로 작성해 보세요
import React from 'react';
import ChildComponent from './03/ChildComponent';

class App extends React.Component {
  render() {
    // 변수 선언
    const array = [1,2,3];
    const obj = { name: '제목', age: 30};
    const node = <h1>노드</h1>;
    const func = () => { console.log('메세지'); };
    return (
      <ChildComponent
        boolValue={true}
        numValue={1}
        arrayValue={array}
        objValue={obj}
        nodeValue={node}
        funcValue={func}
      />
    );
  }
}

export default App;
