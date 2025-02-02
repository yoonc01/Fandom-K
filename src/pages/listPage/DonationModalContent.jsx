import PrimaryButton from '@/components/PrimaryButton';
import CreditIcon from '@/assets/icons/credit.svg';
import { useEffect, useState } from 'react';
import { getCredits, spendCredits } from '@/utils/CreditStorage';
import { putCredits } from '@/apis/donationApi';

function DonationModalContent({
  item,
  credits,
  setModalStep,
  onDonationSuccess,
}) {
  const { id, image, subtitle, title, receivedCredit, remainingDays } = item;
  const myCredit = credits;

  const [detailInfo, setDetailInfo] = useState(false);
  const [inputCredit, setInputCredit] = useState(undefined);
  const [invalidCredit, setInvalidCredit] = useState(true);
  const [nullCredit, setNullCredit] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const showDetailInfo = () => {
    setDetailInfo(!detailInfo);
  };

  const handleCreditChange = (e) => {
    setInputCredit(e.target.value);
  };

  const handleDonation = async () => {
    setIsLoading(true);
    try {
      const credit = Number(inputCredit);
      const res = await putCredits({ id, credit });
      if (res?.status === 200) {
        spendCredits(credit);
        onDonationSuccess(getCredits());
        setModalStep('donationSuccess');
      } else {
        console.error('후원 요청 실패:', res);
        alert('후원 요청을 하는 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (Number(inputCredit) > myCredit) {
      setInvalidCredit(true);
    } else {
      setInvalidCredit(false);
    }
  }, [inputCredit]);

  useEffect(() => {
    if (inputCredit === undefined || inputCredit < 1) {
      setNullCredit(true);
    } else {
      setNullCredit(false);
    }
  }, [inputCredit]);

  return (
    <div className="w-[295px] pt-[24px] flex flex-col items-center gap-6">
      {/* 후원 세부 정보 */}
      <div className="flex flex-col gap-[10px]">
        <div className="w-[158px] h-[206px] overflow-hidden rounded-lg">
          <img src={image} className="w-full h-full object-cover" />
        </div>
        <ul className="flex flex-col gap-[2px] m-0">
          <li className="font-regular text-[12px] text-silverGray">
            {subtitle}
          </li>
          <li className="font-medium text-[16px] text-softWhite">
            <button type="button" onClick={showDetailInfo}>
              {title}
            </button>
          </li>
          {detailInfo && (
            <li className="flex flex-col gap-2 bg-[#272F3D] p-[10px] mt-[6px] rounded-lg">
              <ul className="flex flex-col">
                <li className="font-regular text-[12px] text-silverGray">
                  모인 크레딧
                </li>
                <li className="flex items-baseline flex-end gap-1">
                  <div className="inline-block font-regular text-[14px] text-softWhite">
                    {receivedCredit}
                  </div>
                  <div className="inline-block font-regular text-[10px] text-silverGray">
                    크레딧
                  </div>
                </li>
              </ul>
              <ul className="flex flex-col">
                <li className="font-regular text-[12px] text-silverGray">
                  남은 일자
                </li>
                <li className="flex items-baseline flex-end gap-1">
                  <div className="inline-block font-regular text-[14px] text-softWhite">
                    {remainingDays}
                  </div>
                  <div className="inline-block font-regular text-[10px] text-silverGray">
                    일
                  </div>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
      {/* 후원할 크레딧 입력 */}
      <div className="w-full relative">
        <input
          type="text"
          id="credit"
          value={inputCredit}
          onChange={handleCreditChange}
          onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ''))} // 입력된 값이 숫자가 아닐 시 제거
          placeholder="크레딧 입력"
          className={`w-full h-[58px] rounded-lg bg-[#272F3D] border ${!invalidCredit ? 'border-white focus:border-white' : 'border-red-500 focus:border-red-500'} focus:outline-none p-[16px] text-[20px] text-white placeholder-bold-steelGray`}
        />
        <img
          src={CreditIcon}
          className="w-[20px] absolute top-[18px] right-[18px]"
        />
        {invalidCredit && (
          <div className="mt-[6px] font-medium text-[12px] text-red-500">
            갖고 있는 크레딧보다 더 많이 후원할 수 없어요
          </div>
        )}
      </div>
      <PrimaryButton
        disabled={invalidCredit || nullCredit || isLoading}
        className="w-full h-[42px] rounded-lg font-bold text-[14px] text-white"
        onClickFunc={handleDonation}
      >
        후원하기
      </PrimaryButton>
    </div>
  );
}

export default DonationModalContent;
