import PrimaryButton from '@/components/PrimaryButton';

export default function DonationSuccess({ onConfirm }) {
  return (
    <div className="w-[295px] flex flex-col gap-[40px] mt-[40px]">
      <div className="flex items-center justify-center">
        <div className="w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px] blur-2xl" />
        <div className="absolute w-[138px] h-[115px] bg-[url(@/assets/icons/creditNoFeather.svg)] bg-cover bg-no-repeat bg-[left_9.86px_top_-50px]" />
      </div>
      <div className="mx-auto font-normal text-[16px]">
        <div className="inline-block text-coralRed">후원</div>
        <div className="inline-block text-white">이 완료되었습니다!</div>
      </div>
      <PrimaryButton
        className="w-full h-[42px] rounded-lg font-bold text-[14px] text-white"
        onClickFunc={onConfirm}
      >
        확인
      </PrimaryButton>
    </div>
  );
}
