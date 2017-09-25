import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

//import the root reducer
import rootReducer from './reducers/index';

import posts from './data/posts';
