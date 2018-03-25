import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from 'redux/constants/List';
import { persistentReducer } from 'redux-pouchdb';

const initialState = {
  results: [],
};

const List = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case FETCH_LIST_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: false,
      });
    case FETCH_LIST_FAILURE:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: true,
      });
    default:
      return state;
  }
};

export default persistentReducer(List);
