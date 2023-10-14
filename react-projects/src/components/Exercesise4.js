import { React, useState } from "react";

const Exercesise4 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  return (
    <div
      id="Exercesise1"
      className="w-full h-[900px] flex flex-col justify-center items-center "
    >
      <h1>button has been clicked {count}times</h1>
      <button
        className="border border-gray-700 p-2 rounded"
        onClick={handleClick}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default Exercesise4;
