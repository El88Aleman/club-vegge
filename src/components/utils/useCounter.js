import { useState } from "react";

const useCounter = (initial = 0, maximo, increment) => {
  const [counter, setCounter] = useState(initial);
  const sumar = () => {
    counter < maximo && setCounter(counter + increment);
  };
  const restar = () => {
    counter > initial && setCounter(counter - increment);
  };
  const resetear = () => {
    setCounter(initial);
  };
  return { counter, sumar, restar, resetear };
};

export default useCounter;
