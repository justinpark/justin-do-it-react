import React from 'react';

const { Provider, Consumer } = React.createContext({});

export default class LoadingProvider extends React.PureComponent {
  static Consumer = Consumer;

  constructor(props) {
    super(props);

    this.state = { loading: false, loading2: false };
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      loading: this.state.loading,
      loading2: this.state.loading2,
      setLoading: this.setLoading,
    };

    return (
      <Provider value={context}>
        {this.props.children}
      </Provider>
    );
  }
}
