import React from "react";

const Fetchapi = () => {
  const getData = async () => {
    //Api call using fetch async await
    const responce = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await responce.json();
    console.log(data);
  };
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default Fetchapi;
