import { combineReducers } from 'redux';
import { projects } from './projects';
import { cv } from './cv';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  projects,
  cv
});

export default rootReducer;
