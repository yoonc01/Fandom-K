import closeButton from '@/assets/icons/closeButton.svg';
import leftTopGradient from '@/assets/images/leftTopGradient.png';
import exitArrow from '@/assets/icons/exitArrow.svg';
import { useEffect } from 'react';

function Modal({ title, onClose, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // 모달창 열려 있으면 뒤의 배경 스크롤 막기
    return () => {
      document.body.style.overflow = 'auto'; // 모달 닫힐 때 스크롤 허용
    };
  }, []);

  if (title.includes('아이돌') && window.innerWidth <= 375) {
    return (
      <div className="fixed top-0 left-0 size-full bg-midnightBlack">
        <img
          src={leftTopGradient}
          alt="leftTopGradient"
          className="absolute w-[200px] h-[272px] opacity-70 z-10 pointer-events-none"
        />
        <div className="fixed top-2 left-0 w-full h-screen font-pretendard mx-[24px]">
          <div className="w-full h-[44px] flex justify-start items-center">
            <img
              src={exitArrow}
              alt="exitArrow"
              className="w-[24px] cursor-pointer"
              onClick={onClose}
            />
            {title && (
              <div className="fixed top-[22px] left-1/2 -translate-x-1/2 justify-center items-center leading-[16.71px] text-[14px] font-medium text-softWhite mr-[14px]">
                {title}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100%] flex justify-center items-center bg-black/80 font-pretendard">
      <div className="relative bg-deepCharcoal p-[20px] rounded-[8px] py-[24px] px-[16px]">
        <img
          src={closeButton}
          alt="closeButton"
          className="absolute top-[28px] right-[20px] w-[14px] cursor-pointer"
          onClick={onClose}
        />
        {title && (
          <div className="px-[2px] w-full h-[24px] leading-[24px] text-[18px] font-semiBold text-softWhite">
            {title}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default Modal;
