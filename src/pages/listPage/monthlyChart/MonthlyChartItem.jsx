const MonthlyChartItem = ({ idol, rank, layout = 'default', children }) => {
  const { profilePicture, name, group, totalVotes } = idol;

  return (
    <div className="flex items-center justify-between w-full text-[14px] pc:text-[16px] leading-[16.71px] pc:leading-[19.09px]">
      {layout === 'default' ? (
        <div className="flex w-full h-[70px] justify-between items-center">
          <div className="flex items-center gap-[12px] font-medium">
            <div className="rounded-full border-[1px] border-coralRed">
              <div className="rounded-full border-[4px] border-midnightBlack">
                <img
                  src={profilePicture}
                  alt={name}
                  className="items-center w-[60px] h-[60px] rounded-full"
                />
              </div>
            </div>
            <h4 className="text-coralRed">{rank}</h4>
            <div className="flex justify-between w-max">
              <p className="text-white/[0.87]">
                {group} {name}
              </p>
            </div>
          </div>
          <div className="font-normal text-white/60">
            {totalVotes.toLocaleString()}표
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full py-[4px]">
          <div className="flex items-center justify-center gap-[12px] font-medium">
            <div className="rounded-full border-[1px] border-coralRed">
              <div className="rounded-full border-[4px] border-midnightBlack">
                <img
                  src={profilePicture}
                  alt={name}
                  className="items-center w-[60px] h-[60px] rounded-full"
                />
              </div>
            </div>
            <h4 className="text-coralRed">{rank}</h4>
            <div>
              <p className="text-white/[0.87]">
                {group} {name}
              </p>
              <div className="font-normal text-white/60 mt-[4px]">
                {totalVotes.toLocaleString()}표
              </div>
            </div>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default MonthlyChartItem;
