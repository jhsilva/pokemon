import { combineReducers } from 'redux';

import list from './List';
import details from './Details';

export default combineReducers({
  list,
  details,
});
