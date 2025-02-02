import fandomKLogo from '@/assets/icons/fandomKLogo.svg';
import idolImage from '@/assets/images/introSectionIdolImage.webp';
import PrimaryButton from '@/components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { initCredits } from '@/utils/creditStorage.js';

function IntroSection() {
  const navigate = useNavigate();

  const handleClick = (doInitCredits) => {
    if (doInitCredits) initCredits();
    navigate('/list');
  };

  return (
    <div className="py-[120px] relative flex flex-col items-center w-full min-h-screen">
      <h1 className="z-10 text-center text-[26px] font-bold">
        내가 좋아하는 아이돌을 <br />
        가장 <span className="text-coralRed">쉽게 덕질</span> 하는 방법
      </h1>
      <img
        src={fandomKLogo}
        alt="FandomKLogo"
        className="cursor-pointer z-10 mt-[20px] w-[236px] tablet:w-[324px] pc:w-[512px] select-none"
        onClick={() => {
          handleClick(false);
        }}
      />
      <img
        src={idolImage}
        alt="idolImage"
        className="w-[392px] mt-[20px] h-auto opacity-70 top-[100px] tablet:w-[712px] pc:absolute pc:w-[932px] select-none"
      />
      <PrimaryButton
        className={
          'mt-[40px] w-[230px] h-[48px] rounded-[3px] text-[14px] tablet:mt-[100px] tablet:w-[477px] pc:mt-[600px]'
        }
        onClickFunc={() => {
          handleClick(true);
        }}
      >
        지금 시작하기
      </PrimaryButton>
    </div>
  );
}

export default IntroSection;
