import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoutesAdmin = () => {
  const { user } = useContext(AuthContext);
  const rolAdmin = import.meta.env.VITE_ROL_ADMIN;
  return <>{user?.rol === rolAdmin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutesAdmin;
