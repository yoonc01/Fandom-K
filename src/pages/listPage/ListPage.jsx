import DonationsList from '@/pages/listPage/DonationsList';
import CreditSection from './CreditSection';

function ListPage() {
  return (
    <div className="bg-midnightBlack">
    <div class="bg-midnightBlack flex flex-col items-center">
      <CreditSection />
      <DonationsList />
    </div>
  );
}

export default ListPage;
