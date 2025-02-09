import IntroSection from '@/pages/landingPage/IntroSection.jsx';
import leftTopGradient from '@/assets/images/leftTopGradient.webp';
import phoneImage1 from '@/assets/images/mainSectionPhoneImage1.webp';
import phoneImage2 from '@/assets/images/mainSectionPhoneImage2.webp';
import phoneImage3 from '@/assets/images/mainSectionPhoneImage3.webp';
import MainSectionList from '@/pages/landingPage/MainSectionList';
import { useEffect } from 'react';

const sections = [
  {
    headText: '후원하기',
    semiHeadText: `좋아하는 아이돌에게\n쉽게 조공해 보세요`,
    imgData: { src: phoneImage1, alt: '후원하기' },
    backgroundImage: 'mainSectionBackgroundImage1',
  },
  {
    headText: '이달의 아티스트',
    semiHeadText: `내 아티스트에게 1등의\n영예를 선물하세요`,
    imgData: { src: phoneImage2, alt: '관심있는 아이돌' },
    backgroundImage: 'mainSectionBackgroundImage2',
  },
  {
    headText: '나만의 아티스트',
    semiHeadText: `좋아하는 아티스트들의\n소식을 모아보세요`,
    imgData: { src: phoneImage3, alt: '소식 모아보기' },
    backgroundImage: 'mainSectionBackgroundImage3',
  },
];

function LandingPage() {
  useEffect(() => {
    const handleRefresh = () => {
      window.scrollTo(0, 0); // 새로고침 시 페이지 상단으로 이동
    };

    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);
  return (
    <div className="bg-midnightBlack text-softWhite font-pretendard min-h-screen">
      <img
        src={leftTopGradient}
        alt="leftTopGradient"
        className="absolute w-[200px] h-[272px] opacity-70 z-10 pointer-events-none"
      />
      <IntroSection />
      {sections.map((section, index) => (
        <MainSectionList key={index} {...section} />
      ))}
    </div>
  );
}

export default LandingPage;
