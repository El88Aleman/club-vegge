import "../../components/global/Global.css";
import { TextField } from "@mui/material";
import "./Login.css";

const Login = () => {
  return (
    <form className="containerLogin">
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#369a63", // Color del borde cuando no está seleccionado
            },
            "&:hover fieldset": {
              borderColor: "#2c7a4b", // Color del borde al pasar el ratón
            },
            "&.Mui-focused fieldset": {
              borderColor: "#369a63", // Color del borde cuando está seleccionado
            },
          },
          "& .MuiInputLabel-root": {
            color: "#369a63", // Color del label
            fontFamily: "Sansation-light", // Tipografía personalizada
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#369a63", // Color del label cuando está enfocado
          },
          "& .MuiInputBase-input": {
            color: "black", // Color del texto
            fontFamily: "Sansation-light", // Tipografía personalizada
          },
        }}
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        name="contraseña"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#369a63", // Color del borde cuando no está seleccionado
            },
            "&:hover fieldset": {
              borderColor: "#2c7a4b", // Color del borde al pasar el ratón
            },
            "&.Mui-focused fieldset": {
              borderColor: "#369a63", // Color del borde cuando está seleccionado
            },
          },
          "& .MuiInputLabel-root": {
            color: "#369a63", // Color del label
            fontFamily: "Sansation-light", // Tipografía personalizada
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#369a63", // Color del label cuando está enfocado
          },
          "& .MuiInputBase-input": {
            color: "black", // Color del texto
            fontFamily: "Sansation-light", // Tipografía personalizada
          },
        }}
      />
      <button className="button" type="submit">
        INICIAR SESION
      </button>
    </form>
  );
};

export default Login;
