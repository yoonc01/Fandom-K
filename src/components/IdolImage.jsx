import React, { useState, useEffect } from 'react';
import { fetchIdols } from '@/apis/idolApi';

function IdolImage({
  idolId,
  alt = '아이돌 프로필',
  className = '',
  size = 'size',
  borderColor = 'coralRed',
}) {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!idolId) {
      return;
    }

    const fetchImage = async () => {
      setLoading(true);
      try {
        const idols = await fetchIdols();
        const idolData = idols.find((idol) => idol.id === idolId);
      } catch (error) {
        console.error('이미지 로딩 실패:', error);
        setImageSrc(null);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [idolId]);

  const sizeClass = {
    size: 'w-[70px] h-[70px]',
  };

  if (loading) {
    return (
      <div
        className={`overflow-hidden rounded-full border-2 ${sizeClass[size]} ${className}`}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  if (!imageSrc) return null;

  return (
    <div
      className={`overflow-hidden rounded-full border-2 ${sizeClass[size]} ${className}`}
    >
      <img className="w-full h-full object-cover" src={imageSrc} alt={alt} />
    </div>
  );
}

export default React.memo(IdolImage);
