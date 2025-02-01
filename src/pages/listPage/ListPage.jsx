import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import CreditSection from '@/pages/listPage/CreditSection';
import { getCredits } from '@/utils/CreditStorage';
import RechgModalContent from '@/pages/listPage/RechgModalContent';
import CreditRechgSuccess from '@/pages/listPage/CreditRechgSuccess';
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
  const [selectedItem, setSelectedItem] = useState(null); //

  useEffect(() => {
    setCredits(getCredits());
  }, []);

  const openModal = (step, item = null) => {
    setModalStep(step);
    setIsModalOpen(true);
    setSelectedItem(item); //
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep(null);
    setSelectedAmount(null);
  };

  const handleRechargeSuccess = (updatedCredits, amount) => {
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
      <DonationsList onDonationClick={(item) => openModal('donation', item)} />
      <MonthlyChart />

      {isModalOpen && (
        <Modal title={modalTitle} onClose={closeModal}>
          {modalStep === 'creditRecharge' && (
            <RechgModalContent
              setModalStep={setModalStep}
              onRechargeSuccess={handleRechargeSuccess}
            />
          )}
          {modalStep === 'creditRechargeSuccess' && (
            <CreditRechgSuccess
              amount={selectedAmount}
              onConfirm={closeModal}
            />
          )}
          {modalStep === 'creditNotEnough' && <CreditShortageModalContent />}
          {modalStep === 'donation' && (
            <DonationModalContent item={selectedItem} credits={credits} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
