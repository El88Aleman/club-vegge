import { useContext, useEffect } from "react";
import "./UserOrders.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Timestamp } from "firebase/firestore";
const UserOrders = () => {
  const { myOrders, fetchOrders, deleteOrderById } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.email) {
      fetchOrders();
    }
  }, [user.email]);

  useEffect(() => {
    if (myOrders.length === 0) {
      navigate("/home");
    }
  }, [myOrders, navigate]);

  const handleDeleteOrder = async (orderId) => {
    await deleteOrderById(orderId);
  };
  return (
    <div className="orders-container">
      <p className="titleOrders">Mis Órdenes</p>
      {myOrders.length > 0 ? (
        myOrders.map((order) => (
          <div key={order.id} className="order-card">
            <p>
              <strong>Total:</strong> ${order.total}
            </p>
            <p>
              <strong>Método de Pago:</strong> {order.paymentMethod}
            </p>
            <p>
              <strong>Fecha:</strong>{" "}
              {order.date instanceof Timestamp
                ? order.date.toDate().toLocaleString()
                : new Date(order.date).toLocaleString()}
            </p>
            <div className="products-container">
              <p className="products-title">Productos:</p>
              {order.items.map((item, index) => (
                <div key={index} className="product-item">
                  <p>
                    <strong>Producto:</strong> {item.title}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {item.quantity} Kg
                  </p>
                  <p>
                    <strong>Precio Unitario:</strong> ${item.unit_price}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteOrder(order.id)}
            >
              Eliminar
            </button>
            <Link to="/home" className="linkButton">
              Volver al Inicio
            </Link>
            <hr />
          </div>
        ))
      ) : (
        <p>No tienes órdenes.</p>
      )}
    </div>
  );
};

export default UserOrders;
