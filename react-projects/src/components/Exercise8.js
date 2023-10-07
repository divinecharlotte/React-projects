import React from "react";
import Joke from "./Joke";
import DataEx8 from "./DataEx8";
const Exercise8 = () => {
  const oneJoke = DataEx8.map((joke) => {
    return <Joke key={joke.id} title={joke.setup} paragraph={joke.punchline} />;
  });
  return (
    <div className="w-auto h-[900px]  flex   items-center justify-center  ">
      <div className="bg-blue-400 flex  gap-3  p-5">{oneJoke}</div>
    </div>
  );
};

export default Exercise8;
