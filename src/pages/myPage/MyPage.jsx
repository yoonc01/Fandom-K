import React from 'react';
import IdolCard from '@/components/IdolCard';
import { mockIdols } from './mockIdolImages';

const MyPage = () => {
  return (
    <div className="h-screen w-full bg-midnightBlack flex items-center justify-center">
      <div className=" flex w-full max-w-[1200px] px-4 justify-center  gap-6">
        {mockIdols.map((idol) => (
          <IdolCard key={idol.id} apiImageUrl={idol.profilePicture} />
        ))}
      </div>
    </div>
  );
};

export default MyPage;
