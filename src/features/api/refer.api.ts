import axios from '@/app/axios';

const getTopRefers = async () => {
  const response = await axios.get('/refer');

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getRefer = async (address: any) => {
  const response = await axios.get(`/refer/${address}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export { getTopRefers, getRefer };
