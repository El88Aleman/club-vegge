import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebaseConfig";

const ProductsForm = ({
  handleClose,
  setIsChange,
  productSelected,
  setProductSelected,
}) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    unit_price: 0,
    stock: 0,
    category: "",
    promo: "no",
  });
  const handleChange = (e) => {
    if (productSelected) {
      setProductSelected({
        ...productSelected,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const productsCollection = collection(db, "products");
    if (productSelected) {
      let obj = {
        ...productSelected,
        unit_price: +productSelected.unit_price,
        stock: +productSelected.stock,
      };
      updateDoc(doc(productsCollection, productSelected.id), obj).then(() => {
        setIsChange(true);
        handleClose();
      });
    } else {
      let obj = {
        ...newProduct,
        unit_price: +newProduct.unit_price,
        stock: +newProduct.stock,
      };
      addDoc(productsCollection, obj).then(() => {
        setIsChange(true);
        handleClose();
      });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          defaultValue={productSelected?.title}
          variant="outlined"
          name="title"
          className="inputField"
          onChange={handleChange}
          sx={{ minWidth: "70%", fontFamily: "Sansation-Light" }}
        />
        {(newProduct.category === "bolsones" ||
          productSelected?.category === "bolsones") && (
          <TextField
            id="outlined-basic"
            label="Descripción"
            defaultValue={productSelected?.description}
            variant="outlined"
            name="description"
            className="inputField"
            onChange={handleChange}
            sx={{ minWidth: "70%", fontFamily: "Sansation-Light" }}
          />
        )}
        <TextField
          id="outlined-basic"
          label="Precio"
          defaultValue={productSelected?.unit_price}
          variant="outlined"
          name="unit_price"
          className="inputField"
          onChange={handleChange}
          sx={{ minWidth: "70%", fontFamily: "Sansation-Light" }}
        />
        <TextField
          id="outlined-basic"
          label="Stock"
          defaultValue={productSelected?.stock}
          variant="outlined"
          name="stock"
          className="inputField"
          onChange={handleChange}
          sx={{ minWidth: "70%", fontFamily: "Sansation-Light" }}
        />
        <TextField
          id="outlined-basic"
          label="Categoria"
          defaultValue={productSelected?.category}
          variant="outlined"
          name="category"
          className="inputField"
          onChange={handleChange}
          sx={{ minWidth: "70%", fontFamily: "Sansation-Light" }}
        />
        <FormControl
          variant="outlined"
          className="inputField"
          sx={{ minWidth: "70%" }}
        >
          <InputLabel id="payment-method-label">Promocion</InputLabel>
          <Select
            labelId="promocion-label"
            id="promocion"
            name="promo"
            value={productSelected?.promo || newProduct.promo}
            onChange={handleChange}
            label="Promoción"
          >
            <MenuItem sx={{ fontFamily: "Sansation-light" }} value="si">
              Si
            </MenuItem>
            <MenuItem sx={{ fontFamily: "Sansation-light" }} value="no">
              No
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: "#369a63",
            fontFamily: "Sansation-light",
            "&:hover": {
              backgroundColor: "#2c7a4b",
            },
          }}
        >
          {productSelected ? "MODIFICAR" : "CREAR"}
        </Button>
      </form>
    </>
  );
};

export default ProductsForm;
