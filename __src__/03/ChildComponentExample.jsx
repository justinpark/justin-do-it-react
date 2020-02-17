import React from 'react';
import ChildComponent2 from './ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ChildComponent2
            objValue={{ age: 20 }}
            requiredStringValue="문자"
          />
        </div>
      </div>
    );
  }
}

export default App;
