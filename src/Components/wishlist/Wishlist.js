import { Box, Typography, Grid, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useContext } from "react";
import { productState } from "../../State/ProductState";
import bgproduct from "../../assets/bgproduct.avif";
import webimg from "../../assets/icons8-empty-box-96 (1).png";

export default function Wishlist() {
  const { wishlistArray, handleDeleteWishlistItem } = useContext(productState);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "2rem",

        background: `url(${bgproduct})`,
        color: "white",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          padding: "1rem",
          width: { xs: "80%", md: "60%" },

          background: "black",
          opacity: ".85",
          borderRadius: "1rem",
          color: "white",
          height: "max-content",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ marginBottom: "2rem" }}>
          Wishlist Page
        </Typography>

        {wishlistArray.length === 0 ? (
          <>
            <Typography
              sx={{ fontSize: "1.4rem", color: "red" }}
              variant="body1"
            >
              Your wishlist is empty. Start adding products to your wishlist
            </Typography>
            <Box
              sx={{
                margin: "2rem",
              }}
            >
              {" "}
              <img src={webimg} alt="" />
            </Box>
          </>
        ) : (
          wishlistArray.map((item) => (
            <Box
              key={item.id}
              sx={{
                padding: "1rem",
                marginBottom: "1rem",
                borderBottom: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                style={{
                  height: "6rem",
                  width: "5rem",
                  borderRadius: "0.5rem",
                }}
                src={item.image}
                alt={item.name}
              />

              <Box sx={{ marginLeft: "1rem", textAlign: "left" }}>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body1" color="red">
                  Price: <strong>${item.price}</strong>
                </Typography>
                <Typography variant="" color="white">
                  category: <strong>{item.category}</strong>
                </Typography>
              </Box>

              <IconButton
                onClick={() => handleDeleteWishlistItem(item)}
                sx={{ color: "red", marginLeft: "auto" }}
              >
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
}
