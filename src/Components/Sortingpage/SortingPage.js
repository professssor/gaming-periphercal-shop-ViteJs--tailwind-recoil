import {
  Box,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  Slider,
  ThemeProvider,
} from "@mui/material";
import { useContext } from "react";
import { createTheme } from "@mui/material/styles";
import { categoryState } from "../../State/CategoriesState";
import { productState } from "../../State/ProductState";

// Custom theme with black as the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

export default function SortingPage() {
  // Exported array of categories
  const {
    categories,
    handleCategoryFunction,
    selectedCategories,
    setSelectedCategories,
    sliderValue,
  } = useContext(categoryState);
  const {
    handlePriceToggle,
    selectedOption,
    handleSliderChange,
    setSliderValue,
    setSelectedOption,
  } = useContext(productState);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          opacity: ".86",
          color: "#df2e38",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {/* price sort */}
        <Box
          sx={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <h3>Price</h3>
          <Slider
            value={sliderValue}
            onChange={(e) => handleSliderChange(e)}
            sx={{ width: "80%" }}
            aria-label="Custom marks"
            defaultValue={0}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            step={100}
            marks={[
              { value: 0, label: "0" },
              { value: 500, label: "500" },
              { value: 1000, label: "1000" },
            ]}
          />
        </Box>
        {/* category sort */}
        <Box sx={{ width: "100%" }}>
          <h3>Categories</h3>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            {categories.map((category) => (
              <Box
                key={category.category}
                sx={{
                  display: "flex",
                }}
              >
                <Box sx={{ width: "4rem" }}>
                  {" "}
                  <p style={{ textAlign: "center" }}>{category.category}</p>
                </Box>

                <Checkbox
                  checked={selectedCategories.includes(category.category)}
                  onChange={() => handleCategoryFunction(category.category)}
                />
              </Box>
            ))}
          </Box>
        </Box>
        {/* price sort */}

        <Box sx={{ width: "100%" }}>
          <h3>Sort</h3>
          <RadioGroup
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            value={selectedOption}
            onChange={(event) => handlePriceToggle(event)}
            row
          >
            <p>
              <Radio value="desc" />
              <span>High to Low</span>
            </p>
            <p>
              <Radio value="asc" />
              <span>Low to High</span>
            </p>
          </RadioGroup>
        </Box>
        <Button
          onClick={() => {
            setSliderValue(0);
            setSelectedOption("");
            setSelectedCategories([]);
          }}
          type="text"
        >
          {" "}
          Clear Filter
        </Button>
      </div>
    </ThemeProvider>
  );
}
