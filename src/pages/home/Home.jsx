import "./Home.css";
import "../../components/global/Global.css";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../../components/useIntersectionObserver/UseIntersectionObserver";

const Home = () => {
  const [visibleElements, setRef] = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={setRef(0)}
        data-id="burbuja"
        className={`burbujaChat ${
          visibleElements.burbuja ? "visible" : "hidden"
        }`}
      >
        <p className="textBurbuja">
          Somos <strong>CLUB VEGGE</strong>! Un emprendimiento que lleva lo
          mejor de frutas y verduras directamente a la puerta de su casa
          <strong> sin cargo de envio </strong> a partir de
          <strong> $2500</strong> 🚪🚀
        </p>
        <div className="pinche"></div>
      </div>
      <div
        ref={setRef(1)}
        data-id="membresia"
        className={`containerMembresia ${
          visibleElements.membresia ? "visible" : "hidden"
        }`}
      >
        <p className="textMembresia">
          Ofrecemos una <strong>Membresia Mensual</strong>! Haz click para
          obtener mas informacion sobre este beneficio
        </p>
        <Link to="/membresia">
          <button className="button">MEMBRESIA MENSUAL</button>
        </Link>
      </div>
      <div
        ref={setRef(2)}
        data-id="compras"
        className={`containerCompras ${
          visibleElements.compras ? "visible" : "hidden"
        }`}
      >
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
          <div
            ref={setRef(3)}
            data-id="verduras"
            className={`containerVerduras ${
              visibleElements.verduras ? "visible" : "hidden"
            }`}
          >
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
          <div
            ref={setRef(4)}
            data-id="paquetes"
            className={`containerVerduras ${
              visibleElements.paquetes ? "visible" : "hidden"
            }`}
          >
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
          <div
            ref={setRef(5)}
            data-id="frutas"
            className={`containerFrutas ${
              visibleElements.frutas ? "visible" : "hidden"
            }`}
          >
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
