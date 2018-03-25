import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE } from 'redux/constants/Details';
import { persistentReducer } from 'redux-pouchdb';

const initialState = {};

const Details = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case FETCH_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: false,
      });
    case FETCH_DETAILS_FAILURE:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: true,
      });
    default:
      return state;
  }
};

export default persistentReducer(Details);
