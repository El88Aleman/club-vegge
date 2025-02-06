import { useContext, useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import SearchResult from "../../components/searchResult/SearchResult";
import { collection, getDocs, query, where } from "firebase/firestore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ItemListContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { categoryName } = useParams();

  // Filtrado de productos
  useEffect(() => {
    const fetchData = async () => {
      try {
        let consulta;
        let productsCollection = collection(db, "products");
        if (categoryName) {
          consulta = query(
            productsCollection,
            where("category", "==", categoryName)
          );
        } else {
          consulta = productsCollection;
        }
        const res = await getDocs(consulta);
        let arrayProductos = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });
        setItems(arrayProductos);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchData();
  }, [categoryName]);

  let productosBuscados = items.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Agregar al carrito
  const agregarAlCarrito = (item, cantidad) => {
    let data = {
      ...item,
      quantity: cantidad,
    };
    addToCart(data);
    Toastify({
      text: "Producto agregado al carrito con exito!",
      duration: 2000,
      close: true, // Añade un botón de cierre
      gravity: "top", // Posición: "top" o "bottom"
      position: "right", // "left", "center" o "right"
      className: "custom-toast",
      style: {
        background: "#369a63",
        fontFamily: "Sansation-Light",
        borderRadius: "10px",
      },
    }).showToast();
  };

  return (
    <>
      <SearchResult searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ItemList
        items={productosBuscados}
        agregarAlCarrito={agregarAlCarrito}
        getQuantityById={getQuantityById}
        categoryName={categoryName}
      />
    </>
  );
};

export default ItemListContainer;
