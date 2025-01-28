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
const ProductList = ({ products }) => {
  const [open, setOpen] = useState(false);
  const editProduct = (id) => {};
  const deleteProduct = (id) => {
    deleteDoc(doc(db, "products", id));
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
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
              <TableCell align="right">Titulo</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Imagen</TableCell>
              <TableCell align="right">Categoria</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.title}
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.unit_price}
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.stock}
                </TableCell>
                <TableCell component="th" scope="row">
                  <img
                    src={product.img}
                    height={product.height}
                    width={product.width}
                    alt="imagen dashboard"
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  {product.category}
                </TableCell>
                <TableCell component="th" scope="row">
                  <IconButton onClick={() => editProduct(product.id)}>
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
          <ProductsForm />
        </Box>
      </Modal>
    </div>
  );
};

export default ProductList;
