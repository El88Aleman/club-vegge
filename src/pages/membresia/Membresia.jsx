import "./Membresia.css";
import { FaWhatsapp } from "react-icons/fa";
const Membresia = () => {
  return (
    <div className="containerMembresia">
      <div>
        <h1 className="titleMembresia">
          Bienvenidos a la sección de membresía de Club Vegge 🌿
        </h1>
        <p className="parrafosMembresia">
          En Club Vegge, queremos que disfrutes de frutas y verduras frescas sin
          complicaciones. Por eso, hemos creado una membresía especial para que
          recibas cada semana un bolsón con productos de calidad directamente en
          la puerta de tu hogar
        </p>
      </div>
      <div>
        <h2 className="titleMembresia">🥕 ¿Cómo funciona?</h2>
        <p className="parrafosMembresia">
          ✅ <strong>Entrega semanal:</strong> Recibe un bolsón con frutas y
          verduras frescas una vez por semana
        </p>
        <p className="parrafosMembresia">
          ✅ <strong>Selección de calidad:</strong> Productos de temporada,
          frescos y listos para consumir
        </p>
        <p className="parrafosMembresia">
          ✅ <strong>Cuota mensual fija:</strong> Olvídate de preocuparte por
          compras diarias, con un solo pago mensual tienes garantizada tu
          entrega
        </p>
      </div>
      <div>
        <h2 className="titleMembresia">
          🎁 Beneficios exclusivos para miembros:
        </h2>
        <p className="parrafosMembresia">
          🍏 Descuentos especiales en productos adicionales
        </p>
        <p className="parrafosMembresia">
          🥑 Personalización del bolsón, elige tus favoritos según
          disponibilidad
        </p>
        <p className="parrafosMembresia">
          📦 Envío a domicilio sin complicaciones, disfruta sin moverte de casa
        </p>
      </div>
      <h2 className="titleMembresia">
        💚 Súmate a Club Vegge y lleva lo mejor de la naturaleza a tu mesa cada
        semana
      </h2>
      <a
        href="https://api.whatsapp.com/send?phone=+3424486975&text=Hola%20Club%20Vegge!%20Estoy%20interesado%20en%20la%20membres%C3%ADa%20mensual..."
        className="whatsappButton"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={25} style={{ marginRight: "5px" }} />
        Obtener membresia
      </a>
    </div>
  );
};

export default Membresia;
