import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://budget-3fd68.firebaseio.com/',
  headers: {'X-Firebase-Decoding': '1'}
});

export default instance;