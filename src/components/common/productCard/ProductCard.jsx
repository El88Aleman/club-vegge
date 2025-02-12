import UseIntersectionObserver from "../../useIntersectionObserver/UseIntersectionObserver";
import CounterContainer from "../counter/CounterContainer";

const ProductCard = ({
  item,
  agregarAlCarrito,
  getQuantityById,
  categoryName,
}) => {
  const [visibleElements, setRef] = UseIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <div
      ref={setRef(0)}
      data-id="section1"
      className={`itemListContainer section ${
        visibleElements.section1 ? "visible" : "hidden"
      }`}
    >
      <img
        src={item.img}
        alt={item.title}
        height={item.height}
        width={item.width}
      />
      <p className="textoCheckOut">{item.title}</p>
      {item.description && <p className="textoCheckOut">{item.description}</p>}
      <CounterContainer
        stock={item.stock}
        agregarAlCarrito={(cantidad) => agregarAlCarrito(item, cantidad)}
        cantidadEnCarrito={getQuantityById(item.id)}
        unit_price={item.unit_price}
        categoryName={categoryName}
      />
    </div>
  );
};

export default ProductCard;
