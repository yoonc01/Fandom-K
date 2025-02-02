function MainSectionList({ headText, semiHeadText, imgData, backgroundImage }) {
  const { src, alt } = imgData;

  const getBackgroundClass = (name) =>
    ({
      mainSectionBackgroundImage1: 'bg-mainSectionBackgroundImage1',
      mainSectionBackgroundImage2: 'bg-mainSectionBackgroundImage2',
      mainSectionBackgroundImage3: 'bg-mainSectionBackgroundImage3',
    })[name] || '';

  return (
    <div className="relative flex flex-col items-center">
      {/* 배경 이미지 */}
      <div
        className={`z-0 absolute top-[90px] tablet:top-[45px] pc:top-[90px] w-[768px] h-[768px] pc:w-[900px] pc:h-[900px] bg-cover bg-center ${getBackgroundClass(backgroundImage)}`}
      >
        <div className="z-2 absolute inset-0 bg-radial-black"></div>
      </div>

      {/* 콘텐츠 */}
      <div className="flex flex-col z-10 mt-[60px] mb-[240px] items-center gap-4 text-center">
        <h2 className="text-[16px] leading-[20px] font-medium text-[#D2C030]">
          {headText}
        </h2>
        <h1 className="text-[24px] leading-[28px] font-bold whitespace-pre-line">
          {semiHeadText}
        </h1>
        <img
          src={src}
          alt={alt}
          className="mt-[60px] w-[240px] tablet:w-[200px] pc:w-[320px]"
        />
      </div>
    </div>
  );
}

export default MainSectionList;
