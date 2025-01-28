import { createContext, useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const AuthContext = createContext();

const AuthContextComponent = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || {}
  );
  const [isLogged, setIslogged] = useState(
    JSON.parse(localStorage.getItem("isLogged")) || false
  );
  const [myOrders, setMyOrders] = useState(
    JSON.parse(localStorage.getItem("myOrders")) || []
  );

  const handleLogin = (userLogged) => {
    setUser(userLogged);
    setIslogged(true);
    localStorage.setItem("userInfo", JSON.stringify(userLogged));
    localStorage.setItem("isLogged", JSON.stringify(true));
  };
  const logoutContext = () => {
    setUser({});
    setIslogged(false);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("isLogged");
  };

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("myOrders"));
    if (storedOrders) {
      setMyOrders(storedOrders);
    }
  }, []);
  const fetchOrders = async () => {
    try {
      const ordersCollection = collection(db, "orders");
      const ordersFiltered = query(
        ordersCollection,
        where("buyer.email", "==", user.email)
      );
      const querySnapshot = await getDocs(ordersFiltered);
      const newArr = querySnapshot.docs.map((order) => ({
        ...order.data(),
        id: order.id,
      }));
      setMyOrders(newArr);
      localStorage.setItem("myOrders", JSON.stringify(newArr));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteOrderById = async (orderId) => {
    try {
      await deleteDoc(doc(db, "orders", orderId));
      const updatedOrders = myOrders.filter((order) => order.id !== orderId);
      setMyOrders(updatedOrders);
      localStorage.setItem("myOrders", JSON.stringify(updatedOrders));
    } catch (error) {
      console.log(error);
    }
  };
  const getTotalOrders = () => {
    return myOrders.length;
  };

  let data = {
    user,
    isLogged,
    handleLogin,
    logoutContext,
    myOrders,
    fetchOrders,
    deleteOrderById,
    getTotalOrders,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthContextComponent;
