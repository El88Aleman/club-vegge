import ItemDetailContainer from "../itemDetail/ItemDetailContainer";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        <ItemDetailContainer key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ItemList;
