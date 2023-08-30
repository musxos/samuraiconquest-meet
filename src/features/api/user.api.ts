import axios from '@/app/axios';

const getUser = async (address: any) => {
  const response = await axios.get('/user/' + address);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getUsers = async () => {
  const response = await axios.get(`/users`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getOwnedNFTs = async (address) => {
  const response = await axios.get(`/owner/` + address);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export { getUser, getUsers, getOwnedNFTs };
