import React from 'react';
import ChildComponent2 from './03/ChildComponent2';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ChildComponent2
            objValue={{ age: '20살' }}
          />
        </div>
      </div>
    );
  }
}

export default App;
