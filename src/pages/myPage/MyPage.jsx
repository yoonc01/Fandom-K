import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CheckedIdolCard from '@/pages/myPage/CheckedIdolCard';
import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import { fetchIdols } from '@/apis/myPageApi.js';
import PrimaryButton from '@/components/PrimaryButton';
import xButton from '@/assets/icons/xButton.svg';

const storageKey = 'favoriteIdols';

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
    const storedFavorites = localStorage.getItem(storageKey);
    if (storedFavorites) {
      setFavoriteIdols(storedFavorites.split(',').map(Number));
    }
  }, []);

  const handleToggle = (idolId) => {
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
      localStorage.setItem(storageKey, updatedFavorites.join(','));
      return updatedFavorites;
    });

    setSelectedIdols([]);
  };

  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => {
      const updatedFavorites = prev.filter((id) => id !== idolId);
      localStorage.setItem(storageKey, updatedFavorites.join(','));
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
      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 mobile:py-10">
        <h1 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-pretendard font-bold self-start">
          내가 관심있는 아이돌
        </h1>

        <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="flex gap-5 mt-4 mx-auto min-h-[150px]">
            {favoriteIdols.map((idolId) => {
              const idol = idols.find((i) => i.id === idolId);
              if (!idol) return null;

              return (
                <div key={idol.id} className="relative">
                  <CheckedIdolCard
                    idol={idol}
                    isSelectable={false}
                    sizeClass="w-[100px] h-[100px]"
                  >
                    <button
                      onClick={() => handleRemoveFavorite(idol.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 z-50 flex items-center justify-center bg-transparent transition-opacity"
                    >
                      <img
                        src={xButton}
                        alt="Remove"
                        className="w-full h-full"
                      />
                    </button>
                  </CheckedIdolCard>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-pretendard font-bold self-start mt-6">
          관심 있는 아이돌을 추가해보세요.
        </h2>

        {/* 이전 버튼 */}
        <div className="relative w-full max-w-[1200px] mt-[20px]">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-[1%] md:left-[-6%] lg:left-[-4%] top-1/2 transform -translate-y-1/2
                       w-[29px] h-[135px] rounded-[4px] 
                       bg-[rgba(27,27,27,0.8)] 
                       hover:bg-[rgba(27,27,27,1)] transition-all 
                       flex items-center justify-center"
          >
            <img src={prevIcon} alt="Previous" className="w-4 h-4" />
          </button>

          {/*   아이돌 리스트 */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 mt-4 mx-auto min-h-[300px]">
            {idols
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((idol) => (
                <CheckedIdolCard
                  key={idol.id}
                  idol={idol}
                  isSelectable={true}
                  isSelected={selectedIdols.includes(idol.id)}
                  onClick={() => handleToggle(idol.id)}
                />
              ))}
          </div>

          {/* 다음 버튼 (반응형 위치 조정) */}
          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * itemsPerPage >= idols.length}
            className="absolute right-[1%] md:right-[-6%] lg:right-[-4%] top-1/2 transform -translate-y-1/2
                       w-[29px] h-[135px] rounded-[4px] 
                       bg-[rgba(27,27,27,0.8)] 
                       hover:bg-[rgba(27,27,27,1)] transition-all 
                       flex items-center justify-center"
          >
            <img src={nextIcon} alt="Next" className="w-4 h-4" />
          </button>
        </div>
      </div>

      <PrimaryButton
        onClickFunc={handleAddToFavorites}
        className="w-[255px] h-[48px] mt-10 text-white rounded-full font-pretendard font-bold text-[16px]"
      >
        + 추가하기
      </PrimaryButton>
    </div>
  );
};

export default MyPage;
