import axios from 'axios';

export const fetchIdols = async (pageSize = 30) => {
  try {
    const response = await axios.get(
      `https://fandom-k-api.vercel.app/13-3/idols?pageSize=${pageSize}`
    );
    return response.data.list;
  } catch (error) {
    console.error('아이돌 데이터를 불러오는 중 오류 발생:', error);
    return [];
  }
};
