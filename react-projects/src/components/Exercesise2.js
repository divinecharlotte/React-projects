import React from "react";

const Exercesise2 = (props) => {
  const handleClick = () => {
    alert(`clicked ${props.id}`);
  };
  return (
    <div
      id="Exercesise1"
      className="w-full h-[900px] flex justify-center items-center "
    >
      <button
        className="border border-gray-700 p-2 rounded"
        onClick={handleClick}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default Exercesise2;
