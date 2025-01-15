import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NavBar from "../components/layout/navBar/NavBar";
import { menuRoutes } from "./menuRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route element={<NavBar />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path={"*"} element={<h1>404-not found</h1>} />
    </Routes>
  );
};

export default AppRouter;
