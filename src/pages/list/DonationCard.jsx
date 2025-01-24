const donation = {
  id: 572,
  idolId: 1186,
  title: '민지야 생일 축하해',
  subtitle: '강남역 광고',
  targetDonation: 100000,
  receivedDonations: 0,
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
    <>
      <div>
        <img src={donation.idol.profilePicture} alt={donation.idol.name} />
      </div>
      <div>
        <ul>
          <li>{}</li>
        </ul>
      </div>
    </>
  );
}

export default DonationCard;
