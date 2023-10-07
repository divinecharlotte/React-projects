import React from "react";
import SingleAnimal from "./SingleAnimal";
import animals from "./animal";

const Exercesise6 = () => {
  const eachAnimal = animals.map((anim) => {
    return <SingleAnimal key={anim.id} img={anim.img} name={anim.name} />;
  });
  return (
    <div className="w-full h-[900px] flex flex-col items-center justify-center ">
      {eachAnimal}
    </div>
  );
};

export default Exercesise6;
