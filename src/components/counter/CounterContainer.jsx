import Counter from "./Counter";
import useCounter from "../utils/useCounter";

const CounterContainer = ({ agregarAlCarrito, stock }) => {
  const { counter, sumar, restar } = useCounter(0.5, stock);
  return (
    <>
      <Counter
        counter={counter}
        sumar={sumar}
        restar={restar}
        agregarAlCarrito={agregarAlCarrito}
        stock={stock}
      />
    </>
  );
};

export default CounterContainer;
