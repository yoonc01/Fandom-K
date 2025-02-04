import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import IdolCard from '@/components/IdolCard';

import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import checkIcon from '@/assets/images/check.png';
import { fetchIdols } from '@/apis/idolApi';

const storageKey = 'favoriteIdols';

const MyPage = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 6;
      if (window.innerWidth < 768) return 8;
      return 16;
    }
    return 16;
  };

  useEffect(() => {
    const loadIdols = async () => {
      const data = await fetchIdols(30);
      setIdols(data);
    };
    loadIdols();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(storageKey);
    if (storedFavorites) {
      setFavoriteIdols(storedFavorites.split(','));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, favoriteIdols.join(','));
  }, [favoriteIdols]);

  const handleToggle = (idolId) => {
    setSelectedIdols((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
    setIsClicked(true);
  };

  const handleAddFavorites = () => {
    if (!isClicked) return;

    setFavoriteIdols((prev) => [...prev, ...selectedIdols]);
    setSelectedIdols([]);
    setIsClicked(false);
  };

  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => prev.filter((id) => id !== idolId));
  };

  const nextPage = () => {
    const itemsPerPage = getItemsPerPage();
    if ((currentPage + 1) * itemsPerPage < idols.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#02000E] flex flex-col items-center   ">
      <Header />

      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 sm:py-10">
        <h1 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          내가 관심있는 아이돌
        </h1>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 mt-4 min-h-[150px] min-w-max">
            {favoriteIdols.length > 0 ? (
              favoriteIdols.map((idolId) => {
                const idol = idols.find((i) => i.id === idolId);
                return idol ? (
                  <div key={idol.id} className="flex-shrink-0">
                    <IdolCard
                      idol={idol}
                      onToggle={handleRemoveFavorite}
                      className="w-[88px] h-[88px] rounded-full object-cover"
                    />
                  </div>
                ) : null;
              })
            ) : (
              <p className="text-gray-500 text-center w-full mt-[50px]">
                관심있는 아이돌을 추가해보세요.
              </p>
            )}
          </div>
        </div>

        <div className="w-[1200px] h-[1px] bg-gray-600 my-6"></div>

        <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          관심 있는 아이돌을 추가해보세요.
        </h2>

        <div className="relative w-full max-w-[1200px] mt-[20px]">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute w-[29px] h-[135px] top-1/2 -left-[40px] bg-[#1B1B1B]/80
             flex items-center justify-center rounded-lg opacity-80 hover:opacity-100 transition-all z-10
             disabled:opacity-50 disabled:cursor-not-allowed transform -translate-y-1/2"
          >
            <img src={prevIcon} alt="Previous" className="w-4 h-4" />
          </button>

          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * getItemsPerPage() >= idols.length}
            className="absolute w-[29px] h-[135px] top-1/2 -right-[40px] bg-[#1B1B1B]/80
             flex items-center justify-center rounded-lg opacity-80 hover:opacity-100 transition-all z-10
             disabled:opacity-50 disabled:cursor-not-allowed transform -translate-y-1/2"
          >
            <img src={nextIcon} alt="Next" className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-6 mt-4 mx-auto bg-[#02000E] min-h-[300px]">
            {idols
              .slice(
                currentPage * getItemsPerPage(),
                (currentPage + 1) * getItemsPerPage()
              )
              .map((idol) => (
                <div
                  key={idol.id}
                  className="relative w-[98px] h-[98px] rounded-full border-[2px] border-[#FF4D78] flex items-center justify-center"
                  onClick={() => handleToggle(idol.id)}
                >
                  <IdolCard
                    idol={idol}
                    onToggle={handleToggle}
                    isSelectable={true}
                    className="w-[88px] h-[88px] rounded-full object-cover"
                  />
                </div>
              ))}
          </div>
        </div>

        <button
          onClick={handleAddFavorites}
          disabled={!isClicked}
          className={`w-[255px] h-[50px] mt-6 text-white rounded-full text-lg font-bold
            bg-[#FE578F] hover:bg-[#e4567e] transition-all
            ${!isClicked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          + 추가하기
        </button>
      </div>
    </div>
  );
};

export default MyPage;
