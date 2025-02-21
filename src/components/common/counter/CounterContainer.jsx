import Counter from "./Counter";
import useCounter from "../../utils/useCounter";

const CounterContainer = ({
  agregarAlCarrito,
  stock,
  unit_price,
  categoryName,
}) => {
  const initialQuantity =
    stock === 0
      ? 0
      : categoryName === "bolsones" ||
        categoryName === "paquetes" ||
        categoryName === "huevos"
      ? 1
      : 0.5;
  const { counter, sumar, restar, increment, unit } = useCounter(
    initialQuantity,
    stock,
    categoryName
  );
  return (
    <>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
        unit_price={unit_price}
        increment={increment}
        unit={unit}
      />
    </>
  );
};

export default CounterContainer;
