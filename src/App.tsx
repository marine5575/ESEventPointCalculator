import ResultTable from "src/components/ResultTable";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";

const App = () => {
  const [goal, setGoal] = useState<string>();
  const [submitted, setSubmitted] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(true);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value.replace(/[^0-9]/g, "").slice(0, 10));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(Number(goal));
    setGoal("");
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    setGoal("3500000");
  };

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  return (
    <div className="mx-10 my-5 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">
          앙스타 포인트 일일 목표
        </h1>
        <div>최종 포인트 목표를 입력해주세요</div>
        <form onSubmit={onSubmit} className="mx-3 md:mx-10">
          <div
            className={`grid items-center grid-cols-4 mx-auto border-2 rounded-full md:max-w-sm ${
              isFocused ? "border-gray-400" : ""
            }`}
          >
            <input
              type="text"
              value={goal || ""}
              onChange={onChange}
              placeholder="3,500,000"
              className="col-span-3 px-6 py-4 leading-tight text-gray-700 border-gray-200 rounded-l-full focus:outline-none focus:border-gray-400"
              autoFocus
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <button className="w-full h-12 col-span-1 focus:outline-none md:h-12">
              확인
            </button>
          </div>
          <button
            className="p-2 mt-3 text-white bg-red-300 hover:bg-blue-300 rounded-3xl"
            onClick={onClick}
          >
            350만포
          </button>
        </form>
      </div>
      <hr className="max-w-5xl mx-auto my-5" />
      {submitted > 0 && <ResultTable goal={submitted} />}
    </div>
  );
};

export default App;
