import { useEffect, useState } from "react";

const useCounter = (initial = 0, maximo, categoryName) => {
  const [counter, setCounter] = useState(initial);
  const [increment, setIncrement] = useState(0.5);
  const [unit, setUnit] = useState(" KG");
  useEffect(() => {
    if (
      categoryName === "bolsones" ||
      categoryName === "paquetes" ||
      categoryName === "huevos"
    ) {
      setIncrement(1);
      setUnit("");
    } else {
      setIncrement(0.5);
      setUnit(" KG");
    }
  }, [categoryName]);
  const sumar = () => {
    counter < maximo && setCounter(counter + increment);
  };
  const restar = () => {
    counter > initial && setCounter(counter - increment);
  };
  const resetear = () => {
    setCounter(initial);
  };
  return { counter, sumar, restar, resetear, increment, unit };
};

export default useCounter;
