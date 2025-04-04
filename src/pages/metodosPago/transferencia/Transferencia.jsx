import Swal from "sweetalert2";
import "./Transferencia.css";
import { useNavigate } from "react-router-dom";
const Transferencia = () => {
  const alias = "clubvegge.mp";
  const cbu = "0000003100068320419678";
  const navigate = useNavigate();
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    Swal.fire({
      title: "Copiado!",
      text: `${text} ha sido copiado al portapapeles.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#369a63",
    }).then(() => {
      navigate("/userOrders");
    });
  };
  return (
    <div className="containerTransferencia">
      <h2 className="tituloTransferencia">Pago por Transferencia</h2>
      <div className="infoTransferencia">
        <div className="textoTransferencia">
          <strong>Alias:</strong>
          <span className="contenidoTransferencia">{alias}</span>
          <button className="buttonCopiar" onClick={() => handleCopy(alias)}>
            Copiar Alias
          </button>
        </div>
        <div className="textoTransferencia">
          <strong>CBU:</strong>
          <span className="contenidoTransferencia">{cbu}</span>
          <button className="buttonCopiar" onClick={() => handleCopy(cbu)}>
            Copiar CBU
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transferencia;
