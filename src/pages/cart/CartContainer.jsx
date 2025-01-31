import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import "../../components/global/Global.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, addToCart } =
    useContext(CartContext);
  const [counters, setCounters] = useState({});
  let total = getTotalPrice();
  const navigate = useNavigate();
  useEffect(() => {
    const initialCounters = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setCounters(initialCounters);
  }, [cart]);

  let limpiar = () => {
    Swal.fire({
      title: "Estas seguro de querer borrar todos los productos del carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, borrar todo",
      denyButtonText: `No, cancelar`,
      denyButtonColor: "#369a63",
      customClass: {
        title: "swal2-title-custom",
        htmlContainer: "swal2-text-custom",
        confirmButton: "swal2-confirm-button-custom",
        denyButton: "swal2-deny-button-custom",
      },
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito borrado exitosamente!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito queda como estaba!", "", "info");
      }
    });
  };

  const handleFormik = () => {
    if (total >= 2500) {
      navigate("/formik");
    } else {
      Swal.fire({
        title:
          "El total del carrito debe ser al menos $2500 para finalizar la compra.",
        icon: "warning",
        confirmButtonText: "OK",
        confirmButtonColor: "#369a63",
      });
    }
  };
  useEffect(() => {
    if (cart.length === 0) {
      navigate("/home");
    }
  }, [cart, navigate]);
  const handleAdd = (item) => {
    const newQuantity = counters[item.id] + 0.5;
    if (newQuantity <= item.stock) {
      setCounters({ ...counters, [item.id]: newQuantity });
      addToCart({ ...item, quantity: newQuantity });
    }
  };

  const handleRemove = (item) => {
    const newQuantity = counters[item.id] - 0.5;
    if (newQuantity >= 0.5) {
      setCounters({ ...counters, [item.id]: newQuantity });
      addToCart({ ...item, quantity: newQuantity });
    }
  };
  return (
    <>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cartContainerTarjet">
            <img src={elemento.img} height="70px" width="70px" alt="" />
            <p className="textoCheckOut">{elemento.title}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="buttonSumarRestar"
                disabled={counters[elemento.id] <= 0.5}
                onClick={() => handleRemove(elemento)}
              >
                <MdRemove size={15} />
              </button>
              <p className="textoCheckOut">{counters[elemento.id]} KG</p>
              <button
                className="buttonSumarRestar"
                disabled={counters[elemento.id] >= elemento.stock}
                onClick={() => handleAdd(elemento)}
              >
                <MdAdd size={15} />
              </button>
            </div>
            <p className="textoCheckOut">
              ${elemento.unit_price * counters[elemento.id]}
            </p>
            <button className="button" onClick={() => deleteById(elemento.id)}>
              ELIMINAR
            </button>
          </div>
        );
      })}

      <div className="containerButtonCarrito">
        {cart.length > 0 && (
          <>
            <p className="textoCheckOut">El total del carrito es: ${total}</p>
            <button className="button" onClick={limpiar}>
              LIMPIAR MI CARRITO
            </button>
            <button className="button" onClick={handleFormik}>
              TERMINAR COMPRA
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CartContainer;
