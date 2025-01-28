import { Button, TextField } from "@mui/material";

const ProductsForm = () => {
  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          name="nombre"
          className="inputField"
          sx={{ minWidth: "70%" }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            backgroundColor: "#369a63",
            fontFamily: "Sansation-light",
            "&:hover": {
              backgroundColor: "#2c7a4b",
            },
          }}
        >
          CREAR
        </Button>
      </form>
    </>
  );
};

export default ProductsForm;
