import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.samuraiconquest.com',
});

export default instance;
