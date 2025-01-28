import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useState } from "react";
import ProductsForm from "./ProductsForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ProductList = ({ products, setIsChange }) => {
  const [open, setOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const deleteProduct = (id) => {
    deleteDoc(doc(db, "products", id));
    setIsChange(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (product) => {
    setProductSelected(product);
    setOpen(true);
  };
  return (
    <div>
      <Button
        onClick={() => handleOpen(null)}
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
        AGREGAR NUEVO PRODUCTO
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Titulo</TableCell>
              <TableCell align="center">Precio</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="center">Imagen</TableCell>
              <TableCell align="center">Categoria</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{product.title}</TableCell>
                <TableCell align="center">{product.unit_price}</TableCell>
                <TableCell align="center">{product.stock}</TableCell>
                <TableCell align="center">
                  <img
                    src={product.img}
                    height={product.height}
                    width={product.width}
                    alt="imagen dashboard"
                  />
                </TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => handleOpen(product)}>
                    <MdEdit size={25} color="#369a63" />
                  </IconButton>
                  <IconButton onClick={() => deleteProduct(product.id)}>
                    <MdDeleteForever size={25} color="#369a63" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ProductsForm
            handleClose={handleClose}
            setIsChange={setIsChange}
            productSelected={productSelected}
            setProductSelected={setProductSelected}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ProductList;
