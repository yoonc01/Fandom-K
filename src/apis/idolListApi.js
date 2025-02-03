import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fandom-k-api.vercel.app/13-3',
});

export async function getLists(gender, pageSize) {
  const query = `gender=${gender}&pageSize=${pageSize}`;

  try {
    const res = await instance.get(`/charts/${gender}/?${query}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
