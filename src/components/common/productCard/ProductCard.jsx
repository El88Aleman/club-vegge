import CounterContainer from "../counter/CounterContainer";

const ProductCard = ({ item, agregarAlCarrito, getQuantityById }) => {
  return (
    <div className="itemListContainer">
      <img
        src={item.img}
        alt={item.title}
        height={item.height}
        width={item.width}
      />
      <p className="textoCheckOut">{item.title}</p>
      <CounterContainer
        stock={item.stock}
        agregarAlCarrito={(cantidad) => agregarAlCarrito(item, cantidad)}
        cantidadEnCarrito={getQuantityById(item.id)}
        unit_price={item.unit_price}
      />
    </div>
  );
};

export default ProductCard;
