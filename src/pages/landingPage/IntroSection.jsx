import fandomKLogo from '@/assets/icons/fandomKLogo.svg';
import idolImage from '@/assets/images/introSectionIdolImage.png';
import leftTopGradient from '@/assets/images/leftTopGradient.png';
import PrimaryButton from '@/components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { initCredits } from '@/utils/CreditStorage.js';

function IntroSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    initCredits();
    navigate('/list');
  };

  return (
    <div className="py-[140px] relative flex flex-col items-center w-full bg-midnightBlack text-softWhite font-pretendard">
      <img
        src={leftTopGradient}
        alt="leftTopGradient"
        className="absolute top-[-52px] left-[-112px] opacity-40 pointer-events-none"
      />
      <div className="z-10 text-center text-[26px] font-bold">
        내가 좋아하는 아이돌을 <br />
        가장 <span className="text-coralRed">쉽게 덕질</span> 하는 방법
      </div>
      <img
        src={fandomKLogo}
        alt="FandomKLogo"
        className="z-10 mt-[20px] w-[236px] tablet:w-[324px] pc:w-[512px] select-none"
      />
      <img
        src={idolImage}
        alt="idolImage"
        className="w-[392px] mt-[20px] h-auto opacity-70 top-[100px] tablet:w-[712px] pc:absolute pc:w-[932px] select-none"
      />
      <PrimaryButton
        styles={
          'z-10 mt-[40px] w-[230px] h-[48px] rounded-[3px] text-[14px] z-10 md:mt-[100px] md:w-[477px] lg:mt-[584px]'
        }
        onClickFunc={handleClick}
      >
        지금 시작하기
      </PrimaryButton>
    </div>
  );
}

export default IntroSection;
