import PrimaryButton from '@/components/PrimaryButton';
import CreditIcon from '@/assets/icons/Credit.svg';

const mock = {
  id: 572,
  idolId: 1186,
  title: '생일 광고',
  subtitle: '강남역 광고',
  targetDonation: 200000,
  receivedDonations: 80000,
  createdAt: '2024-09-25T12:08:47.530Z',
  deadline: '2025-02-13T23:59:59.000Z',
  status: false,
  idol: {
    id: 1186,
    name: '하니',
    gender: 'female',
    group: '뉴진스',
    profilePicture:
      'https://image.fnnews.com/resource/media/image/2024/10/10/202410100737527065_l.jpg',
    totalVotes: 0,
  },
};

function DonationModalContent() {
  return (
    <div className="w-[295px] pt-[24px] flex flex-col items-center gap-6">
      {/* 후원 세부 정보 */}
      <div className="flex flex-col gap-[10px]">
        <div className="w-[158px] h-[206px] overflow-hidden rounded-t-lg">
          <img
            src={mock.idol.profilePicture}
            className="w-full h-full object-cover"
          />
        </div>
        <ul className="flex flex-col gap-[6px] m-0">
          <li className="text-[12px] font-regular text-silverGray">
            {mock.subtitle}
          </li>
          <li className="font-medium text-[14px] text-softWhite">{`${mock.idol.group} ${mock.idol.name} ${mock.title}`}</li>
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
      <PrimaryButton styles="w-full h-[42px] rounded-lg font-bold text-[14px] text-white">
        후원하기
      </PrimaryButton>
    </div>
  );
}

export default DonationModalContent;
