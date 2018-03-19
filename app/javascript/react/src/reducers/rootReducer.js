import { combineReducers } from 'redux';
import { projects } from './projects';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  projects
});

export default rootReducer;
