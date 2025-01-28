import { Wallet } from "@mercadopago/sdk-react";
const Mercadopago = ({ preferenceId }) => {
  return (
    <div>
      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "blank" }} />
      )}
    </div>
  );
};

export default Mercadopago;
