import { combineReducers } from 'redux';
import { projects } from './projects';
import { cv } from './cv';
import { articles } from './articles'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  projects,
  articles,
  cv
});

export default rootReducer;
