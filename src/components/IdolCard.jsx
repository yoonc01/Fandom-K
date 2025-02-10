import React from 'react';
import checkIcon from '@/assets/images/check.png';

const IdolCard = ({
  children,
  idol,
  isSelectable = true,
  isSelected = false,
  isDisabled = false,
  sizeClass = 'w-[98px] h-[98px] tablet:w-[128px] tablet:h-[128px]',
  onClick,
}) => {
  const defaultImage = 'https://link24.kr/9iFIhh0';

  return (
    <div className="p-1 flex flex-col items-center relative">
      <div
        className={`relative ${sizeClass} p-[2px] flex items-center justify-center rounded-full 
        ${isDisabled ? 'opacity-50 cursor-not-allowed' : isSelectable ? 'cursor-pointer' : 'cursor-default'} transition-all`} // 비활성화된 경우 투명도 50%
        onClick={
          !isDisabled && isSelectable ? () => onClick(idol.id) : undefined
        } //  비활성화된 경우 클릭 방지
      >
        {children}
        <div className="absolute inset-0 rounded-full border-[1.3px] border-coralRed z-10"></div>

        <div className="absolute inset-0 m-1.5 rounded-full overflow-hidden">
          <img
            src={idol.profilePicture || defaultImage}
            alt={idol.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/*   비활성화된 경우 클릭 차단 & 마우스 금지 커서 적용 */}
        {isDisabled && (
          <div
            className="absolute inset-0 w-full h-full cursor-not-allowed"
            style={{ cursor: 'not-allowed', pointerEvents: 'auto' }}
          />
        )}

        {isSelected && isSelectable && (
          <>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-coralRed to-pinkPunch opacity-50 z-20" />
            <img
              src={checkIcon}
              alt="check"
              className="absolute w-[40%] h-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default IdolCard;
