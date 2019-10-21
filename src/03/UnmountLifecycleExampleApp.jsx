import React from 'react';
import LifecycleExample from './03/LifecycleExample';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasDestroyed: false };
  }
  componentDidMount() {
    this.setState({ hasDestroyed: true});
  }
  render() {
    return (
      <div>
        <div>
          {this.state.hasDestroyed? null : <LifecycleExample />}
        </div>
      </div>
    );
  }
}

export default App;
