import { useState, useEffect } from 'react';
import chartLogo from '@/assets/icons/chartLogo.svg';
import { getLists } from '@/apis/monthlyChartApi';
import PrimaryButton from '@/components/PrimaryButton';
import MonthlyChartList from '@/pages/listPage/monthlyChart/MonthlyChartList';

const MonthlyChartSection = ({ onClickVote, gender, setGender }) => {
  const [cursor, setCursor] = useState(0);
  const [idolData, setIdolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(window.innerWidth >= 1200 ? 10 : 5);

  const onClickTab = (gender = 'female') => {
    setIdolData([]);
    setCursor(0);
    setGender(gender);
  };

  const updateChartSize = () => {
    if (window.innerWidth >= 1200) {
      setPageSize(10);
    } else {
      setPageSize(5);
    }
    setCursor(0);
  };

  const loadIdolData = async () => {
    setLoading(true);
    try {
      const response = await getLists(gender, cursor, pageSize);
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
  }, [gender, pageSize]);

  useEffect(() => {
    window.addEventListener('resize', updateChartSize);

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto font-pretendard bg-midnightBlack text-white w-full pc:w-[1200px]">
      <div className="flex justify-between w-full font-bold leading-[26px] mb-[16px] pc:mb-[24px] tablet:mb-[24px]">
        <h3 className="text-[24px]">이달의 차트</h3>
        <PrimaryButton
          className="flex font-pretendard pt-[2px] pb-[3px] text-[13px] tracking-[0.02em] w-[128px] h-[32px] gap-[4px] px-[12px]"
          onClickFunc={onClickVote}
        >
          <img src={chartLogo} alt="chartLogo" className="inline" />
          <span>차트 투표하기</span>
        </PrimaryButton>
      </div>
      <div className="flex w-full text-[14px] font-regular leading-[18px] tracking-[-0.17px] mb-[16px]">
        <button
          onClick={() => onClickTab('female')}
          className={`flex justify-center items-center text-center w-1/2 h-[42px] ${gender === 'female' ? 'text-white  bg-white bg-opacity-10  border-b' : 'hover:text-white hover:bg-white hover:bg-opacity-10 hover:border-b text-neutral-500'}`}
        >
          이달의 여자 아이돌
        </button>
        <button
          onClick={() => onClickTab('male')}
          className={`flex justify-center items-center text-center w-1/2 h-[42px] ${gender === 'male' ? 'text-white  bg-white bg-opacity-10  border-b' : 'hover:text-white hover:bg-white hover:bg-opacity-10 hover:border-b text-neutral-500'}`}
        >
          이달의 남자 아이돌
        </button>
      </div>
      {loading ? (
        <div>로딩 중입니다...</div>
      ) : (
        <MonthlyChartList idols={idolData} />
      )}

      <button
        onClick={loadMoreData}
        className="w-[326px] h-[42px] font-pretendard text-[14px] leading-[26px] rounded-[3px] border bg-white bg-opacity-10 mb-[33px] mt-[33px] pc:mt-[51px] tablet:mt-[27px]"
      >
        더 보기
      </button>
    </div>
  );
};

export default MonthlyChartSection;
