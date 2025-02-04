import PrimaryButton from '@/components/PrimaryButton.jsx';

export default function CreditShortageModalContent({ onClose, setModalStep }) {
  return (
    <div className="w-[295px] h-fit mt-[32px] flex flex-col items-center font-pretendard text-white">
      <div className="w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px] blur-2xl" />
      <div className="absolute w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px]" />
      <p className="my-[31px] mx-auto font-normal text-[16px]">
        앗! 투표하기 위한 <span className="text-coralRed">크레딧</span>이
        부족해요
      </p>
      <div className="flex flex-col items-center justify-between gap-[10px]">
        <button
          className="w-[295px] h-[42px] font-bold text-[14px] text-coralRed rounded-[3px] bg-softWhite"
          onClick={() => setModalStep('creditRecharge')}
        >
          충전하기
        </button>
        <PrimaryButton
          className="w-[295px] h-[42px] font-bold text-[14px]"
          onClickFunc={onClose}
        >
          확인
        </PrimaryButton>
      </div>
    </div>
  );
}
