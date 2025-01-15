import "./ItemList.css";
import "../../components/global/Global.css";
import ProductCard from "../../components/common/productCard/ProductCard";
import { Skeleton, Stack } from "@mui/material";
const ItemList = ({ items, agregarAlCarrito, getQuantityById }) => {
  let arr = [1, 2, 3, 4];
  return (
    <>
      {items.length > 0
        ? items.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              agregarAlCarrito={agregarAlCarrito}
              getQuantityById={getQuantityById}
            />
          ))
        : arr.map((elemento) => (
            <div className="skeletonContainer" key={elemento}>
              <Stack spacing={2}>
                <Skeleton variant="circular" width={200} height={200} />
                <Skeleton variant="rounded" width={200} height={50} />
                <Skeleton variant="rounded" width={200} height={50} />
                <Skeleton variant="rounded" width={200} height={50} />
              </Stack>
            </div>
          ))}
    </>
  );
};

export default ItemList;
