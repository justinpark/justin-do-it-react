import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import App from './08/CoinApp';
import './doit-ui/app.css';
// import CoinApp from './03/TodoList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<CoinApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
