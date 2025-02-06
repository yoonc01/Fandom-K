import MonthlyChartItem from '@/pages/listPage/monthlyChart/MonthlyChartItem';

const MonthlyChartVoteList = ({ idols, selectedIdol, setSelectedIdol }) => {
  return (
    <div className="flex flex-col mt-[24px] mb-[40px]">
      {idols.map((idol, idx) => (
        <div key={idol.id} onClick={() => setSelectedIdol(idol.id)}>
          <MonthlyChartItem idol={idol} rank={idx + 1} layout="vote">
            <div className="relative flex items-center justify-center">
              <div
                className={`w-[16px] h-[16px] rounded-full border-[2px] bg-gray-100 border-gray-300 ${selectedIdol === idol.id ? 'border-coralRed' : ''} flex items-center justify-center`}
              >
                <div
                  className={`absolute w-2 h-2 rounded-full bg-coralRed transition-transform ${selectedIdol === idol.id ? 'scale-100' : 'scale-0'}`}
                />
              </div>
            </div>
          </MonthlyChartItem>
          <div className="w-full h-[1px] bg-white bg-opacity-10 my-[4px]"></div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyChartVoteList;
