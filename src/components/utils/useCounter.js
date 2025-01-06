import { useState } from "react";

const useCounter = (initial = 0, maximo) => {
  const [counter, setCounter] = useState(initial);
  const sumar = () => {
    counter < maximo && setCounter(counter + 0.5);
  };
  const restar = () => {
    counter > initial && setCounter(counter - 0.5);
  };
  const resetear = () => {
    setCounter(initial);
  };
  return { counter, sumar, restar, resetear };
};

export default useCounter;
