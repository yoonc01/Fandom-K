import IntroSection from '@/pages/LandingPage/IntroSection.jsx';
import leftTopGradient from '@/assets/images/leftTopGradient.png';

function LandingPage() {
  return (
    <>
      <img
        src={leftTopGradient}
        alt="leftTopGradient"
        className="absolute w-[200px] h-[272px] opacity-70 z-10 pointer-events-none"
      />
      <IntroSection />
    </>
  );
}

export default LandingPage;
