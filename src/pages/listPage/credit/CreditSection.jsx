export default function CreditSection({ onRechargeClick, credits }) {
  return (
    <div className="h-[87px] mx-auto pl-[70px] pr-[78px] bg-midnightBlack border border-[#F1EEF9]/80 rounded-lg flex items-center justify-between w-full max-w-[1200px] min-w-[327px] pc:h-[131px] tablet:h-[131px] mt-[16px] mb-[40px] tablet:mt-[0] tablet:mb-[64px] pc:my-[50px]">
      <div className="flex flex-col items-start">
        <p className="ml-[7px] font-pretendard font-normal text-white/60 text-[12px] pc:text-[16px] tablet:text-[16px]">
          내 크레딧
        </p>
        <div className="flex items-center justify-between">
          <div className="w-[30px] h-[30px] bg-[url(@/assets/icons/creditLight.svg)] bg-contain bg-no-repeat bg-center" />
          <p className="font-pretendard font-bold text-white/[0.87] text-[20px] pc:text-[24px] tablet:text-[24px]">
            {credits.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p
          className="font-pretendard font-bold text-coralRed text-[13px] pc:text-[16px] tablet:text-[16px] cursor-pointer"
          onClick={onRechargeClick}
        >
          충전하기
        </p>
      </div>
    </div>
  );
}
