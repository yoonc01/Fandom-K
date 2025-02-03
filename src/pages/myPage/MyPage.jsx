import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IdolCard from '@/components/IdolCard';

const MyPage = () => {
  const [idols, setIdols] = useState([]);

  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const response = await axios.get(
          'https://fandom-k-api.vercel.app/13-3/idols?pageSize=30'
        );
        setIdols(response.data.list); // API 응답 데이터 리스트를 저장
      } catch (error) {
        console.error('아이돌 데이터를 불러오는 중 오류 발생:', error); //아이돌 데이터 로딩 중 에러 확인
      }
    };

    fetchIdols();
  }, []);

  return (
    <div className="h-screen w-full bg-midnightBlack flex items-center justify-center">
      <div className="flex w-full max-w-[1200px] px-4 justify-center gap-6">
        {idols.length > 0 ? (
          idols.map((idol) => <IdolCard key={idol.id} idol={idol} />)
        ) : (
          <p className="text-white">아이돌 데이터를 불러오는 중...</p>
        )}
      </div>
    </div>
  );
};

export default MyPage;
