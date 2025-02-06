import { Button } from "@mui/material";
import "./Dashboard.css";
import { db, logOut } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import ProductList from "./ProductList";
const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isChange, setIsChange] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut(navigate);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsChange(false);
    let productsCollection = collection(db, "products");
    getDocs(productsCollection).then((res) => {
      const newArr = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setProducts(newArr);
    });
  }, [isChange]);

  return (
    <>
      <div className="navDashboard">
        <div className="buttonCerrar">
          <Button
            onClick={handleLogOut}
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "#369a63",
              fontFamily: "Sansation-light",
              "&:hover": {
                backgroundColor: "#2c7a4b",
              },
            }}
          >
            Cerrar Sesión
          </Button>
        </div>
        <div className="imgClubVeggeDash">
          <Link to="/home">
            <img
              src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737812866/Club%20Vegge/Club_Vegge_fbicie.png"
              height="250px"
              width="250px"
              alt=""
            />
          </Link>
        </div>
      </div>
      <ProductList products={products} setIsChange={setIsChange} />
    </>
  );
};

export default Dashboard;
