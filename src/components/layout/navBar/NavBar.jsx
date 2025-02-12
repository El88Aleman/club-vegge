import { MdSpaceDashboard } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./NavBar.css";
import "../../global/Global.css";
import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import UseIntersectionObserver from "../../useIntersectionObserver/UseIntersectionObserver";

const NavBar = () => {
  const { user, getTotalOrders } = useContext(AuthContext);
  const rolAdmin = import.meta.env.VITE_ROL_ADMIN;
  const totalOrders = getTotalOrders();
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div ref={setRef(0)} data-id="navBar">
      <div
        className={`navContainer ${
          visibleElements.navBar ? "visible" : "hidden"
        }`}
      >
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1739043306/Club%20Vegge/shrkwvazxk6yo9r0sjdt.png"
            alt="club vegge"
            height="225px"
            width="225px"
            className="imgHomeClubVegge"
          />
        </Link>
        <div className="iconsNav">
          {user?.rol === rolAdmin && (
            <Link to={"/dashboard"}>
              <MdSpaceDashboard
                color="#369a63"
                style={{ margin: "5px" }}
                size={25}
              />
            </Link>
          )}
          <Link to="/userOrders">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#a8f0c8",
                  color: "#369a63",
                },
              }}
              badgeContent={totalOrders}
              color="primary"
            >
              <FaBagShopping size={25} color="#369a63" />
            </Badge>
          </Link>
        </div>
      </div>
      <div className="fixedIcons arrow-up" onClick={scrollToTop}>
        <div className="fixedIconContainer ">
          <FaArrowUpLong size={25} color="#369a63" />
        </div>
      </div>
      <div className="fixedIcons whatsapp">
        <div className="fixedIconContainer ">
          <a
            href="https://api.whatsapp.com/send?phone=+3424486975&text=Hola%20Club%20Vegge!%20Necesito%20ayuda%20con.."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp size={25} color="#369a63" />
          </a>
        </div>
      </div>
      <div className="fixedIcons cart-widget">
        <div className="fixedIconContainer">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
