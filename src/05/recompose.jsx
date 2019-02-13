import React from 'react';

export const withState = (stateName, setFunc, defaultValue) => WrappedComponent => {
  return class WithState extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        [stateName]: defaultValue,
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(func) {
      const runner = func(this.props);
      const value = (typeof runner === 'function')
        ? runner(this.state[stateName])
        : runner;

      this.setState({
        [stateName]: value,
      })
    }

    render() {
      const props = {
        [stateName]: this.state[stateName],
        [setFunc]: this.handleChange,
      };
      return <WrappedComponent {...props} />;
    }
  };
}

const App = () => null;
const AppWithCounterState = withState('counter', 'setCounter', 0)(App);
const AppWithCounterAndLoadingState = withState('loading', 'setLoading', false)(AppWithCounterState);


const withMyState = function(WrappedComponent) {
  return class WithLoadData extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { loading: false, counter: 0 };
      this.setLoading = this.setLoading.bind(this);
      this.setCounter = this.setCounter.bind(this);
    }
    setLoading(loading) {
      this.setState({ loading });
    }
    setCounter(counter) {
      this.setState({ counter });
    }
    render() {
      const {
        loading,
        counter,
      } = this.state;
      return (
        <WrappedComponent
          loading={loading}
          counter={counter}
          setLoading={this.setLoading}
          setCounter={this.setCounter}
        />
      );
    }
  };
}


export const lifecycle = ({ state, ...lifecycleFuncs }) => (WrappedComponent) => {
  class WithLifeCycle extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { ...state };
    }
    // componentWillUnmount(...args) ...
    render() {
      return <WrappedComponent {...this.state} />;
    }
  };
  WithLifeCycle.prototype = {
    ...WithLifeCycle.prototype,
    ...lifecycleFuncs,
  };
  return WithLifeCycle;
}

const withLoadData = function(WrappedComponent) {
  return class WithLoadData extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { loading: true };
    }
    componentDidMount() {
      if (this.props.loadData) {
        this.props.loadData().then(() => this.setState('loading', false));
      }
    }
    render() {
      return <WrappedComponent loading={this.state.loading} />;
    }
  };
}
