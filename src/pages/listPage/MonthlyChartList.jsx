import { useEffect } from 'react';
import MonthlyChartItem from './MonthlyChartItem';

const MonthlyChartList = ({ idols }) => {
  if (!idols.length === 0) {
    return <div>데이터가 존재하지 않습니다.</div>;
  }

  return (
    <div className="w-full grid grid-cols-1 pc:grid-cols-2 gap-[8px] tablet:gap-[8px] pc:gap-[16px]">
      {idols.map((idol) => (
        <div key={idol.id} className="w-full">
          <MonthlyChartItem idol={idol} />
          <div className="w-full h-[1px] bg-white bg-opacity-10 mt-[8px] pc:mt-[16px]"></div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyChartList;
