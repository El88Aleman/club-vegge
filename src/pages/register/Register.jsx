import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { db, signUp, loginGoogle } from "../../firebaseConfig.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import "../../components/global/Global.css";

const Register = () => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleClickPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signUp(userCredentials);
      if (res.user.uid) {
        await setDoc(doc(db, "users", res.user.uid), { rol: "user" });
        handleLogin({ email: res.user.email, rol: "user" });
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const googleSignUp = async () => {
    try {
      const res = await loginGoogle();
      if (res.user.uid) {
        await setDoc(doc(db, "users", res.user.uid), { rol: "user" });
        handleLogin({ email: res.user.email, rol: "user" });
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="containerLogin" onSubmit={handleSubmit}>
      <img
        src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737812866/Club%20Vegge/Club_Vegge_fbicie.png"
        alt="club vegge"
        height="250px"
        width="250px"
        className="imgHomeClubVegge"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        onChange={handleChange}
        className="inputField"
        sx={{ maxWidth: "80%" }}
      />
      <TextField
        id="password"
        label="Contraseña"
        variant="outlined"
        name="password"
        onChange={handleChange}
        type={showPassword ? "text" : "password"}
        className="inputField"
        sx={{ maxWidth: "80%" }}
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
      <button className="googleButton" type="button" onClick={googleSignUp}>
        <FaGoogle size={25} color="red" />
        REGISTRARME CON GOOGLE
      </button>
      <button className="button" type="submit">
        REGISTRARME
      </button>
      <Link to="/login" className="linkButton">
        YA ESTOY REGISTRADO
      </Link>
    </form>
  );
};

export default Register;
