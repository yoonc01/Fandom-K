import { useEffect, useState } from 'react';
import { getItems } from '@/apis/donationApi';
import DonationCard from '@/pages/listPage/DonationCard';
import prevIcon from '@/assets/icons/prevIcon.svg';
import nextIcon from '@/assets/icons/nextIcon.svg';

function DonationsList({ onDonationClick }) {
  // 이전 페이지 데이터(history)를 저장
  // 이전 페이지로 이동할 때는 API 요청을 보내는 대신 저장된 데이터 사용
  const [history, setHistory] = useState([]);
  const [items, setItems] = useState([]);
  const [cursor, setCursor] = useState(0);

  const handleLoad = async (query) => {
    const { list, nextCursor } = await getItems(query);

    setHistory((prev) => [...prev, { cursor, items }]);
    setItems(list);
    if (nextCursor !== null) {
      setCursor(nextCursor);
    }
  };

  const handleLoadNext = () => {
    handleLoad({ cursor });
  };

  const handleLoadPrev = () => {
    // 현재 페이지 데이터를 삭제 후 이전 페이지 데이터 가져오기
    if (history.length > 0) {
      const prevPage = history.pop();
      setHistory([...history]);
      setItems(prevPage.items);
      setCursor(prevPage.cursor);
    }
  };

  useEffect(() => {
    handleLoad({ cursor });
  }, []);

  return (
    <div className="max-w-[1350px] mx-auto flex flex-col gap-8 mb-[80px]">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handleLoadPrev}
          className="hidden pc:flex bg-[rgba(27,27,27,1)] text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shrink-0 hover:bg-[rgba(27,27,27,0.8)]"
        >
          <img src={prevIcon} alt="이전" />
        </button>
        <div className="w-full pc:max-w-[1200px] flex flex-col gap-4 tablet:gap-6 pc:gap-8">
          <h3 className="font-pretendard font-bold text-[16px] tablet:text-[20px] pc:text-[24px] text-softWhite">
            후원을 기다리는 조공
          </h3>
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-2 tablet:gap-4 pc:gap-6">
              {items.map((item) => (
                <div key={item.id}>
                  <DonationCard item={item} onDonationClick={onDonationClick} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLoadNext}
          className="hidden pc:flex bg-[rgba(27,27,27,1)] text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shrink-0 hover:bg-[rgba(27,27,27,0.8)]"
        >
          <img src={nextIcon} alt="다음" />
        </button>
      </div>
    </div>
  );
}

export default DonationsList;
