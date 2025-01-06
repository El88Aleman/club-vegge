import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGoogle } from "react-icons/fa";
import "../../components/global/Global.css";
import { onSigIn } from "../../firebaseConfig";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="containerCheckOut">
      <img
        src="https://res.cloudinary.com/dfcnmxndf/image/upload/v1735256424/Club%20Vegge/iwtctrnzsuuhjkodw4fq.png"
        alt="Club-Vegge"
        height="300px"
        width="300px"
        className="imgClubVegge"
      />
      <div className="containerForm">
        <Form.Label className="inputLabel" htmlFor="inputPassword5">
          Email
        </Form.Label>
        <Form.Control
          type="Email"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          className="inputControl"
        />
        <Form.Label className="inputLabel" htmlFor="inputPassword5">
          Contraseña
        </Form.Label>
        <Form.Control
          type="Contraseña"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          className="inputControl"
        />
        <div className="checkout">
          <p className="textoCheckOut">Iniciar Sesion con</p>
          <FaGoogle size={25} />
          <p className="textoCheckOut">No estoy resgistrado! Click aqui</p>
        </div>
        <div className="containerButton">
          <Button className="button" variant="outline-dark">
            Iniciar Sesion
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
