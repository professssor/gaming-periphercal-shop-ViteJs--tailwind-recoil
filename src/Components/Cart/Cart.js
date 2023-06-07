import { Box, Button, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { productState } from "../../State/ProductState";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuth } from "../../State/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartArray, handleDeleteCartItem, setRender, render } =
    useContext(productState);
  // to stop the shut on click behaviour of cart
  const handleContainerClick = (e) => {
    e.stopPropagation();
  };

  // to calculate price of all the items in the cart
  const totalPrice = cartArray.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <Box
      sx={{
        overflow: "hidden",
        padding: "1rem",
        position: "absolute",
        right: "5rem",
        background: "white",
        opacity: ".98",
        width: "20rem",
        borderRadius: ".6rem",
        zIndex: "3",
      }}
      onClick={handleContainerClick}
    >
      {cartArray.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          your cart is empty
        </Typography>
      ) : (
        cartArray.map((cartItem) => (
          <Grid
            container
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            key={cartItem.id}
            sx={{
              marginBottom: "1rem",
              borderBottom: "1px solid #ddd",
              padding: ".5rem",
            }}
          >
            <Grid item>
              <img
                style={{
                  height: "6rem",
                  width: "5rem",
                  borderRadius: "0.5rem",
                }}
                src={cartItem.image}
                alt={cartItem.name}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ fontSize: ".9rem" }} variant="subtitle1">
                {cartItem.name}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Price: <strong>${cartItem.price}</strong>
                <Typography sx={{ padding: ".1rem" }}>
                  Qty : <strong>{cartItem.quantity}</strong>
                </Typography>
              </Typography>
            </Grid>
            <DeleteOutlineIcon onClick={() => handleDeleteCartItem(cartItem)} />
          </Grid>
        ))
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {cartArray.length >= 1 && (
          <>
            <p>
              {" "}
              <span style={{ color: "black" }}> Total price: </span>$
              {totalPrice.toFixed(2)}{" "}
            </p>

            <Link onClick={() => setRender(!render)} to="/checkout">
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  background: "red",
                  borderRadius: ".2rem",
                  margin: "auto",
                  textAlign: "center",
                  height: "2rem",

                  "&:hover": {
                    background: "black",
                  },
                }}
              >
                Proceed
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
}
