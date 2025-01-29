import fandomKLogo from '@/assets/icons/fandomKLogo.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    window.location.reload();
  };

  const handleProfileClick = () => {
    navigate('/mypage');
  };

  return (
    <div className="flex items-center justify-between h-[44px] tablet:h-[80px] mx-auto  w-full pc:w-[1200px]">
      <div></div>
      <img
        src={fandomKLogo}
        alt="FandomKLogo"
        className="cursor-pointer w-[108px] tablet:w-[120px] pc:w-[168px] select-none"
        onClick={handleLogoClick}
      />
      <div
        className="cursor-pointer w-[32px] h-[32px] rounded-[16px] overflow-hidden"
        onClick={handleProfileClick}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZvokC7HZwJaR1QYZ4mSQdlqXbpMk8Z4w3QRukXJ0-qAIOaDGtpOIeGK0oqn-KBEQ3hkWoWGzJqGl2mh26z4SsA"
          alt="parkboyoung"
          className="cursor-pointer w-[100px] h-[50px] object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
