import { FETCH_LIST_REQUEST, FETCH_LIST_SUCCESS, FETCH_LIST_FAILURE } from 'redux/constants/List';
import fetch from 'utils/fetch';
import PouchDB from 'pouchdb';

function fetchListRequest() {
  return { type: FETCH_LIST_REQUEST };
}

function fetchListSuccess(payload) {
  return { type: FETCH_LIST_SUCCESS, payload };
}

function fetchListFailure(payload) {
  return { type: FETCH_LIST_FAILURE, payload };
}

function fetchList(params, dispatch, getState) {
  const { list } = getState();
  const { endpoint } = params;

  const fetchListScoped = () => {
    fetch(endpoint)
      .then((response) => {
        const data = (list.results.length > 0)
          ? { ...response.data, results: [...list.results, ...response.data.results] }
          : response.data;

        dispatch(fetchListSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchListFailure(error));
      });
  };

  dispatch(fetchListRequest());

  new PouchDB('pokemon')
    .get('List')
    .then((doc) => {
      const { results, previous } = doc.state;
      const isFirstFetch = (results.length === 0 && endpoint === undefined);
      const isAnotherFetch = (endpoint !== undefined && endpoint !== previous);

      if (isFirstFetch || isAnotherFetch) fetchListScoped();

      dispatch(fetchListSuccess());
    })
    .catch(() => {
      fetchListScoped();
    });
}

export const actionFetchList = params => (dispatch, getState) => fetchList(params, dispatch, getState);
