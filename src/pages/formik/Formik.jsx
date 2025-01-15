import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./Formik.css";
import { useContext, useState } from "react";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Formik.css";
const Formik = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  let total = getTotalPrice();
  const [selectedPayment, setSelectedPayment] = useState("");
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      direccion: "",
      telefono: "",
    },
    onSubmit: async (data) => {
      let order = {
        buyer: data,
        items: cart,
        total,
        paymentMethod: selectedPayment,
        date: serverTimestamp(),
      };
      let ordersCollections = collection(db, "orders");
      try {
        await addDoc(ordersCollections, order);
        cart.forEach((elemento) => {
          updateDoc(doc(db, "products", elemento.id), {
            stock: elemento.stock - elemento.quantity,
          });
        });
        clearCart();
        if (selectedPayment === "Efectivo") {
          Swal.fire({
            title: "Compra lograda exitosamente!",
            text: `El total a pagar es $${total}`,
            icon: "success",
            confirmButtonText: "OK",
            customClass: {
              title: "swal2-title-custom",
              htmlContainer: "swal2-text-custom",
              confirmButton: "swal2-confirm-button-custom",
            },
          }).then(() => {
            navigate("/");
          });
        } else if (selectedPayment === "MercadoPago") {
          navigate("/mercadopago");
        } else if (selectedPayment === "Transferencia") {
          navigate("/transferencia");
        }
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/.{3,25}$/, {
          message: "El nombre parece ser demasiado corto",
        }),

      apellido: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/.{3,25}$/, {
          message: "El apellido parece ser demasiado corto",
        }),

      direccion: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d).{6,50}$/, {
          message: "Agregue mas informacion en su direccion",
        }),

      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .matches(/^(?=.*\d).{10,13}$/, {
          message:
            "El numero de telefono no es valido, controle la cantidad de digitos",
        }),
    }),
    validateOnChange: false,
  });
  return (
    <>
      <form onSubmit={handleSubmit} className="formFormik">
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Dirección"
          variant="outlined"
          name="direccion"
          onChange={handleChange}
          error={errors.direccion ? true : false}
          helperText={errors.direccion}
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <FormControl
          variant="outlined"
          className="inputField"
          sx={{ minWidth: "70%" }}
        >
          <InputLabel id="payment-method-label">Método de Pago</InputLabel>
          <Select
            labelId="payment-method-label"
            id="payment-method"
            value={selectedPayment}
            onChange={handlePaymentChange}
            label="Método de Pago"
          >
            <MenuItem sx={{ fontFamily: "Sansation-light" }} value="Efectivo">
              Efectivo
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: "Sansation-light" }}
              value="MercadoPago"
            >
              MercadoPago
            </MenuItem>
            <MenuItem
              sx={{ fontFamily: "Sansation-light" }}
              value="Transferencia"
            >
              Transferencia
            </MenuItem>
          </Select>
        </FormControl>
        <div className="containerButton">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={!selectedPayment}
            sx={{
              backgroundColor: "#369a63",
              fontFamily: "Sansation-light",
              "&:hover": {
                backgroundColor: "#2c7a4b",
              },
            }}
          >
            REALIZAR PAGO
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formik;
