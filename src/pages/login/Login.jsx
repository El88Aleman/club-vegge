import "../../components/global/Global.css";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import { db, loginGoogle, logOut, onSigIn } from "../../firebaseConfig";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { handleLogin, logoutContext } = useContext(AuthContext);
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
      const res = await onSigIn(userCredentials);
      if (res.user) {
        const userCollection = collection(db, "users");
        const userRef = doc(userCollection, res.user.uid);
        const userDoc = await getDoc(userRef);
        let finalyUser = {
          email: res.user.email,
          rol: userDoc.data().rol,
        };
        handleLogin(finalyUser);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const googleSingIn = async () => {
    let res = await loginGoogle();
    let finalyUser = {
      email: res.user.email,
      rol: "user",
    };
    handleLogin(finalyUser);
    navigate("/home");
  };
  const handleLogout = () => {
    logOut();
    logoutContext();
    navigate("/");
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
        type={showPassword ? "text" : "password"}
        onChange={handleChange}
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
      <button className="googleButton" type="button" onClick={googleSingIn}>
        <FaGoogle size={25} color="red" />
        INICIAR SESION CON GOOGLE
      </button>
      <button className="button" type="submit">
        INICIAR SESION
      </button>
      <Link to="/forgotPassword" className="linkButton">
        OLVIDE MI CONTRASEÑA
      </Link>
      <button className="button" type="button" onClick={handleLogout}>
        CERRAR SESION
      </button>
    </form>
  );
};

export default Login;
