import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();
  const navigate = useNavigate();

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
      navigate("/");
    }
  }, [cart, navigate]);

  return (
    <>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id} className="cartContainerTarjet">
            <img src={elemento.img} height="70px" width="70px" alt="" />
            <p className="textoCheckOut">{elemento.title}</p>
            <p className="textoCheckOut">{elemento.quantity} Kg</p>
            <p className="textoCheckOut">${elemento.unit_price}</p>
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
