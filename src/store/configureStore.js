import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import notificationEffects from '../middlewares/notificationEffects';
const customMiddleware = store => nextRunner => action => {
  console.log('미들웨어에 전달된 액션 객체', action);
  console.log('리듀서 실행이전', store.getState());
  const result = nextRunner(action);
  console.log('리듀서 실행이후', store.getState());
  return result;
};

const customMiddleware2 = store => nextRunner => action => {
  console.log('미들웨어2 전달된 액션 객체', action);
  console.log('미들웨어2 실행이전', store.getState());
  const result = nextRunner(action);
  console.log('미들웨어2 실행이후', store.getState());
  return result;
};
const customMiddleware3 = store => nextRunner => action => {
  console.log('미들웨어3 전달된 액션 객체', action);
  console.log('미들웨어3 실행이전', store.getState());
  const result = nextRunner(action);
  console.log('미들웨어3 실행이후', store.getState());
  return result;
};

export default initStates =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, searchFilterEffects, notificationEffects),
    ),
  );
