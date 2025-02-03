import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import IdolCard from '@/components/IdolCard';
 
import nextIcon from '@/assets/icons/nextIcon.svg';
import prevIcon from '@/assets/icons/prevIcon.svg';
import { Helmet } from 'react-helmet';
const storageKey = 'favoriteIdols';
 

const MyPage = () => {
  const [idols, setIdols] = useState([]);
  const [selectedIdols, setSelectedIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const idolsPerPage = 16; // 한 페이지당 아이돌 개수

  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const response = await axios.get(
          'https://fandom-k-api.vercel.app/13-3/idols?pageSize=30'
        );
        setIdols(response.data.list);
      } catch (error) {
        console.error('아이돌 데이터를 불러오는 중 오류 발생:', error);
      }
    };
    fetchIdols();

    const storedFavorites = localStorage.getItem(storageKey);
    if (storedFavorites) {
      setFavoriteIdols(storedFavorites.split(','));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, favoriteIdols.join(','));
  }, [favoriteIdols]);

  // 아이돌 클릭 핸들러
  const handleToggle = (idolId) => {
    setSelectedIdols((prev) => [...prev, idolId]);
    setIsClicked(true);
  };

  //  관심있는 아이돌 추가 핸들러
  const handleAddFavorites = () => {
    if (!isClicked) return;

    setFavoriteIdols((prev) => {
      const updatedFavorites = [...new Set([...prev, ...selectedIdols])]; // 중복 제거
      return updatedFavorites;
    });

    setSelectedIdols([]);
    setIsClicked(false); // 추가 후 다시 초기화
  };

  //  관심있는 아이돌 삭제 핸들러
  const handleRemoveFavorite = (idolId) => {
    setFavoriteIdols((prev) => prev.filter((id) => id !== idolId));
  };

  // 페이지 이동 핸들러
  const nextPage = () => {
    if ((currentPage + 1) * idolsPerPage < idols.length) {
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

      <div className="w-full max-w-[1200px] flex flex-col items-center py-6 sm:py-10">
        <h1 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          내가 관심있는 아이돌
        </h1>

        {/* 관심있는 아이돌 데이터 없을 때도 공간 유지 */}
        <div className="w-full flex gap-4 mt-4 flex-wrap min-h-[150px]">
          {favoriteIdols.length > 0 ? (
            favoriteIdols.map((idolId) => {
              const idol = idols.find((i) => i.id === idolId);
              return (
                idol && (
                  <div
                    key={idol.id}
                    className="w-[98px] h-[98px] border-[1px] border-gray-500 rounded-full overflow-hidden flex items-center justify-center bg-black"
                  >
                    <img
                      src={idol?.profilePicture}
                      alt={idol?.name}
                      className="w-full h-full object-contain scale-[1.2]"
                    />
                  </div>
                )
              );
            })
          ) : (
            <p className="text-gray-500 text-center w-full">
              관심있는 아이돌을 추가해보세요.
            </p>
          )}
        </div>

        <div className="w-full h-[1px] bg-gray-600 my-6"></div>

        <h2 className="text-white text-[16px] sm:text-[20px] md:text-[24px] font-bold self-start">
          관심 있는 아이돌을 추가해보세요.
        </h2>

        <div className="relative w-full max-w-[1200px] flex justify-between items-center">
          {/* 왼쪽 버튼 (1200px  바깥쪽) */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 
                       w-[29px] h-[135px] bg-[#1B1B1B]/80 flex items-center justify-center 
                       rounded-lg opacity-80 hover:opacity-100 transition-all z-10"
          >
            <img src={prevIcon} alt="Previous" className="w-4 h-4" />
          </button>

          {/* 오른쪽 버튼 (1200px   바깥쪽) */}
          <button
            onClick={nextPage}
            disabled={(currentPage + 1) * idolsPerPage >= idols.length}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 
                       w-[29px] h-[135px] bg-[#1B1B1B]/80 flex items-center justify-center 
                       rounded-lg opacity-80 hover:opacity-100 transition-all z-10"
          >
            <img src={nextIcon} alt="Next" className="w-4 h-4" />
          </button>
        </div>

        {/* 아이돌 리스트 */}
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-4 mx-auto max-w-[1200px]">
          {idols
            .slice(currentPage * idolsPerPage, (currentPage + 1) * idolsPerPage)
            .map((idol) => (
              <div
                key={idol.id}
                className="w-[98px] h-[98px] border-[1px] border-gray-500 rounded-full overflow-hidden flex items-center justify-center bg-black"
                onClick={() => handleToggle(idol.id)}
              >
                <img
                  src={idol?.profilePicture}
                  alt={idol?.name}
                  className="w-full h-full object-contain scale-[1.2]"
                />
              </div>
            ))}
        </div>

        <button
          onClick={handleAddFavorites}
          disabled={!isClicked}
          className={`w-[255px] h-[50px] mt-6 text-white rounded-full text-lg font-bold bg-[#FE578F] hover:bg-[#e4567e] transition-all
    ${!isClicked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          + 추가하기
        </button>
 
    <>
      <Helmet>
        <title>Fandom-K - 좋아하는 아이돌을 관심 아이돌로 설정하세요</title>
      </Helmet>
      <div className="h-screen w-full bg-midnightBlack flex items-center justify-center">
        <div className="flex w-full max-w-[1200px] px-4 justify-center gap-6">
          {idols.length > 0 ? (
            idols.map((idol) => <IdolCard key={idol.id} idol={idol} />)
          ) : (
            <p className="text-white">아이돌 데이터를 불러오는 중...</p>
          )}
        </div>
 
      </div>
    </>
  );
};

export default MyPage;
