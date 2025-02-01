import PrimaryButton from '@/components/PrimaryButton';

export default function CreditRechgSuccess({ amount, onConfirm }) {
  return (
    <div className="w-[295px] h-fit flex flex-col gap-[8px] mt-[42px]">
      <div className="flex items-center justify-center">
        <div className="w-[30px] h-[30px] bg-[url(@/assets/icons/creditLight.svg)] bg-contain bg-no-repeat bg-center" />
        <p className="font-pretendard font-bold text-white/[0.87] text-[20px] pc:text-[24px] tablet:text-[24px]">
          + {amount.toLocaleString()}
        </p>
      </div>
      <p className="my-[31px] mx-auto font-regular text-[16px] text-white">
        <span className="text-coralRed">충전</span> 완료
      </p>
      <PrimaryButton
        className="flex items-center justify-center w-[295px] h-[42px] hover:border-2 hover:border-pinkPunch mt-4 text-white text-[14px]"
        onClickFunc={onConfirm}
      >
        확인
      </PrimaryButton>
    </div>
  );
}
