import { Route, Routes } from "react-router-dom";
import NavBar from "../components/layout/navBar/NavBar";
import { menuRoutes } from "./menuRoutes";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";
import ProtectedRoutesUser from "./ProtectedRoutesUser";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutesUser />}>
        <Route element={<NavBar />}>
          {menuRoutes.map(({ id, path, Element }) => (
            <Route key={id} path={path} element={<Element />} />
          ))}
        </Route>
      </Route>
      <Route element={<ProtectedRoutesAdmin />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path={"*"} element={<h1>404-not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
