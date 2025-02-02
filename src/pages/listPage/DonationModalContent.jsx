import PrimaryButton from '@/components/PrimaryButton';
import CreditIcon from '@/assets/icons/credit.svg';
import { useState } from 'react';

function DonationModalContent({ item }) {
  const {
    image,
    subtitle,
    title,
    receivedCredit,
    currentCreditPercentage,
    remainingDays,
  } = item;

  const [detailInfo, setDetailInfo] = useState(false);

  function showDetailInfo() {
    setDetailInfo(!detailInfo);
  }

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
          <li className="font-medium text-[14px] text-softWhite">
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
          placeholder="크레딧 입력"
          className="w-full h-[58px] rounded-lg bg-[#272F3D] border border-white p-[16px] text-[20px] text-white placeholder-bold-steelGray"
        />
        <img
          src={CreditIcon}
          className="w-[20px] absolute top-[18px] right-[18px]"
        />
      </div>
      <PrimaryButton className="w-full h-[42px] rounded-lg font-bold text-[14px] text-white">
        후원하기
      </PrimaryButton>
    </div>
  );
}

export default DonationModalContent;
