import { Link } from 'react-router-dom';
import PrimaryButton from '@/components/PrimaryButton';

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-midnightBlack font-pretendard">
      <div className="font-bold text-[50px] bg-gradient-to-r from-coralRed to-pinkPunch bg-clip-text text-transparent">
        404
      </div>
      <div className="font-bold text-[24px] text-white">
        페이지를 찾을 수 없습니다.
      </div>
      <div className="font-regular text-[20px] text-white">
        죄송합니다. 존재하지 않는 페이지입니다.
      </div>

      <Link to="/">
        <PrimaryButton
          className={
            'w-[125px] h-[40px] mt-[20px] font-bold text-[14px] text-white'
          }
        >
          홈으로 이동
        </PrimaryButton>
      </Link>
    </div>
  );
}

export default NotFoundPage;
