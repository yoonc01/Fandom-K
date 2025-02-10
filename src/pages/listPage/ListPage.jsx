import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import CreditSection from '@/pages/listPage/credit/CreditSection';
import { getCredits } from '@/utils/creditStorage';
import RechargeModalContent from '@/components/modalContent/RechargeModalContent';
import CreditRechargeSuccess from '@/components/modalContent/CreditRechargeSuccess';
import CreditShortageModalContent from '@/components/modalContent/CreditShortageModalContent';
import DonationsList from '@/pages/listPage/donation/DonationsList';
import DonationModalContent from '@/components/modalContent/DonationModalContent';
import leftTopGradient from '@/assets/images/leftTopGradient.webp';
import DonationSuccess from '@/components/modalContent/DonationSuccess';
import MonthlyChartSection from '@/pages/listPage/monthlyChart/MonthlyChartSection';
import MonthlyChartVoteModal from '@/components/modalContent/MonthlyChartVoteModal';

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(null);
  const [credits, setCredits] = useState(getCredits());
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [gender, setGender] = useState('female');
  const [voteTrigger, setVoteTrigger] = useState(false);

  useEffect(() => {
    setCredits(getCredits());
  }, [modalStep]);

  const openModal = (step, item = null) => {
    setModalStep(step);
    setIsModalOpen(true);
    setSelectedItem(item);
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

  const handleDonationSuccess = (updatedCredits) => {
    setCredits(updatedCredits);
    setModalStep('DonationSuccess');
  };

  const modalTitle = {
    creditRecharge: '크레딧 충전하기',
    creditRechargeSuccess: '',
    creditNotEnough: '',
    donation: '후원하기',
    donationSuccess: '',
    vote: `이달의 ${gender === 'female' ? '여자' : '남자'} 아이돌`,
  }[modalStep];

  return (
    <div className="px-6 pc:px-0 relative">
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
      <DonationsList
        onDonationClick={(item) => openModal('donation', item)}
        credits={credits}
      />
      <MonthlyChartSection
        onClickVote={() => {
          openModal('vote');
        }}
        gender={gender}
        setGender={setGender}
        voteTrigger={voteTrigger}
        setVoteTrigger={setVoteTrigger}
      />

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
          {modalStep === 'creditNotEnough' && (
            <CreditShortageModalContent
              onClose={closeModal}
              setModalStep={setModalStep}
            />
          )}
          {modalStep === 'donation' && (
            <DonationModalContent
              item={selectedItem}
              credits={credits}
              setModalStep={setModalStep}
              onDonationSuccess={handleDonationSuccess}
            />
          )}
          {modalStep === 'donationSuccess' && (
            <DonationSuccess onConfirm={closeModal} />
          )}
          {modalStep === 'vote' && (
            <MonthlyChartVoteModal
              closeModal={closeModal}
              gender={gender}
              setModalStep={setModalStep}
              setVoteTrigger={setVoteTrigger}
            />
          )}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
