import { combineReducers } from 'redux';
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
    feed: feedReducer
});

export default rootReducer;