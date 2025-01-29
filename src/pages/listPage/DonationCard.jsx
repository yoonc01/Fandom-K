import creditIcon from '@/assets/icons/credit.svg';
import PrimaryButton from '@/components/PrimaryButton';

function DonationCard({ donation, onDonationClick }) {
  const { receivedDonations, targetDonation, subtitle, title, idol, deadline } =
    donation;
  const { name, group, profilePicture } = idol;

  const currentDonationPercentage = (receivedDonations / targetDonation) * 100;

  const receivedCredit = receivedDonations.toLocaleString();

  const deadlineDate = new Date(deadline);
  const today = new Date();
  const diffTime = deadlineDate - today;
  const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="w-[158px] tablet:w-[282px] relative flex flex-col gap-[6px] tablet:gap-2 font-pretendard">
      {/* 후원 아이돌 이미지 */}
      <div className="w-full h-[206px] tablet:h-[293px] relative overflow-hidden flex items-center justify-center rounded-t-lg">
        <img
          className="w-full h-full object-cover"
          src={profilePicture}
          alt={name}
        />
        {/* 후원 아이돌 이미지 그라데이션 효과 */}
        <div className="w-full h-1/3 absolute flex justify-center bottom-0 bg-gradient-to-t from-midnightBlack to-transparent">
          {/* 후원하기 버튼 */}
          <PrimaryButton
            styles={
              'w-[142px] tablet:w-[234px] h-[31px] tablet:h-[40px] absolute bottom-[8px] tablet:bottom-[20px] font-bold text-[13px] text-white'
            }
            onClickFunc={onDonationClick}
          >
            후원하기
          </PrimaryButton>
        </div>
      </div>
      {/* 후원 정보 */}
      <div className="w-full relative">
        <ul className="flex flex-col gap-[20px] tablet:gap-[24px]">
          <li className="flex flex-col gap-[2px] tablet:gap-[4px]">
            {/* 후원 부제목 */}
            <div className="text-[12px] tablet:text-[16px] font-regular text-silverGray">
              {subtitle}
            </div>
            {/* 후원 제목 */}
            <div className="font-medium text-[14px] tablet:text-[18px] text-softWhite">{`${group} ${name} ${title}`}</div>
          </li>
          {/* 후원 현황 */}
          <li className="w-full flex flex-col gap-2">
            <div className="flex justify-between">
              {/* 현재 후원된 크레딧 개수 */}
              <div className="flex items-center gap-[3px]">
                <img src={creditIcon} alt="credit" className="w-[12px]" />
                <div className="font-regular text-[12px] text-coralRed">
                  {receivedCredit}
                </div>
              </div>
              {/* 남은 후원 일자 */}
              <div className="font-regular text-[12px] text-softWhite">{`${remainingDays}일 남음`}</div>
            </div>
            {/* 후원 현황 차트 */}
            <div className="w-full h-[1.5px] bg-white">
              <div
                className="h-full bg-coralRed"
                style={{ width: `${currentDonationPercentage}%` }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DonationCard;
