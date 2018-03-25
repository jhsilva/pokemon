import { FETCH_SPECIE_REQUEST, FETCH_SPECIE_SUCCESS, FETCH_SPECIE_FAILURE } from 'redux/constants/Specie';
import fetch from 'utils/fetch';
import PouchDB from 'pouchdb';

function fetchSpecieRequest() {
  return { type: FETCH_SPECIE_REQUEST };
}

function fetchSpecieSuccess(payload) {
  return { type: FETCH_SPECIE_SUCCESS, payload };
}

function fetchSpecieFailure(payload) {
  return { type: FETCH_SPECIE_FAILURE, payload };
}

function fetchSpecie(params, dispatch) {
  const { endpoint, name } = params;

  const fetchSpeciecoped = () => {
    fetch(endpoint)
      .then((response) => {
        dispatch(fetchSpecieSuccess({ [name]: response.data }));
      })
      .catch((error) => {
        dispatch(fetchSpecieFailure(error));
      });
  };

  dispatch(fetchSpecieRequest());

  new PouchDB('pokemon')
    .get('SPECIE')
    .then((doc) => {
      const { state } = doc;

      if (!Object.prototype.hasOwnProperty.call(state, name)) fetchSpeciecoped();

      dispatch(fetchSpecieSuccess());
    })
    .catch(() => {
      fetchSpeciecoped();
    });
}

export const actionFetchSpecie = params => (dispatch, getState) => fetchSpecie(params, dispatch, getState);
