import IdolCard from '@/components/IdolCard';
import checkIcon from '@/assets/images/check.png';

const MonthlyChartItem = ({
  idol,
  rank,
  layout = 'default',
  children,
  selectedIdol,
}) => {
  const { name, group, totalVotes } = idol;

  return (
    <div className="flex items-center justify-between w-full text-[14px] pc:text-[16px] leading-[16.71px] pc:leading-[19.09px]">
      {layout === 'default' ? (
        <div className="flex w-full h-[70px] justify-between items-center">
          <div className="flex items-center gap-[12px] font-medium">
            <IdolCard
              idol={idol}
              isSelected={false}
              sizeClass="w-[70px] h-[70px]"
            />
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
            <div className="relative">
              <IdolCard
                idol={idol}
                isSelected={selectedIdol === idol.id}
                sizeClass="w-[70px] h-[70px]"
                isSelectable={false}
              />
              {selectedIdol === idol.id && (
                <div className="absolute inset-0 m-1.5 rounded-full overflow-hidden z-10">
                  <div className="w-full h-full bg-gradient-to-r from-coralRed to-pinkPunch opacity-50" />
                  <img
                    src={checkIcon}
                    alt="check"
                    className="absolute w-[16px] h-[16px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                  />
                </div>
              )}
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
