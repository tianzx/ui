import Api from './api';

//    'Accept': 'application/json',
const api = new Api({
  baseURI: '/api',
  headers: {
    // 'Accept': 'application/x-msgpack',
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
