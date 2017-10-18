import axios from 'axios';
const URL = 'http://localhost:5000/api/publicfeed';

export const fetchFeedRequest = tags => {
  if (tags) {
    return axios.post(`${URL}/tags`, { tags });
  }
  return axios.get(URL);
}
