import { combineReducers } from 'redux';
import spells from './spells';
import music from './music';
import load from './load';

export default combineReducers({
  spells,
  music,
  load,
});
