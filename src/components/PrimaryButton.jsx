import React from 'react';

function PrimaryButton({ children, styles = '', onClickFunc = () => {} }) {
  const backgroundStyle =
    'bg-gradient-to-r from-[#F86F65] to-pinkPunch rounded-[3px]';
  return (
    <button className={backgroundStyle + ' ' + styles} onClick={onClickFunc}>
      {children}
    </button>
  );
}

export default React.memo(PrimaryButton);
