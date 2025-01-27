import React from 'react';
import ringImage from '@/assets/images/ring.png';

const ProfileCard = ({
  imageSize = '115px',
  ringSize = '128px',
  apiImageUrl = 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Fandom-K/idol/1737967782672/test.webp', // API 이미지 URL
}) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg">
      <div
        className="relative"
        style={{
          width: ringSize,
          height: ringSize,
        }}
      >
        <img
          src={ringImage}
          alt="Ring Decoration"
          className="absolute inset-0 object-cover rounded-full"
          style={{
            width: ringSize,
            height: ringSize,
          }}
        />

        <img
          src={apiImageUrl}
          alt="Idol Profile"
          className="absolute object-cover rounded-full"
          style={{
            width: imageSize,
            height: imageSize,
            top: `calc((${ringSize} - ${imageSize}) / 2)`,
            left: `calc((${ringSize} - ${imageSize}) / 2)`,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
