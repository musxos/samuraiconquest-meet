import axios from '@/app/axios';

const getBoxs = async () => {
  const response = await axios.get('/boxs');

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getUserBox = async (addres: any) => {
  const response = await axios.get(`/userbox/${addres}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export { getBoxs, getUserBox };
