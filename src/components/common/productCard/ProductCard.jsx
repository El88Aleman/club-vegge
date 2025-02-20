import UseIntersectionObserver from "../../useIntersectionObserver/UseIntersectionObserver";
import CounterContainer from "../counter/CounterContainer";

const promoStyle = {
  position: "absolute",
  top: "-10px",
  left: "-90px",
  backgroundColor: "#369a63",
  color: "white",
  padding: "40px",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "50%",
  zIndex: 1,
  fontFamily: "Sansation-Regular",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "40px",
  height: "40px",
};
const agotadoStyle = {
  position: "absolute",
  top: "-10px",
  left: "-90px",
  backgroundColor: "red",
  color: "white",
  padding: "40px",
  fontSize: "12px",
  fontWeight: "bold",
  borderRadius: "50%",
  zIndex: 1,
  fontFamily: "Sansation-Regular",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "40px",
  height: "40px",
};

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
      <div style={{ position: "relative" }}>
        {item.promo === "si" && <div style={promoStyle}>OFERTA SEMANAL</div>}
        {item.stock === 0 && <div style={agotadoStyle}>AGOTADO</div>}
        <img
          src={item.img}
          alt={item.title}
          height={item.height}
          width={item.width}
        />
      </div>
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
