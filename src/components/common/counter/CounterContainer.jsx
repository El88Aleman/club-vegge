import Counter from "./Counter";
import useCounter from "../../utils/useCounter";

const CounterContainer = ({
  agregarAlCarrito,
  stock,
  cantidadEnCarrito = 0.5,
  unit_price,
}) => {
  const { counter, sumar, restar } = useCounter(cantidadEnCarrito, stock);
  return (
    <>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
        unit_price={unit_price}
      />
    </>
  );
};

export default CounterContainer;
