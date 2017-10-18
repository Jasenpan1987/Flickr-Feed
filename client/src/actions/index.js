// import { HELLO_WORLD, FETCH_JSON, FETCH_JSON_SUCCESS, FETCH_JSON_ERROR } from "./actionTypes";
import {
  FETCH_FEED, FETCH_FEED_SUCCESS, FETCH_FEED_FAILED
} from './actionTypes';
import { fetchFeedRequest } from '../api';

export const fetchFeed = (tags) => {
  return async dispatch => {
    dispatch({ type: FETCH_FEED });
    try {
      console.log('hereerere')
      const response = await fetchFeedRequest(tags);
      console.log('response::: ', response);
      dispatch({ type: FETCH_FEED_SUCCESS, payload: { data: response.data }});
    } catch(error) {
      dispatch({ type: FETCH_FEED_FAILED, payload: { error } });
    }
  }
}
