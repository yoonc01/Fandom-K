import PrimaryButton from '@/components/PrimaryButton.jsx';

export default function CreditShortageModalContent() {
  return (
    <div className="w-[295px] h-fit mt-[32px] flex flex-col items-center font-pretendard text-white">
      <div className="w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px] blur-2xl" />
      <div className="absolute w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px]" />
      <p className="my-[31px] mx-auto font-regular text-[16px]">
        앗! 투표하기 위한 <span className="text-coralRed">크레딧</span>이
        부족해요
      </p>
      <div className="flex flex-col items-center justify-between gap-[14px]">
        <button className="w-[295px] h-[42px] font-bold text-[14px] text-coralRed rounded-[3px] bg-softWhite">
          충전하기
        </button>
        <PrimaryButton styles="w-[295px] h-[42px] font-bold text-[14px]">
          확인
        </PrimaryButton>
      </div>
    </div>
  );
}
