import DonationCard from '@/pages/listPage/DonationCard';
import prevIcon from '@/assets/icons/prevIcon.svg';
import nextIcon from '@/assets/icons/nextIcon.svg';

const donations = [
  {
    id: 572,
    idolId: 1186,
    title: '생일 광고',
    subtitle: '강남역 광고',
    targetDonation: 100000,
    receivedDonations: 60000,
    createdAt: '2024-09-25T12:08:47.530Z',
    deadline: '2025-02-12T23:59:59.000Z',
    status: false,
    idol: {
      id: 1186,
      name: '민지',
      gender: 'female',
      group: '뉴진스',
      profilePicture:
        'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/08/19/c5cd0937-06c6-4f4c-9f22-660c5ec8adfb.jpg',
      totalVotes: 0,
    },
  },
  {
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
  },
  {
    id: 572,
    idolId: 1186,
    title: '생일 광고',
    subtitle: '강남역 광고',
    targetDonation: 150000,
    receivedDonations: 80000,
    createdAt: '2024-09-25T12:08:47.530Z',
    deadline: '2025-02-14T23:59:59.000Z',
    status: false,
    idol: {
      id: 1186,
      name: '원영',
      gender: 'female',
      group: '아이브',
      profilePicture:
        'https://news.nateimg.co.kr/orgImg/sw/2023/11/13/20231113506783.jpg',
      totalVotes: 0,
    },
  },
  {
    id: 572,
    idolId: 1186,
    title: '생일 광고',
    subtitle: '강남역 광고',
    targetDonation: 200000,
    receivedDonations: 50000,
    createdAt: '2024-09-25T12:08:47.530Z',
    deadline: '2025-02-15T23:59:59.000Z',
    status: false,
    idol: {
      id: 1186,
      name: '제니',
      gender: 'female',
      group: '블랙핑크',
      profilePicture:
        'https://image-notepet.akamaized.net/resize/620x-/seimage/20241021/e92e5bbf5a646afe66b685a7df3bad26.jpg',
      totalVotes: 0,
    },
  },
];

function DonationsList() {
  return (
    <div class="w-[1350px] mx-auto flex flex-col gap-8">
      <div class="flex items-center justify-between">
        <div>
          <button
            type="button"
            class="bg-[rgba(27,27,27,1)] text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shadow hover:bg-[rgba(27,27,27,0.8)]"
          >
            <img src={prevIcon} alt="이전" />
          </button>
        </div>
        <div class="w-[1200px] flex flex-col gap-8">
          <div class="font-pretendard font-medium text-[24px] text-softWhite">
            후원을 기다리는 조공
          </div>
          <ul class="flex gap-6">
            {donations.map((donation) => (
              <li key={donation.id}>
                <DonationCard donation={donation} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button
            type="button"
            class="bg-[rgba(27,27,27,1)] text-white pt-[28.5px] pb-[30px] px-[15px] rounded-lg shadow hover:bg-[rgba(27,27,27,0.8)]"
          >
            <img src={nextIcon} alt="다음" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationsList;
