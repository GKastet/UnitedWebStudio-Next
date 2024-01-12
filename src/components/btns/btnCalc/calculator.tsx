"use client";

import { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };
  const handleDecrement = () => {
    setNumber(number - 1);
  };
  return (
    <>
      <div>Calculator</div>
      <p>{number}</p>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Calculator;
