import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CheckedIdolCard from '@/pages/myPage/CheckedIdolCard';
import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import { fetchIdols } from '@/apis/idolApi.js';
import PrimaryButton from '@/components/PrimaryButton';

const storageKey = 'favoriteIdols';

const MyPage = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const favoriteIdSet = new Set(favoriteIdols.map(Number)); // 숫자로 변환한 Set 생성
  const favoriteIdolsArr = idols.filter((idol) => favoriteIdSet.has(idol.id));

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setItemsPerPage(16);
      } else if (width >= 768) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

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

  const handleToggle = (idolId) => {
    setSelectedIdols((prev) => {
      const index = prev.indexOf(idolId);
      if (index !== -1) {
        // 이미 선택된 경우, 해당 인덱스의 항목만 제거
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      } else {
        // 선택되지 않은 경우, 배열에 추가
        return [...prev, idolId];
      }
    });
  };
  const handleAddToFavorites = () => {
    if (selectedIdols.length === 0) return;
    else {
      setFavoriteIdols((prev) => {
        const updatedFavorites = [...new Set([...prev, ...selectedIdols])];
        localStorage.setItem(storageKey, updatedFavorites.join(','));
        return updatedFavorites;
      });
    }
    setSelectedIdols([]);
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if ((currentPage + 1) * itemsPerPage < idols.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      {/*스크롤시 배경 전체유지 */}
      <style>
        {`
          html, body {
            background-color: #02000E; /* 브라우저 전체 배경 */
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden; /* 가로 스크롤 방지 */
          }
        `}
      </style>
      <div className="w-full min-h-screen bg-[#02000E] flex flex-col items-center font-pretendard">
        <Header />

        {/* 관심있는 아이돌 섹션 */}
        <div className="w-full max-w-[1200px] flex flex-col items-center py-6 sm:py-10">
          <h1 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-bold self-start">
            내가 관심있는 아이돌
          </h1>
          {/* ✅ 가로 스크롤바 적용 (중복 제거) */}
          <div className="w-full overflow-x-auto custom-scrollbar">
            <div className="flex gap-3 mt-4 mx-auto min-h-[150px]">
              {favoriteIdolsArr.map((idol) => (
                <CheckedIdolCard
                  key={idol.id}
                  idol={idol}
                  isSelectable={false}
                />
              ))}
            </div>
          </div>
          <style jsx>
            {`
              .custom-scrollbar::-webkit-scrollbar {
                height: 8px; /* 가로 스크롤바 높이 */
              }

              .custom-scrollbar::-webkit-scrollbar-track {
                background: #111; /* 스크롤바 배경 */
              }

              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #333; /* 스크롤바 색상 */
                border-radius: 10px;
              }

              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #888; /* 마우스 오버 시 */
              }
            `}
            /br /br /br
          </style>
          {/* ✅ 중복된 스크롤 div 삭제 완료 */}
          {/* 회색 구분선 */}
          <div className="relative w-full max-w-[1200px] mt-4 border-t border-gray-900" />
          {/* 아이돌 추가하기 섹션 */}
          <h2 className="text-white text-[16px] tablet:text-[20px] pc:text-[24px] font-bold self-start mt-6">
            관심 있는 아이돌을 추가해보세요.
          </h2>
          <div className="relative w-full max-w-[1200px] mt-[20px]">
            {/* 이전 버튼 */}
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

            {/* ✅ 아이돌 리스트 (중복된 `div` 정리) */}
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

            {/* 다음 버튼 */}
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
          {/*   추가하기 버튼 중앙 정렬 */}
          <div className="flex justify-center w-full">
            <PrimaryButton
              onClickFunc={handleAddToFavorites}
              className={
                'w-[255px] h-[48px] mt-10 text-white rounded-full font-pretendard font-bold text-[16px] hover:opacity-70 transition-all'
              }
            >
              + 추가하기
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
