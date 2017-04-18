import Api from './api';

const api = new Api({
  baseURI: '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const api_upload = new Api({
  baseURI: '/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})
export default api;
