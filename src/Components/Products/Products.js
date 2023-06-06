import { Box, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { categories } from "../../backend/db/categories";
import { products } from "../../backend/db/products";
import ProductCard from "../productCard/ProductCard";
import SortingPage from "../Sortingpage/SortingPage";
import bgproduct from "../../assets/bgproduct.avif";
import { useContext, useState } from "react";
import { categoryState } from "../../State/CategoriesState";
import { productState } from "../../State/ProductState";

export default function Products() {
  // tells us the id of the category clicked
  const { categoryId } = useParams();
  //   this tells us which category was chosen on home screen
  const clickedCategory = categories.find(
    (category) => category._id == categoryId
  ).category;

  const [filterBox, setFilterBox] = useState(false);

  // imported product state based on the category selected
  const { selectedCategories } = useContext(categoryState);
  selectedCategories.push(clickedCategory);
  const { selectedProducts } = useContext(productState);

  return (
    <Box sx={{ background: `url(${bgproduct})`, height: "100%" }}>
      <Button
        onClick={() => setFilterBox(!filterBox)}
        style={{
          display: "flex",
          borderRadius: "0",
          alignItems: "center",
          background: "black",

          position: "relative",
          color: "red",
          fontSize: "1rem",
        }}
        variant="text"
      >
        {" "}
        {!filterBox ? "show filter" : "hide filter"}
      </Button>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* box one  */}
        <Box
          sx={{
            margin: "1px solid red",
            overflow: "hidden",
            width: filterBox ? { xs: "80%", sm: "20rem" } : "0%",
            transition: "width 0.5s ease",
            // outline: "#df2e38 1px solid",
            height: "100vh",
            position: "sticky",
            top: "0",
            background: "whitesmoke",
            alignSelf: "flex-start",
          }}
        >
          {filterBox && <SortingPage />}
        </Box>

        {/* box 2 */}
        <Box
          style={{
            flex: "1",
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            padding: ".5rem",
            height: "100%",
          }}
        >
          {/* mapping over product to render them  */}
          {selectedProducts.map(
            (product) =>
              // checking for mapped product which also exists in the selectedCategories array
              selectedCategories.includes(product.category) && (
                <ProductCard item={product} />
              )
          )}
        </Box>
      </Box>
    </Box>
  );
}
