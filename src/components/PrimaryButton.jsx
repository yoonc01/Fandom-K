import React from 'react';

function PrimaryButton({
  children,
  className = '',
  onClickFunc = () => {},
  disabled = false,
}) {
  const buttonClass = `bg-gradient-to-r from-[#F86F65] to-pinkPunch rounded-[3px] ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`;

  return (
    <button
      className={buttonClass}
      onClick={disabled ? undefined : onClickFunc}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default React.memo(PrimaryButton);
