const IdolSection = ({ idol }) => {
  const { profilePicture, name, rank, group, totalVotes } = idol;

  return (
    <div className="flex items-center justify-between w-full text-[14px] pc:text-[16px] leading-[16.71px] pc:leading-[19.09px]">
      <div className="flex items-center gap-[12px] font-medium">
        <img
          src={profilePicture}
          alt={name}
          className="item-center w-[60px] h-[60px] rounded-[60px]"
        />
        <h4 className="text-coralRed">{rank}</h4>
        <p className="text-white/[0.87]">
          {group} {name}
        </p>
      </div>
      <div className="font-normal text-white/60">{totalVotes}표</div>
    </div>
  );
};

export default IdolSection;
