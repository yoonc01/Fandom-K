import React from 'react';
import ProfileCard from '../../components/ProfileCard';

const MyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <ProfileCard
        name="원빈"
        subtitle="라이즈"
        fallbackImage="/src/assets/images/myPageIdolImage.png"
      />
    </div>
  );
};

export default MyPage;
