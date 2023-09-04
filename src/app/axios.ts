import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.samuraiconquest.com',
});

export default instance;
