import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Redux';

ReactDOM.render(<Provider store={store}>
  <Root />
</Provider>, document.getElementById('root'));
registerServiceWorker();
