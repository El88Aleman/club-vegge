import "./Home.css";
import "../../components/global/Global.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="burbujaChat">
        <p className="textBurbuja">
          Somos <strong>CLUB VEGGE</strong>! Un emprendimiento que lleva lo
          mejor de frutas y verduras directamente a la puerta de su casa
          <strong>sin cargo de envio!</strong>🚪🚀 a partir de
          <strong> $2500</strong>
        </p>
        <div className="pinche"></div>
      </div>
      <div className="containerMembresia">
        <p className="textMembresia">
          Ofrecemos una <strong>Membresia Mensual</strong>! Haz click para
          obtener mas informacion sobre este beneficio
        </p>
        <Link to="/membresia">
          <button className="button">MEMBRESIA MENSUAL</button>
        </Link>
      </div>
      <div className="containerCompras">
        <Link to="/category/bolsones">
          <div className="containerBolson">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737937483/Club%20Vegge/u35yba0kcacq2wexlg9q.png"
              alt="Bolson de Membresia"
              height="300px"
              width="300px"
            />
            <button className="button">COMPRAR BOLSON INDIVIDUAL</button>
          </div>
        </Link>
        <Link to="/category/verduras">
          <div className="containerVerduras">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737937712/Club%20Vegge/rdqcgpd8fzlwvcp4k55u.png"
              alt="Verduras Individuales"
              height="250px"
              width="300px"
            />
            <button className="button">COMPRAR VERDURAS</button>
          </div>
        </Link>
        <Link to="/category/frutas">
          <div className="containerFrutas">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737937712/Club%20Vegge/rdqcgpd8fzlwvcp4k55u.png"
              alt="Frutas Individuales"
              height="250px"
              width="300px"
            />
            <button className="button">COMPRAR FRUTAS</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
