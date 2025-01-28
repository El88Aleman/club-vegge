import { Wallet } from "@mercadopago/sdk-react";
const Mercadopago = ({ preferenceId }) => {
  return (
    <div>
      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
      )}
    </div>
  );
};

export default Mercadopago;
