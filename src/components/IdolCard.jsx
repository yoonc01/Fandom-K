import React, { useState } from 'react';
import checkIcon from '@/assets/images/check.png';

const IdolCard = ({ apiImageUrl = '' }) => {
  const defaultImage = 'https://link24.kr/9iFIhh0';
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="bg-midnightBlack p-6 flex justify-center">
      <div
        className="relative w-[98px] h-[98px] flex items-center justify-center rounded-full cursor-pointer transition-all"
        onClick={() => setIsSelected(!isSelected)}
      >
        <div className="absolute inset-0 rounded-full border-[3px] border-[#F96E68] transition-all"></div>

        <div className="absolute left-[5px] top-[5px] w-[88px] h-[88px] rounded-full overflow-hidden bg-white">
          <img
            src={apiImageUrl ? apiImageUrl : defaultImage}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover transition-all"
          />
        </div>

        {isSelected && (
          <div className="absolute left-[5px] top-[5px] w-[88px] h-[88px] rounded-full bg-gradient-to-r from-[#F96E68] to-[#FE578F] opacity-50 transition-all"></div>
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
