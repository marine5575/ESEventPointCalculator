import React from "react";

const weekOfDay = ["토", "일", "월", "화", "수", "목", "금"];

const ResultTable = ({ goal }: any) => {
  const perDay = Math.ceil(goal / 8.5);
  let accPoint = Math.ceil(perDay / 2);

  return (
    <>
      <div className="mb-2">
        <h3>목표: {goal.toLocaleString()} 포인트</h3>
        <div>하루: {perDay.toLocaleString()} 이상</div>
      </div>
      <div className="max-w-xs mx-auto border-2">
        {[...Array(9).keys()].map((val) => {
          const todayGoal = val ? (accPoint += perDay) : accPoint;

          return (
            <div
              key={`${weekOfDay[val % 7]}${val}`}
              className="grid grid-cols-2 border-[1px]"
            >
              <p className="bg-gray-50 dark:bg-gray-700">
                {weekOfDay[val % 7]}
              </p>
              <p>{todayGoal.toLocaleString()}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(ResultTable);
