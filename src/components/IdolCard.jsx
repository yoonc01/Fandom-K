import React, { useState } from 'react';
import checkIcon from '@/assets/images/check.png';

const IdolCard = ({ idol }) => {
  const [isSelected, setIsSelected] = useState(false);
  const defaultImage = 'https://link24.kr/9iFIhh0';

  console.log('IdolCard 받은 데이터:', idol);

  return (
    <div
      className="relative w-[98px] h-[98px] flex items-center justify-center 
      rounded-full cursor-pointer transition-all"
      onClick={() => setIsSelected(!isSelected)}
    >
      <div
        className={`absolute inset-0 rounded-full border-[2px] border-coralRed
           transition-all ${isSelected ? 'coralRed' : 'pinkPunch'}`}
      ></div>

      <img
        src={idol?.profilePicture || defaultImage}
        alt={idol?.name || 'Default Profile'}
        className="w-[88px] h-[88px] rounded-full object-cover"
      />

      {isSelected && (
        <>
          <div
            className="absolute w-[88px] h-[88px] rounded-full bg-gradient-to-r from-coralRed to-pinkPunch
           opacity-50"
          ></div>

          <img
            src={checkIcon}
            alt="check"
            className="absolute w-[45.45%] h-[45.45%] top-[27.5%] left-[27.5%]"
          />
        </>
      )}
    </div>
  );
};

export default IdolCard;
