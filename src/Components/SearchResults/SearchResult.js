import React, { useContext } from "react";
import { Box, Button, Typography } from "@mui/material";
import { productState } from "../../State/ProductState";
import { Link, useNavigate } from "react-router-dom";

const SearchResult = () => {
  const { searchedProducts, searchQuery, setSearchQuery } =
    useContext(productState);

  return (
    searchQuery && (
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: { xs: "1%", sm: "20%", md: "57%" },
          width: { xs: "100%", sm: "30rem" },

          flexWrap: "wrap",

          background: "white",
          color: "black",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          zIndex: 10,
          display: "flex",
        }}
      >
        {searchQuery && searchedProducts.length === 0 && (
          <Typography variant="body1">
            Sorry, the product does not exist.
          </Typography>
        )}
        {searchedProducts.map((searchItem, index) => (
          <Box
            key={searchItem.id}
            sx={{
              display: "flex",
              width: "50%",
              alignItems: "center",
              marginBottom: "1rem",
              "&:hover": {
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            <img
              style={{
                height: "4rem",
                width: "4rem",
                borderRadius: "0.5rem",
                marginRight: "1rem",
              }}
              src={searchItem.image}
              alt=""
            />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  marginBottom: "0.5rem",
                  fontSize: "1rem",
                }}
              >
                <Link
                  onClick={() => setSearchQuery("")}
                  to={`/product/${searchItem.id}`}
                >
                  {" "}
                  {searchItem.name}
                </Link>
              </Typography>
              <Typography
                variant="p"
                sx={{ marginBottom: "0.5rem", fontSize: "1rem" }}
              >
                <span style={{ color: "red" }}>$</span> ${searchItem.price}
              </Typography>
              <Typography sx={{ fontSize: "1rem" }} variant="p">
                {searchItem.category}
              </Typography>
              <hr style={{ color: "black" }} />
            </Box>
          </Box>
        ))}
      </Box>
    )
  );
};

export default SearchResult;
