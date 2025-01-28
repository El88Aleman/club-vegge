import { MdSpaceDashboard } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import "./NavBar.css";
import "../../global/Global.css";
import { Link, Outlet } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const NavBar = () => {
  const { user, getTotalOrders } = useContext(AuthContext);
  const rolAdmin = import.meta.env.VITE_ROL_ADMIN;
  const totalOrders = getTotalOrders();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="navContainer">
        <Link to="/home">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737812866/Club%20Vegge/Club_Vegge_fbicie.png"
            alt="club vegge"
            height="150px"
            width="150px"
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
      <div className="fixedIcons" onClick={scrollToTop}>
        <div className="fixedIconContainer arrow-up">
          <FaArrowUpLong size={25} color="#369a63" />
        </div>
      </div>
      <div className="fixedIcons cart-widget">
        <div className="fixedIconContainer">
          <CartWidget />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
