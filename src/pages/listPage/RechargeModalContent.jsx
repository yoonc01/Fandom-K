import PrimaryButton from '@/components/PrimaryButton';
import { getCredits, rechargeCredits } from '@/utils/creditStorage';
import { useState } from 'react';

export default function RechargeModalContent({
  setModalStep,
  onRechargeSuccess,
}) {
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleRecharge = (e) => {
    e.preventDefault();

    rechargeCredits(selectedAmount);
    onRechargeSuccess(getCredits(), selectedAmount);
    setModalStep('creditRechargeSuccess');
  };

  return (
    <div className="w-[295px] h-fit flex flex-col gap-[8px] mt-[24px]">
      {[100, 500, 1000].map((amount) => (
        <div
          key={amount}
          className={`bg-midnightBlack w-full h-[62px] border-2 rounded-lg pl-[15px] pr-[20px] flex items-center justify-between cursor-pointer ${selectedAmount === amount ? 'border-coralRed' : 'border-softWhite'} hover:border-coralRed`}
          onClick={() => {
            setSelectedAmount(amount);
          }}
        >
          <div className="w-[216px] h-[26px] flex items-center justify-start gap-[2px]">
            <div className="w-[20px] h-[30px] bg-[url(@/assets/icons/credit.svg)] bg-contain bg-no-repeat bg-center" />
            <label className="font-pretendard text-white text-[20px] font-bold">
              {amount}
            </label>
          </div>
          <div className="relative flex items-center justify-center">
            <input
              type="radio"
              name="selectAmount"
              className="peer hidden"
              checked={selectedAmount === amount}
              readOnly
            />
            <div
              className={`w-[16px] h-[16px] rounded-full border-[2px] bg-gray-100 border-gray-300 ${selectedAmount === amount ? 'border-coralRed' : ''} flex items-center justify-center`}
            >
              <div
                className={`absolute w-2 h-2 rounded-full bg-coralRed transition-transform ${selectedAmount === amount ? 'scale-100' : 'scale-0'}`}
              />
            </div>
          </div>
        </div>
      ))}

      <PrimaryButton
        className={`flex items-center justify-center w-[295px] h-[42px] hover:border-2 hover:border-pinkPunch mt-4 ${!selectedAmount ? 'opacity-50 cursor-not-allowed border-none' : ''}`}
        onClickFunc={handleRecharge}
        disabled={!selectedAmount}
      >
        <div className="w-[75px] h-[26px] bg-[url(@/assets/icons/creditWhite.svg)] bg-no-repeat text-[14px] text-white font-pretendard font-bold flex items-center justify-end pr-[5px]">
          <p>충전하기</p>
        </div>
      </PrimaryButton>
    </div>
  );
}
