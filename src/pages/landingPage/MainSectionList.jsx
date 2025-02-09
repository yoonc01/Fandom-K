import FadeInDiv from '@/components/FadeInDiv';
import { useState, useRef, useEffect } from 'react';

function MainSectionList({ headText, semiHeadText, imgData, backgroundImage }) {
  const { src, alt } = imgData;

  const getBackgroundClass = (name) =>
    ({
      mainSectionBackgroundImage1: 'bg-mainSectionBackgroundImage1',
      mainSectionBackgroundImage2: 'bg-mainSectionBackgroundImage2',
      mainSectionBackgroundImage3: 'bg-mainSectionBackgroundImage3',
    })[name] || '';

  const targetRef = useRef(null); // 관찰할 DOM 요소
  const [triggered, setTriggered] = useState(false); // 트리거 상태 관리

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true); // 트리거 상태를 true로 변경
          observer.disconnect(); // 한 번 실행 후 옵저버 정지
        }
      },
      {
        root: null, // 뷰포인트 기준 (null은 브라우저의 뷰포인트를 기준으로 함)
        threshold: 0.15, // 요소가 10%만 뷰포인트에 들어와도 트리거
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current); // 타겟 요소 관찰 시작
    }

    return () => {
      if (targetRef.current) {
        observer.disconnect(); // 컴포넌트 언마운트 시 옵저버 정지
      }
    };
  }, []);

  return (
    <div
      className="relative flex flex-col items-center overflow-hidden"
      ref={targetRef}
    >
      {/* 배경 이미지 */}
      <FadeInDiv
        triggered={triggered}
        className={`z-0 absolute top-[90px] tablet:top-[45px] pc:top-[90px] w-[768px] h-[768px] pc:w-[900px] pc:h-[900px] bg-cover bg-center ${getBackgroundClass(backgroundImage)}`}
      >
        <div className="z-2 absolute inset-0 bg-radial-black"></div>
      </FadeInDiv>
      {/* 콘텐츠 */}
      <div className="flex flex-col z-10 mt-[60px] mb-[120px] items-center gap-4 text-center">
        <FadeInDiv triggered={triggered} delay="0s">
          <h2 className="text-[16px] leading-[20px] font-medium text-[#D2C030]">
            {headText}
          </h2>
          <h1 className="text-[24px] leading-[28px] font-bold whitespace-pre-line">
            {semiHeadText}
          </h1>
        </FadeInDiv>
        <FadeInDiv
          triggered={triggered}
          className="mt-[60px] w-[240px] h-[520px] tablet:w-[200px] tablet:h-[432px] pc:w-[320px] pc:h-[692px]"
        >
          <img
            src={src}
            alt={alt}
            className="w-[240px] h-[520px] tablet:w-[200px] tablet:h-[432px] pc:w-[320px] pc:h-[692px]"
          />
        </FadeInDiv>
      </div>
    </div>
  );
}

export default MainSectionList;
