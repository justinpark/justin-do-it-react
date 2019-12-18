import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import { SET_TRANSACTION_LIST } from '../actions/transactionActions';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import searchFilterEffects from '../middlewares/searchFilterEffects';
import routerEffects from '../middlewares/routerEffects';
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

const customMiddleware1 = () => nextRunner => action => {
  if (action.type === SET_TRANSACTION_LIST) {
    return nextRunner({
      ...action,
      payload: [
        {
          id: 0,
          code: 'DOIT',
          name: '두잇코인(DOIT)',
          totalPrice: 1000000000,
          currentPrice: 25000,
          datetime: '현재시간',
        },
      ],
    });
  }
  return nextRunner(action);
};

// export default initStates => createStore(
//   combineReducers(reducers),
//   initStates,
//   applyMiddleware(customMiddleware1),
// );

export default initStates =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      // applyMiddleware(searchFilterEffects),
      applyMiddleware(
        thunk,
        reduxPackMiddleware,
        searchFilterEffects,
        notificationEffects,
        routerEffects,
      ),
      // applyMiddleware(notificationEffects),
      // applyMiddleware(customMiddleware, customMiddleware2),
      // applyMiddleware(customMiddleware3),
    ),
  );
