import chartLogo from '@/assets/icons/chartLogo.svg';
import PrimaryButton from '../../components/PrimaryButton';

function MonthlyChartSection() {
  return (
    <div className="flex flex-col items-center mx-auto font-pretendard bg-midnightBlack text-white w-full pc:w-[1200px]">
      <div className="flex justify-between w-full font-bold leading-[26px] mb-[16px] pc:mb-[24px] tablet:mb-[24px]">
        <h3 className="text-[24px]">이달의 차트</h3>
        {/* 피그마에 지정되어 있는 padding 값이 css 상에서 깨져서 12px로 변경 */}
        <PrimaryButton styles="flex font-pretendard pt-[2px] pb-[3px] text-[13px] tracking-[0.02em] w-[128px] h-[32px] gap-[4px] px-[12px]">
          <img src={chartLogo} alt="chartLogo" className="inline" />
          <span>차트 투표하기</span>
        </PrimaryButton>
      </div>
      <div className="flex w-full text-[14px] font-regular leading-[18px] tracking-[-0.17px]">
        <div className="flex justify-center items-center text-center w-1/2 h-[42px] bg-white bg-opacity-10 border-b">
          이달의 여자 아이돌
        </div>
        <div className="flex justify-center items-center text-center w-1/2 h-[42px] text-neutral-500">
          이달의 남자 아이돌
        </div>
      </div>
      {/* 수정 예정 */}
      <div>아이돌 리스트</div>
      <button className="w-[326px] h-[42px] font-pretendard text-[14px] leading-[26px] rounded-[3px] border bg-white bg-opacity-10 mb-[33px] mt-[33px] pc:mt-[51px] tablet:mt-[27px]">
        더 보기
      </button>
    </div>
  );
}

export default MonthlyChartSection;
