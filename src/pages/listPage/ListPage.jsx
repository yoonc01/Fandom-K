import DonationsList from '@/pages/listPage/DonationsList';
import CreditSection from './CreditSection';

function ListPage() {
  return (
    <div class="bg-midnightBlack flex flex-col items-center">
      <CreditSection />
      <DonationsList />
    </div>
  );
}

export default ListPage;
