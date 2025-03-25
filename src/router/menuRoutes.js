import CartContainer from "../pages/cart/CartContainer";
import Formik from "../pages/formik/Formik";
import Home from "../pages/home/Home";
import ItemListContainer from "../pages/itemList/ItemListContainer";
import Transferencia from "../pages/metodosPago/transferencia/Transferencia";
import UserOrders from "../pages/userOrders/UserOrders";

export const menuRoutes = [
  {
    id: "home",
    path: "/home",
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
    id: "transferencia",
    path: "/transferencia",
    Element: Transferencia,
  },
  {
    id: "userOrders",
    path: "/userOrders",
    Element: UserOrders,
  },
];
