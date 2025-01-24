const donation = {
  id: 572,
  idolId: 1186,
  title: '생일 광고',
  subtitle: '강남역 광고',
  targetDonation: 100000,
  receivedDonations: 60000,
  createdAt: '2024-09-25T12:08:47.530Z',
  deadline: '2024-09-26T23:59:59.000Z',
  status: false,
  idol: {
    id: 1186,
    name: '민지',
    gender: 'female',
    group: '뉴진스',
    profilePicture:
      'https://i.namu.wiki/i/8BAuDmjlFbHoGpGTyTUJyeIsrWw7vrGKTvbOBS1DbaLNHHFL6D05TSZEyVGGffn_RIs6zrf4jCb5Xq5Lnbs8QQ.webp',
    totalVotes: 0,
  },
};

function DonationCard() {
  return (
    <div class="w-[282px]">
      <div class="w-full h-[282px] relative overflow-hidden flex items-center justify-center rounded-t-lg">
        <img
          class="object-contain"
          src={donation.idol.profilePicture}
          alt={donation.idol.name}
        />
        <div class="w-full h-1/3 absolute bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div class="w-full h-[97px] bg-black">
        <ul>
          <li class="font-pretendard text-[16px] font-regular text-silverGray">
            {donation.subtitle}
          </li>
          <li class="font-pretendard font-medium text-[18px] text-white">{`${donation.idol.group} ${donation.idol.name} ${donation.title}`}</li>
        </ul>
      </div>
    </div>
  );
}

export default DonationCard;
