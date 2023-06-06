import { Box, Button } from "@mui/material";
import { categories } from "../../backend/db/categories";
import "./ProductCategory.css";
import { Link } from "react-router-dom";

export default function ProductCategory() {
  return (
    <Box
      sx={{
        width: "100%",

        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>EXPLORE OUR PRODUCTS</h1>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "70%",
          overflow: "scroll",
        }}
      >
        {categories.map((category) => (
          <Box className="itemBox" sx={{ textAlign: "center" }}>
            <Link to={`/products/${category._id}`}>
              <img className="productImage" src={category.image} alt="" />
            </Link>
            <p style={{ fontSize: "1.4rem" }}>{category.category}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
