import { combineReducers } from 'redux';

import list from './List';
import details from './Details';
import specie from './Specie';

export default combineReducers({
  list,
  details,
  specie,
});
