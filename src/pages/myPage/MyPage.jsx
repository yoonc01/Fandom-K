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

  const favoriteIdSet = new Set(favoriteIdols.map(Number)); // 숫자로 변환한 Set 생성
  const favoriteIdolsArr = idols.filter((idol) => favoriteIdSet.has(idol.id));

  const handleAddToFavorites = () => {
    if (selectedIdols.length === 0) return;

    setFavoriteIdols((prev) => {
      const updatedFavorites = [...new Set([...prev, ...selectedIdols])];
      localStorage.setItem(storageKey, updatedFavorites.join(',')); // localStorage 업데이트
      return updatedFavorites;
    });

    setSelectedIdols([]); // 선택된 아이돌 초기화
  };

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
      setFavoriteIdols(storedFavorites.split(','));
    }
  }, []); // `favoriteIdols` 변경될 때마다 실행

  const handleToggle = (idolId) => {
    setSelectedIdols((prev) =>
      prev.includes(idolId)
        ? prev.filter((id) => id !== idolId)
        : [...prev, idolId]
    );
  };

  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => {
      const updatedFavorites = prev.filter((id) => id !== idolId.toString());
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

      {/* 관심있는 아이돌 섹션 */}
      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 mobile:py-10">
        <h1 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-pretendard font-bold self-start">
          내가 관심있는 아이돌
        </h1>

        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-steelGray">
          <div className="grid grid-cols-3 tablet:grid-cols-4 pc:grid-cols-8 gap-3 mt-4 mx-auto min-h-[150px]">
            {favoriteIdolsArr.map((idol) => (
              <div key={idol.id} className="relative">
                {/* 닫기 버튼  */}
                {/* X 버튼 (항상 테두리 상단에 고정) */}
                <button
                  onClick={() => handleRemoveFavorite(idol.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 z-50 
                 flex items-center justify-center bg-transparent
                 transition-opacity"
                >
                  <img src={xButton} alt="Remove" className="w-full h-full" />
                </button>

                <CheckedIdolCard
                  idol={idol}
                  isSelectable={false}
                  sizeClass="w-[100px] h-[100px]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 회색 구분선 */}
        <div className="relative w-full max-w-[1200px] mt-4 border-t border-gray-900" />

        {/* 아이돌 추가하기 섹션 */}
        <h2 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-pretendard font-bold self-start mt-6">
          관심 있는 아이돌을 추가해보세요.
        </h2>

        {/* 버튼이 그리드 크기에 따라 자동으로 좌우 맞춤 */}
        <div className="relative w-full max-w-[1200px] mt-[20px]">
          {/* 이전 버튼 */}

          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-[1%] tablet:left-[-6%] lg:left-[-4%] top-1/2 transform -translate-y-1/2
                       w-[29px] h-[135px] rounded-[4px] 
                       bg-[rgba(27,27,27,0.8)] 
                       hover:bg-[rgba(27,27,27,1)] transition-all 
                       flex items-center justify-center"
          >
            <img src={prevIcon} alt="Previous" className="w-4 h-4" />
          </button>
          {/* 이후 버튼 */}
          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * itemsPerPage >= idols.length}
            className="absolute right-[1%] tablet:right-[-6%] pc:right-[-4%] top-1/2 transform -translate-y-1/2
                       w-[29px] h-[135px] rounded-[4px] 
                       bg-[rgba(27,27,27,0.8)] 
                       hover:bg-[rgba(27,27,27,1)] transition-all 
                       flex items-center justify-center"
          >
            <img src={nextIcon} alt="Next" className="w-4 h-4" />
          </button>
          {/* 아이돌 리스트 */}
          <div className="grid grid-cols-3 tablet:grid-cols-4 lg:grid-cols-8 gap-3 mt-4 mx-auto min-h-[300px]">
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
        </div>
      </div>

      {/* 추가하기 버튼 */}
      <div className="flex justify-center w-full">
        <PrimaryButton
          onClickFunc={handleAddToFavorites}
          className="w-[255px] h-[48px] mt-10 text-white rounded-full font-pretendard font-bold text-[16px]"
        >
          + 추가하기
        </PrimaryButton>
      </div>
    </div>
  );
};

export default MyPage;
