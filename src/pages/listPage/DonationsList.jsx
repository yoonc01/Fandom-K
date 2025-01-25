import DonationCard from '@/pages/listPage/DonationCard';
import prevIcon from '@/assets/icons/prevIcon.svg';
import nextIcon from '@/assets/icons/nextIcon.svg';

function DonationsList() {
  return (
    <div>
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
              <li>
                <DonationCard />
              </li>
              <li>
                <DonationCard />
              </li>
              <li>
                <DonationCard />
              </li>
              <li>
                <DonationCard />
              </li>
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
    </div>
  );
}

export default DonationsList;
