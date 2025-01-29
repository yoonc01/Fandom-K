// MockIdolImages.js (임시 목데이터 파일)

export const mockIdols = [
  {
    id: 1,
    name: '진',
    group: '방탄소년단',
    gender: 'male',
    profilePicture: 'https://link24.kr/9iFIhh0',
  },
  {
    id: 2,
    name: '정국',
    group: '방탄소년단',
    gender: 'male',
    profilePicture: 'https://link24.kr/6igQ3l9',
  },
  {
    id: 3,
    name: '장원영',
    group: '아이브',
    gender: 'female',
    profilePicture: 'https://link24.kr/3u2IQC9',
  },
  {
    id: 4,
    name: '안유진',
    group: '아이브',
    gender: 'female',
    profilePicture: 'https://link24.kr/Ezi2ACz',
  },
];
export const getIdolById = (id) => {
  return mockIdols.find((idol) => idol.id === id) || null;
};

export const setIdolById = (id, updatedData) => {
  const index = mockIdols.findIndex((idol) => idol.id === id);
  // 조건을 만족하는 id가 존재하는 경우 : 업데이트
  if (index !== -1) {
    mockIdols[index] = { ...mockIdols[index], ...updatedData };
  }
};
