import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app/13-3',
});

const PAGE_SIZE = 4;

export async function getItems({ cursor = 0 }) {
  const query = `cursor=${cursor}&pageSize=${PAGE_SIZE}`;
  try {
    const res = await instance.get(`/donations?${query}`);
    return { data: res.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function putCredits({ id, credit }) {
  try {
    const res = await instance.put(`/donations/${id}/contribute`, {
      amount: credit,
    });
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
