import "./Home.css";
import "../../components/global/Global.css";
import "../../components/global/Global.css";
import { BsPersonFillAdd } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartWidget from "../../components/common/cartWidget/CartWidget";

const Home = () => {
  return (
    <div>
      <div className="containerFirst">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735256424/Club%20Vegge/iwtctrnzsuuhjkodw4fq.png"
          alt="club vegge"
          height="150px"
          width="150px"
          className="imgHomeClubVegge"
        />
        <div className="iconsHome">
          <Link to={"/login"}>
            <BsPersonFillAdd
              size={25}
              color="#369a63"
              style={{ margin: "5px" }}
            />
          </Link>
          <CartWidget />
        </div>
      </div>
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
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566961/Club%20Vegge/na4rjc5j7jje0cxmartv.png"
              alt="Bolson de Membresia"
              height="300px"
              width="250px"
            />
            <button className="button">COMPRAR BOLSON INDIVIDUAL</button>
          </div>
        </Link>
        <Link to="/category/verduras">
          <div className="containerVerduras">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566961/Club%20Vegge/s0gqjmi0cskwg1u98csc.jpg"
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
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566960/Club%20Vegge/v6gff8cjfoc5ctkjr9uo.jpg"
              alt="Frutas Individuales"
              height="250px"
              width="300px"
            />
            <button className="button">COMPRAR FRUTAS</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
