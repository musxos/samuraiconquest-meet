import axios from '@/app/axios';

const getLands = async () => {
  const response = await axios.get('/lands');

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getLand = async (id: any) => {
  const response = await axios.get(`/land/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getClans = async () => {
  const response = await axios.get('/clans');

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export { getLands, getLand, getClans };
