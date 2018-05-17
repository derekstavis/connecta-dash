import {
  combineEpics,
  createEpicMiddleware,
} from 'redux-observable';
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { loginEpic, loginReducer } from './login';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootEpic = combineEpics(
  loginEpic,
);

const rootReducer = combineReducers({
  login: loginReducer,
});

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = applyMiddleware(
  epicMiddleware,
)
const store = createStore(
  rootReducer,
  composeEnhancers(middlewares)
);

export default store;