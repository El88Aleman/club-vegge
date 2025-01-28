import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutesUser = () => {
  const { isLogged } = useContext(AuthContext);
  return <>{isLogged ? <Outlet /> : <Navigate to="/login>" />}</>;
};

export default ProtectedRoutesUser;
