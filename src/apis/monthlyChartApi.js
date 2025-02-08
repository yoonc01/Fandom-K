import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app/13-3',
});

export async function getLists(gender, cursor = 0, pageSize) {
  const query =
    cursor !== 0
      ? `gender=${gender}&cursor=${cursor}&pageSize=${pageSize}`
      : `gender=${gender}&pageSize=${pageSize}`;
  try {
    const res = await instance.get(`/charts/${gender}/?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postVotes(idolId) {
  try {
    const loadData = { idolId };
    const res = await instance.post('/votes', loadData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
