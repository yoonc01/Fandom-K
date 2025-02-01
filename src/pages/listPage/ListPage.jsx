import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import CreditSection from '@/pages/listPage/CreditSection';
import { getCredits } from '@/utils/creditStorage';
import RechargeModalContent from '@/pages/listPage/RechargeModalContent';
import CreditRechargeSuccess from '@/pages/listPage/CreditRechargeSuccess';
import CreditShortageModalContent from '@/pages/listPage/CreditShortageModalContent';
import DonationsList from '@/pages/listPage/DonationsList';
import DonationModalContent from '@/pages/listPage/DonationModalContent';
import MonthlyChart from '@/pages/listPage/MonthlyChart';
import leftTopGradient from '@/assets/images/leftTopGradient.png';

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(null);
  const [credits, setCredits] = useState(getCredits());
  const [selectedAmount, setSelectedAmount] = useState(null);

  const openModal = (step) => {
    setModalStep(step);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep(null);
    setSelectedAmount(null);
  };

  const handleRechargeSuccess = (amount) => {
    const updatedCredits = getCredits();
    setCredits(updatedCredits);
    setSelectedAmount(amount);
    setModalStep('creditRechargeSuccess');
  };

  const modalTitle = {
    creditRecharge: '크레딧 충전하기',
    creditRechargeSuccess: '',
    creditNotEnough: '',
    donation: '후원하기',
  }[modalStep];

  return (
    <div className="bg-midnightBlack px-6 pc:px-0 relative">
      <img
        src={leftTopGradient}
        alt="leftTopGradient"
        className="absolute top-[-52px] left-[-112px] opacity-40 pointer-events-none"
      />
      <Header />
      <CreditSection
        onRechargeClick={() => openModal('creditRecharge')}
        onCreditShortageClick={() => openModal('creditNotEnough')}
        credits={credits}
      />
      <DonationsList onDonationClick={() => openModal('donation')} />
      <MonthlyChart />

      {isModalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalStep === 'creditRecharge' && (
            <RechargeModalContent
              setModalStep={setModalStep}
              onRechargeSuccess={handleRechargeSuccess}
            />
          )}
          {modalStep === 'creditRechargeSuccess' && (
            <CreditRechargeSuccess
              amount={selectedAmount}
              onConfirm={closeModal}
            />
          )}
          {modalStep === 'creditNotEnough' && <CreditShortageModalContent />}
          {modalStep === 'donation' && <DonationModalContent />}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
