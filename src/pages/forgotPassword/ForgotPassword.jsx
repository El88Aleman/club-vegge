import { TextField } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../../firebaseConfig";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="containerForgotPassword" onSubmit={handleSubmit}>
      <img
        src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1737812866/Club%20Vegge/Club_Vegge_fbicie.png"
        alt="club vegge"
        height="200px"
        width="200px"
        className="imgHomeClubVegge"
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="inputField"
        sx={{ minWidth: "70%" }}
        required
      />
      {error && <p className="errorText">{error}</p>}
      <button className="button" type="submit">
        RECUPERAR
      </button>
      <Link to="/login" className="linkButton">
        REGRESAR
      </Link>
    </form>
  );
};

export default ForgotPassword;
