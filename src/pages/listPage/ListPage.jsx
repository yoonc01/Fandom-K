import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import CreditSection from '@/pages/listPage/CreditSection';
import { getCredits } from '@/utils/CreditStorage';
import RechgModalContent from '@/pages/listPage/RechgModalContent';
import CreditShortageModalContent from '@/pages/listPage/CreditShortageModalContent';
import DonationsList from '@/pages/listPage/DonationsList';
import DonationModalContent from '@/pages/listPage/DonationModalContent';
import MonthlyChart from '@/pages/listPage/MonthlyChart';
import leftTopGradient from '@/assets/images/leftTopGradient.png';

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [credits, setCredits] = useState(getCredits());

  useEffect(() => {
    setCredits(getCredits());
  }, []);

  const openModal = (modalType) => {
    setCurrentModal(modalType);
    setIsModalOpen(true);
  };

  const handleRechargeSuccess = (updatedCredits) => {
    setCredits(updatedCredits);
  };

  const modalTypes = {
    recharge: {
      title: '크레딧 충전하기',
      content: <RechgModalContent onRechargeSuccess={handleRechargeSuccess} />,
    },

    'NOT-ENOUGH': {
      title: '',
      content: <CreditShortageModalContent />,
    },

    donation: {
      title: '후원하기',
      content: <DonationModalContent />,
    },
  };

  const onCreditShortageClick = () => {
    setCurrentModal('NOT-ENOUGH');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-midnightBlack px-6 pc:px-0 relative">
      <img
        src={leftTopGradient}
        alt="leftTopGradient"
        className="absolute top-[-52px] left-[-112px] opacity-40 pointer-events-none"
      />
      <Header />
      <CreditSection
        onRechargeClick={() => openModal('recharge')}
        onCreditShortageClick={() => openModal('NOT-ENOUGH')}
        credits={credits}
      />
      <DonationsList onDonationClick={() => openModal('donation')} />
      <MonthlyChart />

      {isModalOpen && currentModal && (
        <Modal
          title={modalTypes[currentModal].title}
          onClose={() => setIsModalOpen(false)}
        >
          {modalTypes[currentModal].content}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
