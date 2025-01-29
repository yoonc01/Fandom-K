import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app/13-3',
});

export async function getItems({ cursor = 0 }) {
  const query = `cursor=${cursor}&pageSize=4`;
  const res = await instance.get(`/donations?${query}`);

  return res.data;
}
