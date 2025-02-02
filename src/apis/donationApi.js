import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app/13-3',
});

export async function getItems({ cursor = 0 }) {
  const query = `cursor=${cursor}&pageSize=4`;
  try {
    const res = await instance.get(`/donations?${query}`);
    return { data: res.data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error.response || 'Failed to get data',
    };
  }
}

export async function putCredits({ id, credit }) {
  try {
    const res = await instance.put(`/donations/${id}/contribute`, {
      amount: credit,
    });
    return res;
  } catch (error) {
    return error.response || 'Failed to put data';
  }
}
