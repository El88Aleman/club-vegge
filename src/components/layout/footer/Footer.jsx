import { FaRegCopyright } from "react-icons/fa6";
import FyB from "../../../assets/fotos/FyB.gif";
import "./Footer.css";
import UseIntersectionObserver from "../../useIntersectionObserver/UseIntersectionObserver";

const Footer = () => {
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <>
      <div
        ref={setRef(0)}
        data-id="footer"
        className={`containerFooter ${
          visibleElements.footer ? "visible" : "hidden"
        }`}
      >
        <img
          src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1739043306/Club%20Vegge/shrkwvazxk6yo9r0sjdt.png"
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
