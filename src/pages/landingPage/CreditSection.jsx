export default function CreditSection() {
  return (
    <div className="h-[87px] pl-[70px] pr-[78px] border border-[#C1BECA] rounded-lg flex items-center justify-between w-full max-w-[1200px] min-w-[327px] pc:h-[131px] tablet:h-[131px]">
      <div className="flex flex-col items-start">
        <p className="ml-[7px] font-pretendard font-normal text-[#9A999F] text-[12px] pc:text-[16px] tablet:text-[16px]">
          내 크레딧
        </p>
        <div className="flex items-center justify-between">
          <div className="w-[30px] h-[30px] bg-[url(@/assets/icons/donation_credit.svg)] bg-contain bg-no-repeat bg-center" />
          <p className="font-pretendard font-bold text-[#DEDEE0] text-[20px] pc:text-[24px] tablet:text-[24px]">
            36,000
          </p>
        </div>
      </div>
      <p className="font-pretendard font-bold text-coralRed text-[13px] pc:text-[16px] tablet:text-[16px]">
        충전하기
      </p>
    </div>
  );
}
