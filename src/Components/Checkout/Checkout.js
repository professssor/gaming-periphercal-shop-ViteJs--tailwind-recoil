import { Box, Button } from "@mui/material";
import { useContext } from "react";
import { productState } from "../../State/ProductState";
import { Toaster, toast } from "react-hot-toast";

export default function Checkout() {
  const { cartArray } = useContext(productState);
  const totalPrice = cartArray.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  // to make the payment success
  const handlePayment = () => {
    toast.success(" Payment successful ", {
      position: " top-center",
      duration: 2000,
    });

    setTimeout(() => {
      toast.success(" Order placed successfully!! ", {
        position: " top-center",
        duration: 2000,
      });
    }, 5000);
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <Toaster />
      <p style={{ color: "black", textAlign: "center", fontSize: "2rem" }}>
        Checkout
      </p>
      {cartArray.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cartArray.map((item) => (
            <div
              style={{
                width: "70%",
                display: "flex",
                alignItems: "center",
                borderBottom: "solid black .5px",
              }}
              key={item.id}
            >
              <Box>
                <img
                  style={{
                    padding: ".3",
                    height: "8rem",
                    width: "8rem",
                  }}
                  src={item.image}
                  alt=""
                />{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: ".4rem",
                  marginLeft: "1rem",
                }}
              >
                <h3 style={{ color: "red" }}>{item.name}</h3>
                <p>
                  Price:{" "}
                  <strong style={{ color: "red" }}> ${item.price}</strong>
                </p>
                <p>Quantity: {item.quantity}</p>
              </Box>
              <Box></Box>
            </div>
          ))}

          <Box
            sx={{
              display: "flex",
              width: "60%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "1.4rem", paddingTop: "1rem" }}>
              total tmount :{" "}
              <strong style={{ color: "red" }}> ${totalPrice.toFixed()}</strong>
            </p>
            <Button
              onClick={handlePayment}
              variant="contained"
              sx={{
                background: "red",
                padding: "1rem",
                marginTop: "1rem",
                "&:hover": {
                  background: "black",
                },
              }}
            >
              Proceed to Payment
            </Button>
          </Box>
        </div>
      )}
    </Box>
  );
}
