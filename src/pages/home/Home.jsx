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
          <strong> sin cargo de envio </strong> a partir de
          <strong> $2500</strong> 🚪🚀
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
              height="250px"
              width="250px"
              className="imgBolson"
            />
            <button className="button">COMPRAR BOLSON INDIVIDUAL</button>
          </div>
        </Link>
        <Link to="/category/verduras">
          <div className="containerVerduras">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1738086649/Club%20Vegge/cjnz1iazlmxtfmib1zib.png"
              alt="Verduras Individuales"
              height="100px"
              width="250px"
              className="imgVerduras"
            />
            <button className="button">COMPRAR VERDURAS</button>
          </div>
        </Link>
        <Link to="/category/paquetes">
          <div className="containerVerduras">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1739197899/Club%20Vegge/f5slvxhgf1psjq1pnxru.png"
              alt="Verduras Individuales"
              height="125px"
              width="250px"
              className="imgVerduras"
            />
            <button className="button">COMPRAR PAQUETES </button>
          </div>
        </Link>
        <Link to="/category/frutas">
          <div className="containerFrutas">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1738636495/Club%20Vegge/vovrr8flvmq415kndhy7.png"
              alt="Frutas Individuales"
              height="175px"
              width="250px"
              className="imgFrutas"
            />
            <button className="button">COMPRAR FRUTAS</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
