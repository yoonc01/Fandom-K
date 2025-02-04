import React, { useState } from 'react';
import checkIcon from '@/assets/images/check.png';

const IdolCard = ({ idol }) => {
  const [isSelected, setIsSelected] = useState(false);
  const defaultImage = 'https://link24.kr/9iFIhh0';

  console.log('IdolCard 받은 데이터:', idol);

  return (
    <div className="  p-6 flex justify-center">
      <div
        className="relative w-[98px] h-[98px] flex items-center justify-center rounded-full cursor-pointer transition-all"
        onClick={() => setIsSelected(!isSelected)}
      >
        <div className="absolute inset-0 rounded-full border-[3px] border-red-400 transition-all"></div>

        <div className="absolute left-[5px] top-[5px] w-[88px] h-[88px] rounded-full overflow-hidden bg-white">
          <img
            src={idol?.profilePicture || defaultImage} // API에서 받은 이미지 적용
            alt={idol?.name || 'Default Profile'}
            className="absolute inset-0 w-full h-full object-cover transition-all"
          />
        </div>

        {isSelected && (
          <div className="absolute left-[5px] top-[5px] w-[88px] h-[88px] rounded-full bg-gradient-to-r from-red-400 to-pink-500 opacity-50 transition-all"></div>
        )}

        {isSelected && (
          <img
            src={checkIcon}
            alt="check"
            className="absolute w-[45.45%] h-[45.45%] top-[27.5%] left-[27.5%] transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default IdolCard;
