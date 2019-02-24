import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';
import { setCollection, setAge } from './actions/collectionActions';
import ContainerComponent from './containers/ContainerComponent';
import PresentationComponent from './PresentationComponent';
import DispatchContainer from './containers/DispatchContainer';
import SearchFilterInputContainer from './containers/SearchFilterInputContainer';
import SearchResetButtonContainer from './containers/SearchResetButtonContainer';
import SearchResultTable from './SearchResultTable';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  // componentDidMount() {
  //   this.store.dispatch(setLoading(true));
  //   this.store.dispatch(resetLoading());
  //   this.store.dispatch(setUser({ name: 'Park', age: 20 }));
  //   this.store.dispatch(setCollection([
  //     { id: 21, name: 'John', age: 20},
  //     { id: 232, name: 'Justin', age: 40 },
  //     { id: 3, name: 'Mary', age: 21 },
  //   ]));
  //   this.store.dispatch(setAge(232, 55));
  //   const { collection } = this.store.getState();
  //   const { ids, entities } = collection;
  //   const originalPayload = ids.map(id => entities[id]);
  //   console.log(originalPayload);
  // }

  render() {
    return (
      <Provider store={this.store}>
        리덕스 예제
        <fieldset>
          <SearchFilterInputContainer type="number" name="id" label="아이디 검색" />
          <SearchFilterInputContainer name="name" label="이름 검색" />
          <SearchFilterInputContainer type="number" name="age" label="나이 검색" />
          <SearchResetButtonContainer>
            리셋
          </SearchResetButtonContainer>
        </fieldset>
        <SearchResultTable />
        화면 컴포넌트: <PresentationComponent userName="사용자 이름" />
        <br/>
        데이터용 컴포넌트: <ContainerComponent id={232} />
        <br/>
        <DispatchContainer />
      </Provider>
    );
  }
}
export default AdvReduxApp;
