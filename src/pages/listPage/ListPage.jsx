import { useState } from 'react';
import Modal from '@/components/Modal';
import DonationsList from '@/pages/listPage/DonationsList';
import CreditSection from '@/pages/listPage/CreditSection';
import DonationModalContent from '@/pages/listPage/DonationModalContent';

function ListPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modalType) => {
    setCurrentModal(modalType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentModal(null);
  };

  const modalTypes = {
    donation: {
      title: '후원하기',
      content: <DonationModalContent />,
    },
  };

  return (
    <div className="bg-midnightBlack flex flex-col items-center">
      <CreditSection />
      <DonationsList onDonationClick={() => openModal('donation')} />

      {isModalOpen && currentModal && (
        <Modal title={modalTypes[currentModal].title} onClose={closeModal}>
          {modalTypes[currentModal].content}
        </Modal>
      )}
    </div>
  );
}

export default ListPage;
