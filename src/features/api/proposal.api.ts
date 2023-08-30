import axios from '@/app/axios';

const getProposals = async () => {
  const response = await axios.get('/proposals');

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

const getProposal = async (id: any) => {
  const response = await axios.get(`/proposal/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export { getProposals, getProposal };
