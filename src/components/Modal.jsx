import closeButton from '@/assets/icons/closeButton.svg';
import { useEffect } from 'react';

function Modal({ title, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달창 열려 있으면 뒤의 배경 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 허용
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-black/80">
      <div className="relative bg-deepCharcoal p-[20px] rounded-[8px] py-[24px] px-[16px]">
        <img
          src={closeButton}
          alt="closeButton"
          className="absolute top-[28px] right-[20px] w-[14px] cursor-pointer"
          onClick={onClose}
        />
        {title && (
          <div className="px-[2px] w-full h-[24px] leading-[24px] text-[18px] font-semiBold">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
