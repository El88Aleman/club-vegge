const Counter = ({ counter, agregarAlCarrito, stock, restar, sumar }) => {
  return (
    <div>
      <button disabled={counter <= 0.5} onClick={restar}>
        -
      </button>
      <p>{counter} kg</p>
      <button disabled={counter >= stock} onClick={sumar}>
        +
      </button>
      <p>price</p>
      <button onClick={() => agregarAlCarrito(counter)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default Counter;
