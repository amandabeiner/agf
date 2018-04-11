import { combineReducers } from 'redux';
import { projects } from './projects';
import { cv } from './cv';
import { articles } from './articles'
import { bio } from './bio'
import { researchDescription } from './researchDescription'
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  projects,
  articles,
  cv,
  bio,
  researchDescription
});

export default rootReducer;
