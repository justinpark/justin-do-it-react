import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setCollection } from './actions/collectionActions01';
import { setAge } from './actions/collectionActions02';

import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Park', age: 35 },
      ]),
    );
    this.store.dispatch(setAge(2, 55));
    const { collection } = this.store.getState();
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트: <ContainerComponent id={2} />
      </Provider>
    );
  }
}
export default AdvReduxApp;
