
import { createStore, applyMiddleware } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import ApplicationStore from './reducer';

export default createStore(ApplicationStore, applyMiddleware(ThunkMiddleware));


