import { useEffect, useState } from "react";
import { products } from "../../components/productMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
    });
    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, []);
  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...items,
      quantity: cantidad,
    };
    console.log(data);
  };
  return <ItemList items={items} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemListContainer;
