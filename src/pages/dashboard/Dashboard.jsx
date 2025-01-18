import { Button } from "@mui/material";
import "./Dashboard.css";
import { logOut } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut(navigate);
  };

  return (
    <>
      <div className="navDashboard">
        <div className="buttonCerrar">
          <Button
            onClick={handleLogOut}
            variant="contained"
            color="primary"
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
          <img
            src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735256424/Club%20Vegge/iwtctrnzsuuhjkodw4fq.png"
            height="150"
            width="150px"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
