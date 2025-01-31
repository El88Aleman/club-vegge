import { FaRegCopyright } from "react-icons/fa6";
import FyB from "../../../assets/fotos/FyB.gif";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="containerFooter">
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737812866/Club%20Vegge/Club_Vegge_fbicie.png"
          alt=""
          height="125px"
          width="125px"
        />
        <div className="containerCopyright">
          <FaRegCopyright size={25} />
          <p className="copyright">opyrigth 2025</p>
        </div>
        <p className="desarrolladoPor">Desarrollado por</p>
        <img src={FyB} height="100px" width="100px" />
      </div>
    </>
  );
};

export default Footer;
