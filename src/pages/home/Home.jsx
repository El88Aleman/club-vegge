import "./Home.css";
import "../../components/global/Global.css";
import { FaCartPlus } from "react-icons/fa6";
import { BsPersonFillAdd } from "react-icons/bs";
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
          <BsPersonFillAdd
            size={25}
            color="#369a63"
            style={{ margin: "5px" }}
          />
          <FaCartPlus size={25} color="#369a63" style={{ margin: "5px" }} />
          <div className="count"></div>
        </div>
      </div>
      <div className="burbujaChat">
        <p className="textBurbuja">
          Somos <strong>CLUB VEGGE</strong>! Un emprendimiento que lleva lo
          mejor de frutas y verduras directamente a la puerta de su casa{" "}
          <strong>sin cargo de envio!</strong>🚪🚀 a partir de{" "}
          <strong>$3000</strong>
        </p>
        <div className="pinche"></div>
      </div>
      <div className="containerMembresia">
        <p className="textMembresia">
          Ofrecemos una <strong>Membresia Mensual</strong>! Haz click para
          obtener mas informacion sobre este beneficio
        </p>
        <button className="buttonComprar">MEMBRESIA MENSUAL</button>
      </div>
      <div className="containerCompras">
        <div className="containerBolson">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566961/Club%20Vegge/na4rjc5j7jje0cxmartv.png"
            alt="Bolson de Membresia"
            height="300px"
            width="250px"
          />
          <button className="buttonComprar">COMPRAR BOLSON INDIVIDUAL</button>
        </div>
        <div className="containerVerduras">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566961/Club%20Vegge/s0gqjmi0cskwg1u98csc.jpg"
            alt="Verduras Individuales"
            height="250px"
            width="300px"
          />
          <button className="buttonComprar">COMPRAR VERDURAS</button>
        </div>
        <div className="containerFrutas">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735566960/Club%20Vegge/v6gff8cjfoc5ctkjr9uo.jpg"
            alt="Frutas Individuales"
            height="250px"
            width="300px"
          />
          <button className="buttonComprar">COMPRAR FRUTAS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
