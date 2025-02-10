import { useState, useEffect, useRef } from 'react';
import MonthlyChartVoteList from '@/components/modalContent/MonthlyChartVoteList';
import { getLists, postVotes } from '@/apis/monthlyChartApi';
import PrimaryButton from '@/components/PrimaryButton';
import { spendCredits, rechargeCredits } from '@/utils/creditStorage';

const MonthlyChartVoteModal = ({
  gender,
  closeModal,
  setModalStep,
  setVoteTrigger,
}) => {
  const [cursor, setCursor] = useState(0);
  const [idolData, setIdolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const observerRef = useRef();

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

  const handleVoteClick = async () => {
    const result = spendCredits(1000);
    if (result === 'NOT-ENOUGH') {
      setModalStep('creditNotEnough');
      return;
    }

    try {
      await postVotes(selectedIdol);
      alert('투표 완료!');
      setVoteTrigger((prev) => !prev);

      closeModal();
    } catch (error) {
      alert('투표에 실패했습니다. 다시 시도해 주세요.');
      rechargeCredits(1000);
      return;
    }
  };

  useEffect(() => {
    setIdolData([]);
    setCursor(0);
    loadIdolData();
  }, [gender]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (cursor === null) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadIdolData();
        }
      },
      { threshold: 0.2 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [cursor]);

  return (
    <div
      className={`relative overflow-hidden ${isMobile ? 'W-full h-full' : 'w-[525px] h-[693px]'}`}
    >
      {loading ? (
        <div className="text-center text-white">로딩 중입니다...</div>
      ) : (
        <div
          className={`overflow-y-auto ${isMobile ? 'h-[calc(100vh-156px)]' : 'h-[600px]'}`}
        >
          <MonthlyChartVoteList
            idols={idolData}
            selectedIdol={selectedIdol}
            setSelectedIdol={setSelectedIdol}
          >
            <div
              className="w-full h-[40px]"
              ref={cursor !== null ? observerRef : null}
            ></div>
          </MonthlyChartVoteList>
        </div>
      )}
      <div
        className={`absolute text-white leading-[26px] ${isMobile ? 'bottom-[64px] w-full h-[112px] bg-midnightBlack' : 'bottom-0 w-[525px] h-[72px] bg-deepCharcoal'}`}
      >
        <PrimaryButton
          onClickFunc={handleVoteClick}
          className="w-full h-[42px] font-bold text-[14px] font-pretendard"
        >
          투표하기
        </PrimaryButton>
        <p className="font-medium text-[12px] text-center mt-[8px] tablet:mt-[12px] pc:mt-[12px]">
          투표하는 데<span className=" text-coralRed"> 1000 크레딧</span>이
          소모됩니다.
        </p>
      </div>
    </div>
  );
};

export default MonthlyChartVoteModal;
