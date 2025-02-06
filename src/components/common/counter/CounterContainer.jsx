import Counter from "./Counter";
import useCounter from "../../utils/useCounter";

const CounterContainer = ({
  agregarAlCarrito,
  stock,
  unit_price,
  categoryName,
}) => {
  const increment =
    categoryName === "bolsones" || categoryName === "paquetes" ? 1 : 0.5;
  const initialQuantity = increment;
  const unit =
    categoryName === "bolsones" || categoryName === "paquetes" ? "" : " KG";
  const { counter, sumar, restar } = useCounter(
    initialQuantity,
    stock,
    increment
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
