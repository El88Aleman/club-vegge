import { FaArrowLeftLong } from "react-icons/fa6";
import "./NavBar.css";
import "../../global/Global.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="containerNavBar">
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            margin: "5px",
          }}
        >
          <FaArrowLeftLong size={25} color="#369a63" />
        </button>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735256424/Club%20Vegge/iwtctrnzsuuhjkodw4fq.png"
            alt="club vegge"
            height="150px"
            width="150px"
            className="imgHomeClubVegge"
          />
        </Link>
        <CartWidget style={{ margin: "5px" }} />
      </div>
      <Outlet />
    </>
  );
};

export default NavBar;
