import { useState, useEffect } from 'react';
import chartLogo from '@/assets/icons/chartLogo.svg';
import { getLists } from '../../apis/idolListApi';
import PrimaryButton from '../../components/PrimaryButton';
import IdolList from '../../pages/listPage/IdolList';

const MonthlyChart = () => {
  const [gender, setGender] = useState('female');
  const [idolData, setIdolData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [chartSize, setChartSize] = useState();

  const updateChartSize = () => {
    if (window.innerWidth >= 1200) {
      setChartSize(10);
    } else if (window.innerWidth >= 768) {
      setChartSize(5);
    } else {
      setChartSize(5);
    }
  };

  const loadIdolData = async () => {
    setLoading(true);
    try {
      const response = await getLists(gender, chartSize);
      setIdolData(response.idols);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIdolData();
  }, [gender, chartSize]);

  useEffect(() => {
    updateChartSize();
    window.addEventListener('resize', updateChartSize);

    return () => {
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-auto font-pretendard bg-midnightBlack text-white w-full pc:w-[1200px]">
      <div className="flex justify-between w-full font-bold leading-[26px] mb-[16px] pc:mb-[24px] tablet:mb-[24px]">
        <h3 className="text-[24px]">이달의 차트</h3>
        <PrimaryButton className="flex font-pretendard pt-[2px] pb-[3px] text-[13px] tracking-[0.02em] w-[128px] h-[32px] gap-[4px] px-[12px]">
          <img src={chartLogo} alt="chartLogo" className="inline" />
          <span>차트 투표하기</span>
        </PrimaryButton>
      </div>
      <div className="flex w-full text-[14px] font-regular leading-[18px] tracking-[-0.17px] mb-[16px]">
        <button
          onClick={() => setGender('female')}
          className="flex justify-center items-center text-center w-1/2 h-[42px] focus:text-white hover:text-white focus:bg-white hover:bg-white focus:bg-opacity-10 hover:bg-opacity-10 focus:border-b hover:border-b text-neutral-500"
        >
          이달의 여자 아이돌
        </button>
        <button
          onClick={() => setGender('male')}
          className="flex justify-center items-center text-center w-1/2 h-[42px] focus:text-white hover:text-white focus:bg-white hover:bg-white focus:bg-opacity-10 hover:bg-opacity-10 focus:border-b hover:border-b text-neutral-500"
        >
          이달의 남자 아이돌
        </button>
      </div>
      {loading ? (
        <div>로딩 중입니다...</div>
      ) : (
        <IdolList idols={idolData} loading={loading} />
      )}

      <button className="w-[326px] h-[42px] font-pretendard text-[14px] leading-[26px] rounded-[3px] border bg-white bg-opacity-10 mb-[33px] mt-[33px] pc:mt-[51px] tablet:mt-[27px]">
        더 보기
      </button>
    </div>
  );
};

export default MonthlyChart;
