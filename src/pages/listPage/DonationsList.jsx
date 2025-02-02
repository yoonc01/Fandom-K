import { useEffect, useState, useRef } from 'react';
import { getItems } from '@/apis/donationApi';
import DonationCard from '@/pages/listPage/DonationCard';
import prevIcon from '@/assets/icons/prevIcon.svg';
import nextIcon from '@/assets/icons/nextIcon.svg';

function DonationsList({ onDonationClick }) {
  const [history, setHistory] = useState([]);
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPC, setIsPC] = useState(window.innerWidth >= 1200);
  const observerRef = useRef(null);

  // 화면 크기에 따라 PC인지 아닌지 구분
  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoad = async (query) => {
    setIsLoading(true);
    try {
      const { data, error } = await getItems(query);

      if (error) {
        console.error('Error loading items:', error);
        alert('데이터를 불러오는 중 오류가 발생했습니다. 다시 시도해주세요.');
        return;
      }

      if (!data) {
        return;
      }

      const { list, nextCursor } = data;

      // PC의 경우, 이전 페이지 데이터(history)를 저장
      // 이전 페이지로 이동할 때는 새로 API 요청을 보내는 대신 저장된 데이터를 사용
      if (isPC) {
        setHistory((prevHistory) => {
          const newHistory = [...prevHistory, { cursor, items }];
          setItems(list);

          return newHistory;
        });
      }

      // PC가 아닌 경우, 무한 스크롤을 고려해서 새로 받은 데이터를 기존 데이터에 추가
      if (!isPC) {
        setItems((prev) => [...prev, ...list]);
      }

      setCursor(nextCursor);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadPrev = () => {
    // 현재 페이지 데이터 삭제 후 이전 페이지 데이터 가져오기
    if (history.length > 1) {
      const prevPage = history.pop();
      setHistory([...history]);
      setItems(prevPage.items);
      setCursor(prevPage.cursor);
    }
  };

  const handleLoadNext = () => {
    handleLoad({ cursor });
  };

  // 화면 크기가 PC에서 Tablet, Tablet에서 PC로 변했을 때 가장 처음의 데이터들 보여주기
  useEffect(() => {
    setItems([]);
    setHistory([]);
    handleLoad({ cursor: 0 });
  }, [isPC]);

  useEffect(() => {
    // PC의 경우, 무한 스크롤 실행 X
    if (isPC) return;

    // PC가 아닌 경우, 무한 스크롤 실행
    if (cursor === null) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) handleLoad({ cursor });
      },
      { threshold: 0.2 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [cursor, isPC]);

  return (
    <div className="flex flex-col gap-4 tablet:gap-6 pc:gap-8">
      <div className="w-full tablet:max-w-[1200px] mx-auto">
        <h3 className="font-pretendard font-bold text-[16px] tablet:text-[20px] pc:text-[24px] text-softWhite">
          후원을 기다리는 조공
        </h3>
      </div>
      <div>
        <div className="max-w-[1350px] mx-auto flex flex-col gap-8 mb-[80px]">
          <div className="flex items-center justify-between">
            {/* PC 버전: 이전 버튼 */}
            {isPC && (
              <button
                type="button"
                onClick={handleLoadPrev}
                disabled={history.length <= 1} // 이전 데이터가 없으면 이전 버튼 비활성화
                className="bg-deepCharcoal opacity-80 text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shrink-0 hover:opacity-70 disabled:opacity-50"
              >
                <img src={prevIcon} alt="이전" />
              </button>
            )}

            {/* 데이터 리스트 */}
            <div className="w-full pc:max-w-[1200px]">
              {/* 로딩 중일 시 플레이스홀더 애니메이션 적용 */}
              {isLoading ? (
                <div className="flex gap-2 tablet:gap-4 pc:gap-6">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="w-[158px] tablet:w-[282px] h-[300.5px] tablet:h-[407.5px] flex-shrink-0 flex-grow-0 bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600 opacity-10 animate-pulse rounded-lg"
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                  <div className="flex gap-2 tablet:gap-4 pc:gap-6">
                    {items.map((item, index) => (
                      <div
                        key={item.id}
                        ref={index === items.length - 1 ? observerRef : null}
                      >
                        <DonationCard
                          item={item}
                          onDonationClick={onDonationClick}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* PC 버전: 다음 버튼 */}
            {isPC && (
              <button
                type="button"
                onClick={handleLoadNext}
                disabled={cursor === null} // 다음 데이터가 없으면 다음 버튼 비활성화
                className="bg-deepCharcoal opacity-80 text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shrink-0 hover:opacity-70 disabled:opacity-50"
              >
                <img src={nextIcon} alt="다음" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationsList;
