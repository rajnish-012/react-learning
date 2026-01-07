import React, { useState } from "react";

const AdvanceUseState = () => {
  const [num, setnum] = useState([10, 20, 30]);

  //to increase all element in array
  function increaseAll() {
    const updatenum = num.map((n) => n + 2);
    setnum(updatenum);
  }

  // to increase only second element in the array
  const increaseSecond = () => {
    setnum((prev) => prev.map((n, index) => (index === 1 ? n + 5 : n)));
  };

  // to add a new element in the array
  // with value to 5 more than its last element
  const addNum = () => {
    setnum((prev) => {
      const lastval = prev[prev.length - 1];
      return [...prev, lastval + 5];
    });
  };

  //to remove last element from the array
  const removeLast = () => {
    setnum((prev) => prev.slice(0, -1));
  };

  // to reset all element
  const resetArray = () => {
    setnum([10, 20, 30]);
  };

  return (
    <div className="app">
      <h1>Array state</h1>
      <h1>{num.join(", ")}</h1>
      <button className="btn" onClick={increaseAll}>
        Increase All
      </button>
      <button className="btn" onClick={increaseSecond}>
        Increase second
      </button>
      <button className="btn" onClick={addNum}>
        Add new{" "}
      </button>
      <button className="btn" onClick={removeLast}>
        remove last element
      </button>
      <button className="btn" onClick={resetArray}>
        reset Array
      </button>
    </div>
  );
};

export default AdvanceUseState;
