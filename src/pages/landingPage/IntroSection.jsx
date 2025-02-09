import fandomKLogo from '@/assets/icons/fandomKLogo.svg';
import idolImage from '@/assets/images/introSectionIdolImage.webp';
import PrimaryButton from '@/components/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { setCredits } from '@/utils/creditStorage.js';
import FadeInDiv from '@/components/FadeInDiv';

function IntroSection() {
  const navigate = useNavigate();

  const handleClick = (doSetCredits) => {
    if (doSetCredits) setCredits(50);
    navigate('/list');
  };

  return (
    <div className="py-[120px] relative flex flex-col items-center w-full">
      <FadeInDiv className="z-10">
        <h1 className="text-center text-[26px] font-bold">
          내가 좋아하는 아이돌을 <br />
          가장 <span className="text-coralRed">쉽게 덕질</span> 하는 방법
        </h1>
      </FadeInDiv>
      <FadeInDiv className="z-10 cursor-pointer z-10 mt-[20px] w-[236px] h-[44px] tablet:w-[324px] tablet:h-[62px] pc:w-[512px] pc:h-[98px] select-none">
        <img
          src={fandomKLogo}
          alt="FandomKLogo"
          className="z-10 cursor-pointer z-10 mt-[20px] w-[236px] h-[44px] tablet:w-[324px] tablet:h-[62px] pc:w-[512px] pc:h-[98px]"
          onClick={() => {
            handleClick(false);
          }}
        />
      </FadeInDiv>
      <FadeInDiv className="w-[392px] mt-[20px] opacity-70 top-[100px] tablet:w-[712px] tablet:h-[596px] pc:absolute pc:w-[932px] pc:h-[780px] select-none">
        <img
          src={idolImage}
          alt="아이돌 사진"
          className="w-[392px] h-[328px] mt-[20px] opacity-70 top-[100px] tablet:w-[712px] tablet:h-[596px] pc:absolute pc:w-[932px] pc:h-[780px] select-none"
        />
      </FadeInDiv>
      <FadeInDiv delay="0.3s">
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
      </FadeInDiv>
    </div>
  );
}

export default IntroSection;
