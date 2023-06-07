import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { productState } from "../../State/ProductState";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const ProductCard = ({ item }) => {
  const { name, price, image } = item;
  const { handleCart, handleAddToWishlist, wisthListToggle } =
    useContext(productState);
  console.log(wisthListToggle);

  return (
    <Card
      sx={{
        height: "25rem",
        width: "16rem",
        margin: ".5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",

        borderRadius: "0",
        boxShadow: "none",
      }}
    >
      <Toaster position=" top-center" />
      {/* to render thenew slogan on items with having a property new set to true */}
      <Box>
        {item.new ? (
          <Box
            sx={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#df2e38",
              color: "#fff",
              padding: "0.25rem 0.5rem",
              borderRadius: "4px",
              fontSize: "0.75rem",
              fontWeight: 500,
              width: "3rem",
              textTransform: "uppercase",
              border: "2px dotted #fff",
              minWidth: "fit-content",
            }}
          >
            New
          </Box>
        ) : null}
      </Box>
      <Link to={`/product/${item.id}`}>
        <CardMedia
          className="productImage"
          sx={{ backgroundSize: "cover" }}
          component="img"
          height="200"
          image={image}
          alt={name}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price : <strike>{(price + 50).toFixed(2)}</strike>{" "}
          <span style={{ color: "#df2e38" }}>${price}</span>
        </Typography>

        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            height: "3rem",
            justifyContent: "space-between",
          }}
        >
          <Button
            style={{
              textTransform: "none",
              width: "90%",
              color: "white",
              height: "3rem",

              borderRadius: "0",
              background: "#df2e38",
            }}
            onClick={() => handleCart(item)}
          >
            <ShoppingCartIcon /> <p>add to cart</p>
          </Button>
          <Button
            style={{
              textTransform: "none",
              borderRadius: "0",

              width: "10%",
              color: "black",
              height: "3rem",
              // Change color to red if added to wishlist
            }}
          >
            <FavoriteBorderIcon
              sx={{ color: wisthListToggle ? "red" : "black" }}
              onClick={() => {
                handleAddToWishlist(item);
              }}
            />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
