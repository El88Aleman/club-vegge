import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import "../../components/global/Global.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdRemove } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import UseIntersectionObserver from "../../components/useIntersectionObserver/UseIntersectionObserver";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, addToCart } =
    useContext(CartContext);
  const [counters, setCounters] = useState({});
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  let total = getTotalPrice();
  const navigate = useNavigate();
  useEffect(() => {
    const initialCounters = cart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
    setCounters(initialCounters);
  }, [cart]);

  const getIncrement = (categoryName) => {
    return categoryName === "bolsones" || categoryName === "paquetes" ? 1 : 0.5;
  };

  const getUnit = (categoryName) => {
    return categoryName === "bolsones" || categoryName === "paquetes"
      ? ""
      : " KG";
  };

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
    const increment = getIncrement(item.categoryName);
    const newQuantity = counters[item.id] + increment;
    if (newQuantity <= item.stock) {
      setCounters({ ...counters, [item.id]: newQuantity });
      addToCart({ ...item, quantity: newQuantity });
    }
  };

  const handleRemove = (item) => {
    const increment = getIncrement(item.categoryName);
    const newQuantity = counters[item.id] - increment;
    if (newQuantity >= increment) {
      setCounters({ ...counters, [item.id]: newQuantity });
      addToCart({ ...item, quantity: newQuantity });
    }
  };
  return (
    <>
      {cart.map((elemento, index) => {
        const increment = getIncrement(elemento.categoryName);
        const unit = getUnit(elemento.categoryName);
        const scale = 2;
        const height = parseFloat(elemento.height);
        const width = parseFloat(elemento.width);
        const scaledHeight = height / scale;
        const scaledWidth = width / scale;
        return (
          <div
            key={elemento.id}
            ref={setRef(index)}
            data-id={`section${index}`}
            className={`cartContainerTarjet section ${
              visibleElements[`section${index}`] ? "visible" : "hidden"
            }`}
          >
            <img
              src={elemento.img}
              height={scaledHeight}
              width={scaledWidth}
              alt=""
            />
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
                disabled={counters[elemento.id] <= increment}
                onClick={() => handleRemove(elemento)}
              >
                <MdRemove size={15} />
              </button>
              <p className="textoCheckOut">
                {counters[elemento.id]} {unit}
              </p>
              <button
                className="buttonSumarRestar"
                disabled={counters[elemento.id] >= elemento.stock}
                onClick={() => handleAdd(elemento)}
              >
                <MdAdd size={15} />
              </button>
            </div>
            {elemento.description && (
              <p className="textoCheckOut">{elemento.description}</p>
            )}
            <p className="textoCheckOut">
              ${elemento.unit_price * counters[elemento.id]}
            </p>
            <button className="button" onClick={() => deleteById(elemento.id)}>
              ELIMINAR
            </button>
          </div>
        );
      })}

      <div
        ref={setRef(cart.length)}
        data-id={`section${cart.length}`}
        className={`containerButtonCarrito section ${
          visibleElements[`section${cart.length}`] ? "visible" : "hidden"
        }`}
      >
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
