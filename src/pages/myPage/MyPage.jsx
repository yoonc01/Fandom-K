import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import IdolCard from '@/components/IdolCard';
import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import { fetchIdols } from '@/apis/idolApi';

const storageKey = 'favoriteIdols';

const MyPage = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const getItemsPerPage = () => {
    const width = window.innerWidth;
    if (width >= 1200) return 16; // ✅ PC에서는 8개씩 2줄 유지
    if (width >= 768) return 8; // ✅ 태블릿에서는 4개씩 2줄
    return 6; // ✅ 모바일에서는 3개씩 2줄
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

  // 아이돌 선택 상태 변경
  const handleToggle = (idolId) => {
    setSelectedIdols((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
    setIsClicked(true);
  };

  // 관심 아이돌 추가 후 선택 상태 초기화
  const handleAddFavorites = () => {
    if (!isClicked) return;

    setFavoriteIdols((prev) => {
      const newFavorites = [...new Set([...prev, ...selectedIdols])];
      return newFavorites;
    });

    // ✅ 선택된 아이돌 즉시 초기화
    setSelectedIdols([]);
    setIsClicked(false);
  };

  // 관심 목록에서 삭제
  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => prev.filter((id) => id !== idolId));
  };

  // 페이지 이동
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
    <div className="w-full min-h-screen bg-[#02000E] flex flex-col items-center">
      <Header />

      {/* 관심있는 아이돌 */}
      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 sm:py-10">
        <h1 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          내가 관심있는 아이돌
        </h1>

        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-steelGray">
          <div className="flex gap-4 mt-4 min-h-[150px] min-w-max pb-2">
            {favoriteIdols.length > 0 ? (
              favoriteIdols.map((idolId) => {
                const idol = idols.find((i) => i.id === idolId);
                return idol ? (
                  <div key={idol.id} className="flex-shrink-0">
                    <IdolCard
                      idol={idol}
                      onToggle={handleRemoveFavorite}
                      isSelectable={false}
                      isSelected={false}
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

        {/* 추가할 아이돌 목록 */}
        <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          관심 있는 아이돌을 추가해보세요.
        </h2>

        <div className="relative w-full max-w-[1200px] mt-[20px]">
          {/* 이전 버튼 */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute w-[29px] h-[135px] top-1/2 -left-[40px] bg-deepCharcoal/80 
            flex items-center justify-center rounded-lg opacity-80 hover:opacity-100 transition-all 
            disabled:opacity-50 disabled:cursor-not-allowed transform -translate-y-1/2"
          >
            <img src={prevIcon} alt="Previous" className="w-4 h-4" />
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * getItemsPerPage() >= idols.length}
            className="absolute w-[29px] h-[135px] top-1/2 -right-[40px] bg-deepCharcoal/80 
            flex items-center justify-center rounded-lg opacity-80 hover:opacity-100 transition-all 
            disabled:opacity-50 disabled:cursor-not-allowed transform -translate-y-1/2"
          >
            <img src={nextIcon} alt="Next" className="w-4 h-4" />
          </button>

          {/* 아이돌 리스트 (2줄로 배치) */}
          <div className="w-full bg-midnightBlack">
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-4 mx-auto min-h-[300px]">
              {idols
                .slice(
                  currentPage * getItemsPerPage(),
                  (currentPage + 1) * getItemsPerPage()
                )
                .map((idol) => (
                  <div
                    key={idol.id}
                    className="relative w-[98px] h-[98px] rounded-full border-[2px] border-coralRed flex items-center justify-center"
                    onClick={() => handleToggle(idol.id)}
                  >
                    <IdolCard
                      idol={idol}
                      onToggle={handleToggle}
                      isSelectable={true}
                      isSelected={selectedIdols.includes(idol.id)}
                      className="w-[88px] h-[88px] rounded-full object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* 추가하기 버튼 */}
        <button
          onClick={handleAddFavorites}
          disabled={!isClicked}
          className={`w-[255px] h-[50px] mt-6 text-white rounded-full text-lg font-bold
            bg-pinkPunch hover:bg-coralRed transition-all
            ${!isClicked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          + 추가하기
        </button>
      </div>
    </div>
  );
};

export default MyPage;
