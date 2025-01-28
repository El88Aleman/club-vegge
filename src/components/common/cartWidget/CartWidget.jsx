import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Badge from "@mui/material/Badge";
const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  let total = getTotalQuantity();
  return (
    <div>
      <Link to="/cart">
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#a8f0c8",
              color: "#369a63",
            },
          }}
          badgeContent={total}
        >
          <FaCartPlus size={25} color="#369a63" />
        </Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
