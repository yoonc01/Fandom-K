import { useState, useEffect } from 'react';
import MonthlyChartVoteList from '@/components/modalContent/MonthlyChartVoteList';
import { getLists } from '@/apis/monthlyChartApi';
import PrimaryButton from '@/components/PrimaryButton';

const MonthlyChartVoteModal = ({ gender }) => {
  const [cursor, setCursor] = useState(0);
  const [idolData, setIdolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(0);

  const loadIdolData = async () => {
    setLoading(true);
    try {
      const response = await getLists(gender, cursor, 10);
      if (cursor !== 0) {
        setIdolData((prev) => [...prev, ...response.idols]);
      } else {
        setIdolData(response.idols);
      }
      setCursor(response.nextCursor);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreData = () => {
    if (cursor === null) {
      alert('불러올 데이터가 없습니다.');
    } else {
      loadIdolData();
    }
  };

  useEffect(() => {
    setIdolData([]);
    setCursor(0);
    loadIdolData();
  }, [gender]);

  return (
    <div className="w-[calc(100%-48px)] h-[693px] tablet:w-[525px] tablet:h-[693px] pc:w-[525px] pc:h-[693px] overflow-y-auto">
      {loading ? (
        <div className="text-center text-white">로딩 중입니다...</div>
      ) : (
        <MonthlyChartVoteList
          idols={idolData}
          selectedIdol={selectedIdol}
          setSelectedIdol={setSelectedIdol}
        />
      )}
      <div className="fixed bottom-0 w-[calc(100%-48px)] h-[106px] text-white leading-[26px] bg-midnightBlack/80 tablet:w-[525px] pc:w-[525px] tablet:bg-transparent pc:bg-transparent">
        <PrimaryButton className="w-full h-[42px] font-bold text-[14px] font-pretendard">
          투표하기
        </PrimaryButton>
        <p className="font-medium text-[12px] text-center">
          투표하는 데<span className=" text-coralRed"> 1000 크레딧</span>이
          소모됩니다.
        </p>
      </div>
    </div>
  );
};

export default MonthlyChartVoteModal;
