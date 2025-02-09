import React from 'react';
import '@/components/FadeInDiv.css';

const FadeInDiv = ({
  triggered = true,
  className,
  children,
  duration = '0.6s',
  delay = '0.2s',
}) => {
  const style = triggered
    ? {
        animation: `fadeIn ${duration} ease-out ${delay} forwards`,
      }
    : null;

  return (
    <div className={`opacity-0 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default FadeInDiv;
