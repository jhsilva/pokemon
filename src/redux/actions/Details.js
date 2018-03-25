import { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE } from 'redux/constants/Details';
import fetch from 'utils/fetch';
import PouchDB from 'pouchdb';

function fetchDetailsSRequest() {
  return { type: FETCH_DETAILS_REQUEST };
}

function fetchDetailsSuccess(payload) {
  return { type: FETCH_DETAILS_SUCCESS, payload };
}

function fetchDetailsSFailure(payload) {
  return { type: FETCH_DETAILS_FAILURE, payload };
}

function fetchDetailsS(params, dispatch) {
  const { endpoint, name } = params;

  const fetchDetailsScoped = () => {
    fetch(endpoint)
      .then((response) => {
        dispatch(fetchDetailsSuccess({ [name]: response.data }));
      })
      .catch((error) => {
        dispatch(fetchDetailsSFailure(error));
      });
  };

  dispatch(fetchDetailsSRequest());

  new PouchDB('pokemon')
    .get('Details')
    .then((doc) => {
      const { state } = doc;

      if (!Object.prototype.hasOwnProperty.call(state, name)) fetchDetailsScoped();

      dispatch(fetchDetailsSuccess());
    })
    .catch(() => {
      fetchDetailsScoped();
    });
}

export const actionFetchDetails = params => (dispatch, getState) => fetchDetailsS(params, dispatch, getState);
