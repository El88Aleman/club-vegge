import CartContainer from "../pages/cart/CartContainer";
import Formik from "../pages/formik/Formik";
import Home from "../pages/home/Home";
import ItemListContainer from "../pages/itemList/ItemListContainer";
import Login from "../pages/login/Login";
import Membresia from "../pages/membresia/Membresia";
import Transferencia from "../pages/metodosPago/transferencia/Transferencia";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "formik",
    path: "/formik",
    Element: Formik,
  },
  {
    id: "login",
    path: "/login",
    Element: Login,
  },
  {
    id: "transferencia",
    path: "/transferencia",
    Element: Transferencia,
  },
  {
    id: "membresia",
    path: "/membresia",
    Element: Membresia,
  },
];
