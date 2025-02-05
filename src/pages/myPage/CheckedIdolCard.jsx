import React, { useState, useEffect } from 'react';
import checkIcon from '@/assets/images/check.png';

const CheckedIdolCard = ({
  idol,
  isSelectable = true,
  isSelected = false,
  sizeClass = 'w-[98px] h-[98px] tablet:w-[128px] tablet:h-[128px]',
}) => {
  const defaultImage = 'https://link24.kr/9iFIhh0';
  const storageKey = 'favoriteIdols';
  const [localIsSelected, setLocalIsSelected] = useState(isSelected);

  useEffect(() => {
    if (isSelectable) {
      const savedFavorites = localStorage.getItem(storageKey) || '';
      setLocalIsSelected(savedFavorites.split(',').includes(String(idol.id)));
    }
  }, [idol.id, isSelectable]);

  const toggleFavorite = () => {
    if (!isSelectable) return;

    let savedFavorites = localStorage.getItem(storageKey) || '';
    let favoriteArray = savedFavorites ? savedFavorites.split(',') : [];

    if (favoriteArray.includes(String(idol.id))) {
      favoriteArray = favoriteArray.filter((id) => id !== String(idol.id));
    } else {
      favoriteArray.push(String(idol.id));
    }

    localStorage.setItem(storageKey, favoriteArray.join(','));
    setLocalIsSelected(!localIsSelected);
  };

  return (
    <div className="p-1 flex flex-col items-center">
      <div
        className={`relative ${sizeClass} p-[2px] flex items-center justify-center rounded-full 
                    ${isSelectable ? 'cursor-pointer' : 'cursor-default'} transition-all`}
        onClick={isSelectable ? toggleFavorite : undefined}
      >
        <div className="absolute inset-0 rounded-full border-[1.3px] border-coralRed z-10"></div>

        <div className="absolute inset-0 m-1.5 rounded-full overflow-hidden">
          <img
            src={idol.profilePicture || defaultImage}
            alt={idol.name}
            className="w-full h-full object-cover"
          />
        </div>

        {localIsSelected && isSelectable && (
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

      <div className="mt-1 text-center">
        <p className="text-white text-mobile font-bold">{idol.name}</p>
        <p className="text-white/70 text-xs">{idol.group || '그룹 없음'}</p>
      </div>
    </div>
  );
};

export default CheckedIdolCard;
