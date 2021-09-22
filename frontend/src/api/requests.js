import { api } from './api';

const getStuff = async () => {
  const res = await api.get('/');
  return res.data;
};

export default getStuff;
