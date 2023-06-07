import { Box, Button } from "@mui/material";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productState } from "../../State/ProductState";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import bgproduct from "../../assets/bgproduct.avif";
import { Toaster } from "react-hot-toast";
export default function SinglePageProducts() {
  const { productId } = useParams();

  const { selectedProducts, handleCart, handleAddToWishlist, cartArray } =
    useContext(productState);

  const clickedProduct = selectedProducts.find(
    (product) => product.id === productId
  );
  const [selectedImg, setSelectedImg] = useState(clickedProduct?.image);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", md: "center" },
        flexDirection: { xs: "column", md: "row" },
        background: `url(${bgproduct})`,

        height: "100vh",
        maxHeight: "130vh",
      }}
    >
      <Toaster position=" top-center" />

      {/* left side */}
      <Box
        sx={{
          display: "flex",
        }}
      >
        {/* first container for small images */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",

            display: { xs: "none", md: "inline-flex" },
          }}
        >
          <img
            style={{
              height: "7rem",
              width: "7rem",
              margin: ".4rem",
              borderRadius: ".5rem",
            }}
            onClick={() => setSelectedImg(clickedProduct?.image)}
            src={clickedProduct?.image}
            alt=""
          />
          <img
            style={{
              height: "7rem",
              width: "7rem",
              margin: ".4rem",
              borderRadius: ".5rem",
            }}
            onClick={() => setSelectedImg(clickedProduct?.image)}
            src={clickedProduct?.image}
            alt=""
          />
        </Box>
        {/* second container for Main images */}
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "33rem", width: "33rem", borderRadius: "1rem" }}
            src={selectedImg || clickedProduct?.image}
            alt=""
          />
        </Box>
      </Box>
      {/* the right section of page */}
      <Box
        sx={{
          alignSelf: "center",
          height: "50vh",

          display: "flex",
          justifyContent: "flex-start",

          padding: "2rem",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <h2 sx={{ fontSize: "3rem" }}>{clickedProduct?.name}</h2>
          <p sx={{ fontSize: "3rem" }}>
            Price :{" "}
            <strike style={{ color: "red" }}>
              {(clickedProduct?.price + 50).toFixed(2)}
            </strike>{" "}
            <strong> ${clickedProduct?.price}</strong>
          </p>
          <p sx={{ fontSize: "3rem" }}>
            <span>category : </span>
            <strong> {clickedProduct?.category}</strong>
          </p>
          {cartArray.find((item) => item.id === clickedProduct?.id) ? (
            <p>
              Quantity:{" "}
              <strong>
                {
                  cartArray.find((item) => item.id === clickedProduct?.id)
                    .quantity
                }
              </strong>
            </p>
          ) : (
            <p>Quantity: 0</p>
          )}

          <p style={{ lineHeight: "1.4rem", opacity: ".7" }}>
            <strong>Description : </strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
            officiis earum sequi quasi nobis est nihil accusamus itaque laborum
            molestias atque id veniam voluptatibus voluptates obcaecati,
            nesciunt ab natus possimus minus magni facilis maxime ullam modi
            quod? Possimus, velit? Voluptates?
          </p>

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "flex-start" },

              flexDirection: "column",
              justifyContent: "space-around",

              height: "7rem",
            }}
          >
            <Button
              style={{
                textTransform: "none",
                width: "60%",
                color: "white",
                height: "3rem",

                borderRadius: "0",
                background: "#df2e38",
              }}
              onClick={() => handleCart(clickedProduct)}
            >
              <ShoppingCartIcon />
              <p>add to cart</p>
            </Button>
            <Button
              style={{
                textTransform: "none",
                borderRadius: "0",

                width: "60%",
                background: "black",
                padding: ".3rem",
                color: "white",
                height: "3rem",
              }}
              onClick={() => handleAddToWishlist(clickedProduct)}
            >
              <p>Add to wishlist</p>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
