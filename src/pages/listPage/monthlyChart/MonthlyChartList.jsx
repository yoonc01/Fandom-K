import MonthlyChartItem from '@/pages/listPage/monthlyChart/MonthlyChartItem';

const MonthlyChartList = ({ idols }) => {
  return (
    <div className="w-full grid grid-cols-1 pc:grid-cols-2 gap-[8px] tablet:gap-[8px] pc:gap-[16px]">
      {idols.map((idol, idx) => (
        <div key={idol.id} className="w-full">
          <MonthlyChartItem idol={idol} rank={idx + 1} />
          <div className="w-full h-[1px] bg-white bg-opacity-10 mt-[8px] pc:mt-[16px]"></div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyChartList;
