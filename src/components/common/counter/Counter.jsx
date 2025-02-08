import "../../global/Global.css";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";
const Counter = ({
  counter,
  agregarAlCarrito,
  stock,
  restar,
  sumar,
  unit_price,
  increment,
  unit,
}) => {
  return (
    <div className="containerButtonCarrito">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="buttonSumarRestar"
          disabled={counter <= increment}
          onClick={restar}
        >
          <MdRemove size={15} />
        </button>
        <p className="textoCheckOut">
          {counter} {unit}
        </p>
        <button
          className="buttonSumarRestar"
          disabled={counter >= stock}
          onClick={sumar}
        >
          <MdAdd size={15} />
        </button>
      </div>
      <p className="textoCheckOut">${unit_price * counter}</p>
      <button className="button" onClick={() => agregarAlCarrito(counter)}>
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default Counter;
