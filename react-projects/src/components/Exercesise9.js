import { React, useState, useEffect } from "react";
import Card from "./Card";
const Exercesise9 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((res) => res.json())
      .then((datas) => setData(datas));
  }, []);

  const singleCard = data.map((card) => {
    return (
      <Card
        key={card.id}
        img={card.avatar}
        name={card.username}
        paragraph={card.employment.title}
      />
    );
  });
  return (
    <div className="w-auto h-auto  flex  items-center justify-center  ">
      <div className="bg-blue-400 grid grid-cols-2 gap-3  p-5">
        {singleCard}
      </div>
    </div>
  );
};

export default Exercesise9;
