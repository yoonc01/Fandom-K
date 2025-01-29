import React from 'react';
import ringImage from '@/assets/images/ring.png';

const ProfileCard = ({
  imageSize = '115px',
  ringSize = '128px',
  apiImageUrl = '',
}) => {
  const defaultImage = 'https://link24.kr/9iFIhh0';

  return (
    <div className=" bg-midnightBlack p-6  ">
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
          src={apiImageUrl ? apiImageUrl : defaultImage}
          alt=" "
          className="absolute object-cover rounded-full "
          style={{
            width: imageSize,
            height: imageSize,
            top: `calc((${ringSize} - ${imageSize}) / 2)`,
            left: `calc((${ringSize} - ${imageSize}) / 2)`,
            color: 'white',
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
