import axios from 'axios';

export default axios.create({
  baseURL: 'http://5dced77975f9360014c26528.mockapi.io/api/v1/',
  responseType: 'json'
});
