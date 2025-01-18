import "../../components/global/Global.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { onSigIn } from "../../firebaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleClickPassword = () => setShowPassword(!showPassword);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSigIn(userCredentials);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="containerLogin" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        onChange={handleChange}
        className="inputField"
        sx={{ minWidth: "73%" }}
      />
      <TextField
        id="outlined-basic"
        label="Contraseña"
        variant="outlined"
        name="password"
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
        className="inputField"
        sx={{ minWidth: "70%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <button className="button" type="submit">
        INICIAR SESION
      </button>
    </form>
  );
};

export default Login;
