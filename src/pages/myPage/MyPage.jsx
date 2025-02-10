import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import IdolCard from '@/components/IdolCard';
import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import { fetchIdols } from '@/apis/myPageApi.js';
import PrimaryButton from '@/components/PrimaryButton';
import xButton from '@/assets/icons/xButton.svg';

const STORAGEKEY = 'favoriteIdols';

const MyPage = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1200) setItemsPerPage(16);
      else if (width >= 768) setItemsPerPage(8);
      else if (width >= 375) setItemsPerPage(6);
      else setItemsPerPage(6);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  useEffect(() => {
    const loadIdols = async () => {
      const data = await fetchIdols(32);
      setIdols(data);
    };
    loadIdols();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(STORAGEKEY);
    if (storedFavorites) {
      setFavoriteIdols(storedFavorites.split(',').map(Number));
    }
  }, []);

  const handleToggle = (idolId) => {
    if (favoriteIdols.includes(idolId)) return;
    setSelectedIdols((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
  };

  const handleAddToFavorites = () => {
    if (selectedIdols.length === 0) return;
    setFavoriteIdols((prev) => {
      const updatedFavorites = [...new Set([...prev, ...selectedIdols])];
      localStorage.setItem(STORAGEKEY, updatedFavorites.join(','));
      return updatedFavorites;
    });
    setSelectedIdols([]);
  };

  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => {
      const updatedFavorites = prev.filter((id) => id !== idolId);
      localStorage.setItem(STORAGEKEY, updatedFavorites.join(','));
      return updatedFavorites;
    });
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < idols.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full min-h-screen bg-midnightBlack flex flex-col items-center font-pretendard">
      <Header />

      {/* 관심 있는 아이돌 섹션 */}
      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 mobile:py-10 px-[24px]">
        <h1 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-bold self-start">
          내가 관심 있는 아이돌
        </h1>

        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-5 mt-4 mx-auto min-h-[150px]">
            {favoriteIdols.map((idolId) => {
              const idol = idols.find((i) => i.id === idolId);
              if (!idol) return null;

              return (
                <div key={idol.id} className="relative cursor-default">
                  <IdolCard
                    idol={idol}
                    isSelectable={false}
                    isDisabled={false}
                    sizeClass="w-[100px] h-[100px]"
                  >
                    <button
                      onClick={() => handleRemoveFavorite(idol.id)}
                      className="absolute -top-0 -right-[0] w-7 h-7  z-50 flex items-center justify-center 
                                 bg-transparent transition-opacity cursor-pointer"
                    >
                      <img
                        src={xButton}
                        alt="Remove"
                        className="w-full h-full"
                      />
                    </button>
                  </IdolCard>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full max-w-[1200px] border-b border-gray-700 my-6"></div>

        <h2 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-bold self-start mt-6">
          관심 있는 아이돌을 추가해보세요.
        </h2>
      </div>

      <div className="relative w-full max-w-[1200px] mt-[10px]">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-[1%] tablet:left-[1.5%] pc:left-[-4.5%] top-1/2 transform -translate-y-1/2 
                     bg-[rgba(27,27,27,0.8)] hover:bg-[rgba(27,27,27,1)] transition-all w-[29px] h-[135px] 
                     rounded-[4px] flex items-center justify-center"
        >
          <img
            src={prevIcon}
            alt="Previous"
            className="w-[6px] h-[12px] object-contain"
          />
        </button>

        {/*  아이돌 리스트 */}
        <div
          className="grid grid-cols-3 tablet:grid-cols-4 pc:grid-cols-8 gap-3.5
         px-[8px] mt-0 mx-auto  "
        >
          {idols
            .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
            .map((idol) => {
              const isDisabled = favoriteIdols.includes(idol.id);

              return (
                <div
                  key={idol.id}
                  className={`relative transition-opacity duration-300 ${isDisabled ? 'opacity-50' : ''}`}
                >
                  <IdolCard
                    idol={idol}
                    isSelectable={!isDisabled}
                    isSelected={selectedIdols.includes(idol.id)}
                    isDisabled={isDisabled}
                    onClick={(e) => {
                      if (isDisabled) {
                        e.preventDefault();
                        return;
                      }
                      handleToggle(idol.id);
                    }}
                  />
                </div>
              );
            })}
        </div>

        <button
          onClick={nextPage}
          disabled={(currentPage + 1) * itemsPerPage >= idols.length}
          className="absolute right-[1%] tablet:right-[1.5%] pc:right-[-4.5%] top-1/2 transform -translate-y-1/2 
             bg-[rgba(27,27,27,0.8)] hover:bg-[rgba(27,27,27,1)] transition-all w-[29px] h-[135px] 
             rounded-[4px] flex items-center justify-center"
        >
          <img
            src={nextIcon}
            alt="Next"
            className="w-[6px] h-[12px] object-contain"
          />
        </button>
      </div>

      <PrimaryButton
        onClickFunc={handleAddToFavorites}
        className="w-[255px] h-[48px] mt-10 text-white rounded-full font-bold 
                   bg-gradient-to-r from-pink-500 to-red-500 hover:opacity-90"
      >
        + 추가하기
      </PrimaryButton>
    </div>
  );
};

export default MyPage;
