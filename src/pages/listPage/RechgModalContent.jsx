import PrimaryButton from '../../components/PrimaryButton';

export default function RechgModalContent() {
  return (
    <form className="w-[295px] h-fit flex flex-col gap-[8px]">
      <div
        className="bg-[#02000E] w-full h-[62px] border-2 rounded-lg pl-[15px] pr-[20px] flex items-center justify-between cursor-pointer border-[#F7F7F8] hover:border-[#F96D69] focus:border-[#F96D69] mt-[24px]"
        onClick={(e) => e.currentTarget.querySelector('input').click()}
      >
        <div className="w-[216px] h-[26px] flex items-center justify-start gap-[2px]">
          <div className="w-[20px] h-[30px] bg-[url(@/assets/icons/credit.svg)] bg-contain bg-no-repeat bg-center" />
          <label className="font-pretendard text-white text-[20px] font-bold">
            100
          </label>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            name="selectAmount"
            className="peer appearance-none w-[16px] h-[16px] rounded-full border-[2px] bg-gray-100 border-gray-300 hover:border-[#F96D69]"
          />
          <div className="absolute w-2 h-2 rounded-full bg-[#F96D69] scale-0 peer-checked:scale-100 transition-transform" />
        </div>
      </div>

      <div
        className="bg-[#02000E] w-full h-[62px] border-2 rounded-lg pl-[15px] pr-[20px] flex items-center justify-between cursor-pointer border-[#F7F7F8] hover:border-[#F96D69] focus:border-[#F96D69]"
        onClick={(e) => e.currentTarget.querySelector('input').click()}
      >
        <div className="w-[216px] h-[26px] flex items-center justify-start gap-[2px]">
          <div className="w-[20px] h-[30px] bg-[url(@/assets/icons/credit.svg)] bg-contain bg-no-repeat bg-center" />
          <label className="font-pretendard text-white text-[20px] font-bold">
            500
          </label>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            name="selectAmount"
            className="peer appearance-none w-[16px] h-[16px] rounded-full border-[2px] bg-gray-100 border-gray-300 hover:border-[#F96D69]"
          />
          <div className="absolute w-2 h-2 rounded-full bg-[#F96D69] scale-0 peer-checked:scale-100 transition-transform" />
        </div>
      </div>

      <div
        className="bg-[#02000E] w-full h-[62px] border-2 rounded-lg pl-[15px] pr-[20px] flex items-center justify-between cursor-pointer border-[#F7F7F8] hover:border-[#F96D69] focus:border-[#F96D69]"
        onClick={(e) => e.currentTarget.querySelector('input').click()}
      >
        <div className="w-[216px] h-[26px] flex items-center justify-start gap-[2px]">
          <div className="w-[20px] h-[30px] bg-[url(@/assets/icons/credit.svg)] bg-contain bg-no-repeat bg-center" />
          <label className="font-pretendard text-white text-[20px] font-bold">
            1000
          </label>
        </div>
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            name="selectAmount"
            className="peer appearance-none w-[16px] h-[16px] rounded-full border-[2px] bg-gray-100 border-gray-300 hover:border-[#F96D69]"
          />
          <div className="absolute w-2 h-2 rounded-full bg-[#F96D69] scale-0 peer-checked:scale-100 transition-transform" />
        </div>
      </div>

      <PrimaryButton styles="flex items-center justify-center w-[295px] h-[42px] hover:border-2 hover:border-pinkPunch">
        <div className="w-[75px] h-[26px] bg-[url(@/assets/icons/creditWhite.svg)] bg-no-repeat text-[14px] text-white font-pretendard font-bold flex items-center justify-end pr-[5px]">
          <p>충전하기</p>
        </div>
      </PrimaryButton>
    </form>
  );
}
